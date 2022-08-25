package share

import (
	"context"
	"crypto/md5"
	"encoding/hex"
	"strconv"

	plugin "github.com/chriskaliX/SDK/transport"
)

var Env = "prod"

var (
	GContext, GCancel = context.WithCancel(context.Background())
	Client            = plugin.New(GCancel)
)

func MD5(v string) string {
	d := []byte(v)
	m := md5.New()
	m.Write(d)
	return hex.EncodeToString(m.Sum(nil))
}

func ParseUint32(input string) (output uint32) {
	_output, err := strconv.ParseUint(input, 10, 32)
	if err != nil {
		return
	}
	output = uint32(_output)
	return
}
