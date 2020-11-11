using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ToDoList.Models
{
    /// <summary>
    /// Partial Update Model
    /// </summary>
    public class ToDoItemUpdateModel
    {
        /// <summary>
        /// If not empty, database will update the value
        /// </summary>
        public string Description { get; set; }
        public bool? Done { get; set; }
        public bool? Favorite { get; set; }
    }
}
