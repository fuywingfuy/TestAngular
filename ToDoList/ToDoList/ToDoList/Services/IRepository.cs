using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ToDoList.Models
{
    public interface IRepository
    {
        Task DeleteAsync(string id);
        Task<ToDoItem> GetAsync(string id);
        Task<List<ToDoItem>> QueryAsync(string description, bool? done);
        Task<ToDoItem> UpdateAsync(string id, ToDoItemUpdateModel updateModel);
        Task UpsertAsync(ToDoItem model);
    }
}
