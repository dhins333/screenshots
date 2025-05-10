import { strapi } from '@strapi/client'

const strapiClient = strapi({
  baseURL: process.env.STRAPI_BASE_URL,
  auth: process.env.STRAPI_TOKEN
})

const gamesCollection = strapiClient.collection('games')
const screenshotsCollection = strapiClient.collection()

export const getGames = async () => {
  try {
    const games = await gamesCollection.find({
      fields: ['documentId', 'name', 'coverBlur', 'dominantColor'],
      populate: {
        cover: {
          fields: ['url']
        },
        background: {
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
          fields: ['url', 'width', 'height']
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

export const getScreenshotData = async (id) => {
  try {
    const screenshot = await screenshotsCollection.findOne(id, {
      fields: ['title', 'description', 'imageBlur', 'documentId'],
      populate: {
        image: {
          fields: ['url', 'width', 'height']
        },
        game: {
          fields: ['documentId', 'name'],
          populate: {
            logo: {
              fields: ['url', 'width', 'height']
            },
            background: {
              fields: ['url']
            }
          }
        }
      }
    })

    console.log('Screenshot data fetched')

    return screenshot
  }
  catch {
    return {
      error: 'Fetching Screenshot Data Failed'
    }
  }
}