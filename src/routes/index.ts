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

const getTaskRoute: RouteOptions = {
	method: 'GET',
	url: '/api/tasks/:id',
	handler: todoController.getTask,
	schema: GetTaskSchema,
};
const postTaskRoute: RouteOptions = {
	method: 'POST',
	url: '/api/task',
	handler: todoController.addTask,
	schema: AddTaskSchema,
};

const putTaskTitleRoute: RouteOptions = {
	method: 'PUT',
	url: '/api/task/update/title/:id',
	handler: todoController.updateTaskTitle,
	schema: PutTaskTitleSchema,
};

const putTaskContentRoute: RouteOptions = {
	method: 'PUT',
	url: '/api/task/update/content/:id',
	handler: todoController.updateTaskContent,
	schema: PutTaskContentSchema,
};

const putTaskDeadlineRoute: RouteOptions = {
	method: 'PUT',
	url: '/api/task/update/deadline/:id',
	handler: todoController.updateTaskDeadline,
	schema: PutTaskDeadlineSchema,
};

const putTaskIsCompletedRoute: RouteOptions = {
	method: 'PUT',
	url: '/api/task/update/status/:id',
	handler: todoController.updateTaskIsCompleted,
	schema: PutTaskIsCompletedSchema,
};

const deleteTaskRoute: RouteOptions = {
	method: 'DELETE',
	url: '/api/task/:id',
	handler: todoController.deleteTask,
	schema: DeleteTaskSchema,
};

const routes = [
	getTaskRoute,
	postTaskRoute,
	putTaskTitleRoute,
	putTaskContentRoute,
	putTaskDeadlineRoute,
	putTaskIsCompletedRoute,
	deleteTaskRoute,
];

export default routes;
