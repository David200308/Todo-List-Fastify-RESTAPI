export const Options = {
	routePrefix: '/docs',
	exposeRoute: true,
	swagger: {
		info: {
			title: 'Tasks API',
			description: 'A Todo List REST API with TypeScript, MongoDB, Fastify and Swagger',
			version: '1.0.0',
		},
		externalDocs: {
			url: 'https://swagger.io',
			description: 'Find more info here',
		},
		host: 'localhost:3000',
		schemes: ['http'],
		consumes: ['application/json'],
		produces: ['application/json']
	},
};
