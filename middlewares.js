import colors from 'colors'

export function requestTime(request, response, next) {
	request.requestTime = Date.now()

	// function exit and go to another function
	next()
}

export function logger(request, response, next) {

	console.log(colors.bgGreen.black(`RequestedTime: ${request.requestTime}`))

	next()
}