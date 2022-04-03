package event

import (
	"bufio"
	"collector/share"
	"errors"
	"fmt"
	"io"
	"os"
	"path/filepath"
	"strings"
)

// 参考字节的, 以 osquery 的为标准开发

const (
	yumConfig              = "/etc/yum.conf"
	yumReposDir            = "/etc/yum.repos.d"
	yumConfigFileExtension = ".repo"
	YUM_DATATYPE           = 3003
	YUM_FILELIMIT          = 100
	YUM_RECORDLIMIT        = 1000
)

var _ Event = (*Yum)(nil)

type Yum struct {
	BasicEvent
}

func (Yum) DataType() int {
	return YUM_DATATYPE
}

func (y Yum) Run() (result string, err error) {
	config := make(map[string]string)
	sourcesList := make([]string, 0, 20)
	files := y.getfiles(yumReposDir)
	files = append(files, yumConfig)
Loop:
	for _, file := range files {
		var f *os.File
		if f, err = os.Open(file); err != nil {
			continue
		}
		s := bufio.NewScanner(io.LimitReader(f, 1024*1024))
		for s.Scan() {
			fields := strings.Split(s.Text(), "=")
			if len(fields) == 2 && strings.TrimSpace(fields[0]) == "baseurl" {
				sourcesList = append(sourcesList, strings.TrimSpace(fields[1]))
				if len(sourcesList) > YUM_RECORDLIMIT {
					f.Close()
					break Loop
				}
			}
		}
		f.Close()
	}
	if len(sourcesList) > 0 {
		if encodedsource, err := share.Marshal(sourcesList); err == nil {
			config["sources"] = string(encodedsource)
		}
	} else {
		err = errors.New("yum config is empty")
	}
	result, err = share.MarshalString(config)
	return
}

func (Yum) getfiles(pth string) (files []string) {
	files = make([]string, 0, 10)
	filepath.Walk(pth, func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}
		if info.Mode().IsRegular() && strings.HasPrefix(info.Name(), yumConfigFileExtension) {
			files = append(files, path)
			if len(files) > YUM_FILELIMIT {
				return fmt.Errorf("yum files limitation")
			}
		}
		return nil
	})
	return files
}