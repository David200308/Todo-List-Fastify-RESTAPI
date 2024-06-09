import { 
    getTaskRoute, 
    postTaskRoute, 
    putTaskRoute,
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
    putTaskRoute,
	deleteTaskRoute,
    getUserByIdRoute,
    addUserRoute,
    deleteUserRoute
];

export default routes;