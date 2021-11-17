let servers = [
	{id: '1', name: 'AWS', status: 'working'},
	{id: '2', name: 'Google Cloud', status: 'working'},
	{id: '3', name: 'Yandex Cloud', status: 'working'},
	{id: '4', name: 'Microsoft', status: 'pending'}
]


export const getAll = (request, response) => {
	response.status(200).json(servers)
}

export const create = (request, response) => {
	const newServer = {
		id: Date.now().toString(),
		...request.body
	}
	servers.push(newServer)
	response.status(201).json(newServer)
}


export const remove = (request, response) => {
	servers = servers.filter(s => s.id != request.params.id)
	response.json({message: 'Server has been removed.'})
}