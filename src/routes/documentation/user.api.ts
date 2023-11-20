export const AddUserSchema = {
	description: 'Create a new user',
	tags: ['users'],
	body: {
		type: 'object',
		properties: {
			firstname: { type: 'string' },
            lastname: { type: 'string' },
            email: { type: 'string' },
		},
	},
	response: {
		200: {
			description: 'Successful response',
			type: 'object',
			properties: {
				_id: { type: 'string' },
				firstname: { type: 'string' },
                lastname: { type: 'string' },
                email: { type: 'string' },
				__v: { type: 'number' },
			},
		},
	},
};

export const GetUserByIdSchema = {
	description: 'Gets a user by UserId',
	tags: ['users'],
	params: {
		type: 'object',
		properties: {
			id: {
				type: 'string',
				description: 'user Id'
			}
		}
	},
	response: {
		200: {
			description: 'Successful response',
			type: 'object',
			properties: {
				_id: { type: 'string' },
				firstname: { type: 'string' },
                lastname: { type: 'string' },
                email: { type: 'string' },
				__v: { type: 'number' },
			},
		},
	},
};

export const GetUserByEmailSchema = {
	description: 'Gets a user by Email',
	tags: ['users'],
	params: {
		type: 'object',
		properties: {
			email: {
				type: 'string',
				description: 'Email'
			}
		}
	},
	response: {
		200: {
			description: 'Successful response',
			type: 'object',
			properties: {
				_id: { type: 'string' },
				firstname: { type: 'string' },
                lastname: { type: 'string' },
                email: { type: 'string' },
				__v: { type: 'number' },
			},
		},
	},
};

export const DeleteUserSchema = {
	description: 'Deletes a user',
	tags: ['users'],
	params: {
		type: 'object',
		properties: {
			id: {
				type: 'string',
				description: 'user Id',
			},
		},
	},
	response: {
		200: {
			description: 'Successful response',
			type: 'object',
			properties: {
				_id: { type: 'string' },
				firstname: { type: 'string' },
                lastname: { type: 'string' },
                email: { type: 'string' },
				__v: { type: 'number' },
			},
		},
	},
};
