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

export const PutTaskTitleSchema = {
	description: 'Upstrings task title',
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

export const PutTaskContentSchema = {
	description: 'Upstrings task content',
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
			content: { type: 'string' },
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

export const PutTaskDeadlineSchema = {
	description: 'Upstrings task deadline',
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
			deadline: { type: 'string' },
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

export const PutTaskIsCompletedSchema = {
	description: 'Upstrings task title',
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
			isCompleted: { type: 'boolean' },
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
