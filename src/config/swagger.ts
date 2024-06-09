export const Options = {
	routePrefix: '/docs',
	exposeRoute: true,
	swagger: {
		info: {
			title: 'Tasks API',
			description: 'A Todo List REST API with TypeScript, MongoDB, Fastify and Swagger',
			version: '1.0.0',
		},
		host: ['localhost:3000', 'todo.api.skyproton.org'],
		schemes: ['http'],
		consumes: ['application/json'],
		produces: ['application/json']
	},
};
