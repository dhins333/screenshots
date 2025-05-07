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
          fields: ['url']
        }
      }
    })

    console.log('Games Fetched')

    return games
  }
  catch {
   return {
    error: 'Fetching Games Failed'
   }
  }
}

export const getScreenshots = async (id) => {
  try {
    const screenshots = await gamesCollection.findOne(id, {
      fields: ['documentId', 'name', 'coverBlur', 'dominantColor'],
      populate: {
        cover: {
          fields: ['url']
        },
        logo: {
          fields: ['url']
        },
        background: {
          fields: ['url']
        },
        screenshots: {
          fields: ['documentId', 'title', 'imageBlur'],
          populate: {
            thumb: {
              fields: ['url']
            }
          }
        }
      }
    })

    console.log('Screenshots Fetched')

    return screenshots
  }
  catch {
    return {
      error: 'Fetching Screenshots Failed'
    }
  }
}