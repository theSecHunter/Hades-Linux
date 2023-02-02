package handler

import (
	"context"
	"encoding/json"
	"hboat/pkg/basic/mongo"
	"hboat/pkg/grpc/transfer/pool"
	pb "hboat/pkg/grpc/transfer/proto"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type Processes struct{}

var _ Event = (*Processes)(nil)

func (p *Processes) ID() int32 { return 1001 }

func (c *Processes) Name() string { return "processes" }

func (c *Processes) Handle(m map[string]string, req *pb.RawData, conn *pool.Connection) error {
	// extract from "data"
	data := make([]map[string]interface{}, 0)
	err := json.Unmarshal([]byte(m["data"]), &data)
	if err != nil {
		return err
	}
	options := options.Update().SetUpsert(true)
	_, err = mongo.AssetC.UpdateOne(context.Background(), bson.M{"agent_id": req.AgentID},
		bson.M{"$set": bson.M{c.Name(): data}}, options)
	return err
}

func init() {
	RegistEvent(&Processes{})
}
