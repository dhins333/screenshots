import { strapi } from '@strapi/client'

const strapiClient = strapi({
  baseURL: process.env.STRAPI_BASE_URL,
  auth: process.env.STRAPI_TOKEN
})

const gamesCollection = strapiClient.collection('games')

export const getGames = async () => {
  try {
    const games = await gamesCollection.find({
      fields: ['documentId', 'name', 'coverBlur', 'dominantColor'],
      populate: {
        cover: {
          fields: ['documentId', 'url']
        }
      }
    })

    return games
  }
  catch {
   return {
    error: 'Fetching Games Failed'
   }
  }
}