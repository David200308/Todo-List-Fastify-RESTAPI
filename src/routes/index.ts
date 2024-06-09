import { 
    getTaskRoute, 
    postTaskRoute, 
    deleteTaskRoute 
} from './task.routes';
import {
    getUserByIdRoute,
    addUserRoute,
    deleteUserRoute
} from './user.routes';

const routes = [
	getTaskRoute,
	postTaskRoute,
	deleteTaskRoute,
    getUserByIdRoute,
    addUserRoute,
    deleteUserRoute
];

export default routes;