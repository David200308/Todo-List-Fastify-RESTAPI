import * as userController from '../controllers/user.controller';
import { RouteOptions } from 'fastify';
import {
	GetUserByIdSchema,
	AddUserSchema,
	DeleteUserSchema
} from './documentation/user.api';


// User Routes
export const getUserByIdRoute: RouteOptions = {
	method: 'GET',
	url: '/api/users',
	handler: userController.getUserById,
	schema: GetUserByIdSchema,
};

export const addUserRoute: RouteOptions = {
	method: 'POST',
	url: '/api/user',
	handler: userController.addUser,
	schema: AddUserSchema,
};

export const deleteUserRoute: RouteOptions = {
	method: 'DELETE',
	url: '/api/user',
	handler: userController.deleteUser,
	schema: DeleteUserSchema,
};
