export const AddTaskSchema = {
	description: 'Create a new Task',
	tags: ['tasks'],
	body: {
		type: 'object',
		properties: {
			title: { type: 'string' },
			content: { type: 'string' },
			deadline: { type: 'string' },
			isCompleted: { type: 'boolean' },
			userId: { type: 'string' },
		},
	},
	response: {
		200: {
			description: 'Successful response',
			type: 'object',
			properties: {
				_id: { type: 'string' },
				title: { type: 'string' },
				content: { type: 'string' },
				deadline: { type: 'string' },
				isCompleted: { type: 'boolean' },
				userId: { type: 'string' },
				__v: { type: 'number' },
			},
		},
	},
};

export const PutTaskSchema = {
	description: 'Update a Task',
	tags: ['tasks'],
	querystring: {
		type: 'object',
		properties: {
			id: {
				type: 'string'
			}
		},
	},
	body: {
		type: 'object',
		properties: {
			title: { type: 'string' },
			content: { type: 'string' },
			deadline: { type: 'string' },
			isCompleted: { type: 'boolean' },
			userId: { type: 'string' },
		},
	},
	response: {
		200: {
			description: 'Successful response',
			type: 'object',
			properties: {
				_id: { type: 'string' },
				title: { type: 'string', optional: true },
				content: { type: 'string', optional: true },
				deadline: { type: 'string', optional: true },
				isCompleted: { type: 'boolean', optional: true },
				userId: { type: 'string' },
				__v: { type: 'number' },
			},
		},
	},
};

export const GetTaskSchema = {
	description: 'Gets a task',
	tags: ['tasks'],
	querystring: {
		type: 'object',
		properties: {
			id: {
				type: 'string'
			}
		},
	},
	response: {
		200: {
			description: 'Successful response',
			type: 'object',
			properties: {
				_id: { type: 'string' },
				title: { type: 'string' },
				content: { type: 'string' },
				deadline: { type: 'string' },
				isCompleted: { type: 'boolean' },
				userId: { type: 'string' },
				__v: { type: 'number' },
			},
		},
	},
};

export const DeleteTaskSchema = {
	description: 'Deletes a task',
	tags: ['tasks'],
	querystring: {
		type: 'object',
		properties: {
			id: {
				type: 'string'
			}
		},
	},
	response: {
		200: {
			description: 'Successful response',
			type: 'object',
			properties: {
				_id: { type: 'string' },
				title: { type: 'string' },
				content: { type: 'string' },
				deadline: { type: 'string' },
				isCompleted: { type: 'boolean' },
				userId: { type: 'string' },
				__v: { type: 'number' },
			},
		},
	},
};
