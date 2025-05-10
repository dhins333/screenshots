import { promises as fs } from 'fs'
import GamePageLayout from "@/src/components/GamePageLayout"
import Header from "@/src/components/Header"
import Typography, { TYPOGRAPHY_TYPES } from "@/src/components/Typography"
import { getGamePageData, getScreenshots } from "@/src/lib/strapiClient"
import { imageToBase64 } from '@/src/lib/utils'
import Loading from '@/src/components/Loading'
import Polaroid from '@/src/components/Polaroid'
import { MersenneTwister19937, Random } from 'random-js'


const GamePage = async ({ params }) => {
  const { id } = await params

  if (!id) throw new Error()

  const response = await getScreenshots(id)

  if (response.error) throw new Error()

  const data = response.data

  const logoUrl = data.logo.url
  const backgroundUrl = data.background.url
  const logoWidth = data.logo.width
  const logoHeight = data.logo.height

  const randomRotations = []
  const randomNumGen = new Random(MersenneTwister19937.autoSeed())

  data.screenshots.forEach(() => {
    const rotateDeg = randomNumGen.integer(1, 15)
    const sign = randomNumGen.integer(1, 2)

    randomRotations.push([rotateDeg, sign]) 
  })

  return (
    <GamePageLayout backgroundUrl={backgroundUrl} logoUrl={logoUrl} logoWidth={logoWidth} logoHeight={logoHeight} name={data.name} dominantColor={data.dominantColor} 
    >
      <ul className='grid gap-16 auto m-auto p-9' 
        style={{
          gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
          maxWidth: '1400px',
        }}
      >
        {data.screenshots.map(({ documentId, imageBlur, thumb, title }, index) => {          
          return <Polaroid key={documentId} imageBlur={imageBlur} thumb={thumb} title={title} rotateDeg={randomRotations[index][0]} sign={randomRotations[index][1]} id={documentId} />
        })}
      </ul>
    </GamePageLayout>
  )
}

export default GamePage