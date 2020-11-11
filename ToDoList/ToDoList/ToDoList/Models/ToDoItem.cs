using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
namespace ToDoList.Models
{
    public class ToDoItem
    {
        // 存放数据类型
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        [BsonElement("description")]
        public string Description { get; set; }
        [BsonElement("createdTime")]
        public DateTime CreatedTime { get; set; } 
        [BsonElement("done")]
        public bool Done { get; set; }
        [BsonElement("favorite")]
        public bool Favorite { get; set; }
        [BsonElement("children")]
        public ToDoItem[] Children { get; set; }
    }
}
