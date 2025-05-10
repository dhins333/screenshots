import GamePageLayout from "@/src/components/GamePageLayout"
import Loading from "@/src/components/Loading"

const LoadingPage = () => {
  return (
    <GamePageLayout mainClasses="flex flex-col items-center justify-center mb-20">
      <Loading />
    </GamePageLayout>
  )
}

export default LoadingPage
