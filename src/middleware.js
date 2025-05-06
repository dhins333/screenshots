export const config = {
  matcher: ['/api/games']
}

export const middleware = (req) => {
  return Response.json({
    message: 'Hello from middleware'
  })
}