import Header from "@/components/Header"
import Qa from "@/components/Qa"
import Typography, { TYPOGRAPHY_TYPES } from "@/components/Typography"

const Home = () => {
  return (
      <>
      <Header renderRightContent={() => <Qa />} />
      <main className="grow flex flex-col items-center justify-center">
        <Typography type={TYPOGRAPHY_TYPES.hero} classes='--text-gradient'>Video Game Screenshots</Typography>
      </main>
      </>
  )
}

export default Home