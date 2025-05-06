export const config = {
  matcher: ['/api/games']
}

export const middleware = (req) => {

  console.log('here')

  return Response.json({
    message: 'Hello from middleware'
  })
}