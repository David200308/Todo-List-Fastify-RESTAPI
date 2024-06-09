import * as todoController from '../controllers/todo.controller';
import { RouteOptions } from 'fastify';
import { 
	AddTaskSchema, 
	GetTaskSchema, 
	DeleteTaskSchema,
	PutTaskSchema
} from './documentation/todo.api';

// Task Routes
export const getTaskRoute: RouteOptions = {
	method: 'GET',
	url: '/api/tasks',
	handler: todoController.getTask,
	schema: GetTaskSchema,
};

export const postTaskRoute: RouteOptions = {
	method: 'POST',
	url: '/api/task',
	handler: todoController.addTask,
	schema: AddTaskSchema,
};

export const putTaskRoute: RouteOptions = {
	method: 'PUT',
	url: '/api/task',
	handler: todoController.updateTask,
	schema: PutTaskSchema,
};

export const deleteTaskRoute: RouteOptions = {
	method: 'DELETE',
	url: '/api/task',
	handler: todoController.deleteTask,
	schema: DeleteTaskSchema,
};

