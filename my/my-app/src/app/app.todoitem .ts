export interface ToDoItem {
      id: string;
      description: string;
      createdTime: Date;
      favorite: boolean;
      done: boolean;
      children: ToDoItem[];

  }



