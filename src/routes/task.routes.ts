import * as todoController from '../controllers/todo.controller';
import { RouteOptions } from 'fastify';
import { 
	AddTaskSchema, 
	GetTaskSchema, 
	PutTaskTitleSchema, 
	PutTaskContentSchema, 
	PutTaskDeadlineSchema, 
	PutTaskIsCompletedSchema, 
	DeleteTaskSchema
} from './documentation/todo.api';

// Task Routes
export const getTaskRoute: RouteOptions = {
	method: 'GET',
	url: '/api/tasks/:id',
	handler: todoController.getTask,
	schema: GetTaskSchema,
};

export const postTaskRoute: RouteOptions = {
	method: 'POST',
	url: '/api/task',
	handler: todoController.addTask,
	schema: AddTaskSchema,
};

export const putTaskTitleRoute: RouteOptions = {
	method: 'PUT',
	url: '/api/task/update/title/:id',
	handler: todoController.updateTaskTitle,
	schema: PutTaskTitleSchema,
};

export const putTaskContentRoute: RouteOptions = {
	method: 'PUT',
	url: '/api/task/update/content/:id',
	handler: todoController.updateTaskContent,
	schema: PutTaskContentSchema,
};

export const putTaskDeadlineRoute: RouteOptions = {
	method: 'PUT',
	url: '/api/task/update/deadline/:id',
	handler: todoController.updateTaskDeadline,
	schema: PutTaskDeadlineSchema,
};

export const putTaskIsCompletedRoute: RouteOptions = {
	method: 'PUT',
	url: '/api/task/update/status/:id',
	handler: todoController.updateTaskIsCompleted,
	schema: PutTaskIsCompletedSchema,
};

export const deleteTaskRoute: RouteOptions = {
	method: 'DELETE',
	url: '/api/task/:id',
	handler: todoController.deleteTask,
	schema: DeleteTaskSchema,
};

