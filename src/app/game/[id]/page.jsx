import Typography from "@/src/components/Typography"
import { getScreenshots } from "@/src/lib/strapiClient"

const GamePage = async ({ params }) => {
  const { id } = await params

  if (!id) throw new Error()

  const response = await getScreenshots(id)

  if (response.error) throw new Error()

  const data = response.data

  return (
    data.screenshots.map((screenshot) => {
      return (
        <Typography key={screenshot.documentId}>{screenshot.title}</Typography>
      )
    })
  )
}

export default GamePage