using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToDoList.Models;

namespace ToDoList.Services
{
    public class MongoDBTrainingRepository : IRepository
    {
        MongoClient _client;
        private readonly IMongoCollection<ToDoItem> _collection;
       
        public MongoDBTrainingRepository()
        {
            _client = new MongoClient("mongodb://localhost:27017");
            _collection = _client.GetDatabase("test").GetCollection<ToDoItem>("ItemList");
        }

        public async Task DeleteAsync(string id)
        {
            await _collection.DeleteOneAsync(itemlist => itemlist.Id == id);
        }

        public async Task<ToDoItem> GetAsync(string id)
        {
            return await _collection.FindSync(itemlist => itemlist.Id == id).FirstAsync();
        }

        public async Task<List<ToDoItem>> QueryAsync(string description, bool? done)
        {
            IEnumerable<ToDoItem> models = await _collection.Find(itemlist => true).ToListAsync();

            if (!string.IsNullOrEmpty(description))
                models = models.Where(v => v.Description?.IndexOf(description, StringComparison.OrdinalIgnoreCase) >= 0);

            if (done != null)
                models = models.Where(v => v.Done == done.Value);

            return models.ToList();
            // return null;
            // return await _collection.Find(i => true).ToListAsync();
            // throw new NotImplementedException();
        }

        public async Task<ToDoItem> UpdateAsync(string id, ToDoItemUpdateModel updateModel)
        {
            //IEnumerable<ToDoItem> models = await _collection.Find(itemlist => true).ToListAsync();
            //models = await _collection.Find(itemlist => true).ToList();
            //if (_dic.TryGetValue(id, out var item))
            //{
            //    if (!string.IsNullOrEmpty(updateModel.Description))
            //        item.Description = updateModel.Description;

            //    if (updateModel.Favorite != null)
            //        item.Favorite = updateModel.Favorite.Value;

            //    if (updateModel.Done != null)
            //        item.Done = updateModel.Done.Value;

            //    return item;
            //}
            // return null;
             return null;
            // throw new NotImplementedException();
        }

        public async Task UpsertAsync(ToDoItem model)
        {
            await _collection.ReplaceOneAsync(itemlist => itemlist.Id == model.Id, model);          
        }
    }
}
