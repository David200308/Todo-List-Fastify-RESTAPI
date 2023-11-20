import * as userController from '../controllers/user.controller';
import { RouteOptions } from 'fastify';
import {
	GetUserByIdSchema,
	GetUserByEmailSchema,
	AddUserSchema,
	DeleteUserSchema
} from './documentation/user.api';


// User Routes
export const getUserByIdRoute: RouteOptions = {
	method: 'GET',
	url: '/api/users/:id',
	handler: userController.getUserById,
	schema: GetUserByIdSchema,
};

export const getUserByEmailRoute: RouteOptions = {
	method: 'GET',
	url: '/api/users/:email',
	handler: userController.getUserByEmail,
	schema: GetUserByEmailSchema,
};

export const addUserRoute: RouteOptions = {
	method: 'POST',
	url: '/api/user',
	handler: userController.addUser,
	schema: AddUserSchema,
};

export const deleteUserRoute: RouteOptions = {
	method: 'DELETE',
	url: '/api/user/:id',
	handler: userController.deleteUser,
	schema: DeleteUserSchema,
};
