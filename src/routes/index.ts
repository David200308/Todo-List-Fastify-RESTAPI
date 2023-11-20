import { 
    getTaskRoute, 
    postTaskRoute, 
    putTaskTitleRoute, 
    putTaskContentRoute, 
    putTaskDeadlineRoute, 
    putTaskIsCompletedRoute, 
    deleteTaskRoute 
} from './task.routes';
import {
    getUserByIdRoute,
    getUserByEmailRoute,
    addUserRoute,
    deleteUserRoute
} from './user.routes';

const routes = [
	getTaskRoute,
	postTaskRoute,
	putTaskTitleRoute,
	putTaskContentRoute,
	putTaskDeadlineRoute,
	putTaskIsCompletedRoute,
	deleteTaskRoute,
    getUserByIdRoute,
    getUserByEmailRoute,
    addUserRoute,
    deleteUserRoute
];

export default routes;