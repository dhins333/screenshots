import Header from "@/src/components/Header"
import StartButton from "@/src/components/StartButton"
import Typography, { TYPOGRAPHY_TYPES } from "@/src/components/Typography"
import { toastQueue } from "../components/Toast/Toast"

const Home = () => {
  return (
      <>
      <Header />
      <main className="grow flex flex-col items-center justify-center gap-8">
        <Typography type={TYPOGRAPHY_TYPES.hero}>Video Game Screenshots</Typography>
        <StartButton />
      </main>
      </>
  )
}


export default Home