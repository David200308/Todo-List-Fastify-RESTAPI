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
    addUserRoute,
    deleteUserRoute
];

export default routes;