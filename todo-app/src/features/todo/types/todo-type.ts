export type Todo = {
  objectId: string;
  ownerId: string;
  title: string;
  isCompleted: boolean;
  created: Date;
  updated: Date;
};

export type InputCreateTodo = {
  title: string;
  isCompleted: boolean;
};
