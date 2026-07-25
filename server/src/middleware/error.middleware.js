export function notFound(request, response) {
  response.status(404).json({ message: `Route ${request.method} ${request.originalUrl} was not found.` })
}

export function errorHandler(error, _request, response, _next) {
  console.error(error)
  response.status(error.status || 500).json({ message: error.message || 'Internal server error.' })
}
