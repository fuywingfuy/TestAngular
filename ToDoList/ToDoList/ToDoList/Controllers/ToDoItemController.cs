using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using ToDoList.Models;
using ToDoList.Services;

namespace ToDoList.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ToDoItemController : ControllerBase
    {
        // private MemoryRepository _repository = MemoryRepository.Instance;
        private IRepository _repository;

        // public ToDoItemController(IRepository repository)
         public ToDoItemController()
         {
             _repository = new MongoDBTrainingRepository();
         }

        /// <summary>
        /// Query ToDoItem by specific description and done
        /// </summary>
        /// <remarks>
        /// In remarks, we can document some detail information
        /// </remarks>
        /// <param name="description">ToDoItem description</param>
        /// <param name="done">ToDoItem status</param>
        /// <returns></returns>
        [HttpGet]
        public async Task<ActionResult<List<ToDoItem>>> QueryAsync(
            string description, bool? done)
        {
            var list = await _repository.QueryAsync(description, done);
            return Ok(list);
        }

        [HttpPatch("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<ToDoItem>> UpdateAsync(
            [Required] string id,
            [Required] ToDoItemUpdateModel updateModel)
        {
            var modelInDb = await _repository.GetAsync(id);
            if (modelInDb == null)
                return NotFound(new Dictionary<string, string>() { { "message", $"Can't find {id}" } });

            //update
            var updated = await _repository.UpdateAsync(id, updateModel);
            return Ok(updated);
        }

        [HttpPut]
        public async Task<ActionResult<ToDoItem>> UpsertAsync(ToDoItem item)
        {
            //check id
            if (string.IsNullOrEmpty(item.Id))
                return BadRequest(new Dictionary<string, string>() { { "message", "Id is required" } });

            await _repository.UpsertAsync(item);

            var model = await _repository.GetAsync(item.Id);
            if (model == null)
                return new ObjectResult(500) { };

            return Ok(model);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteAsync(
            [Required] string id)
        {
            var modelInDb = await _repository.GetAsync(id);
            if (modelInDb == null)
                return NotFound(new Dictionary<string, string>() { { "message", $"Can't find {id}" } });

            await _repository.DeleteAsync(id);

            return NoContent();
        }
    }
}
