import { strapi } from '@strapi/client'

const API_BASE = '/api'
const GET_GAMES = `${API_BASE}/games`

const STRAPI_BASE_URL = 'https://energized-nature-8397cf66fd.strapiapp.com/api'

const strapiClient = strapi({
  baseURL: STRAPI_BASE_URL,
  auth: process.env.STRAPI_TOKEN
})

const gamesCollection = strapiClient.collection('games')

export const config = {
  matcher: ['/api/games']
}

export const middleware = async (req) => {
  if (req.nextUrl.pathname === GET_GAMES) {
    try {
      const games = await gamesCollection.find({
        fields: ['documentId', 'name', 'coverBlur', 'dominantColor'],
        populate: {
          cover: {
            fields: ['documentId', 'url']
          }
        }
      })

      return Response.json(games)
    }
    catch {
      return Response.error({
        error: 'Internal Server Error'
      })
    }    
  }
}