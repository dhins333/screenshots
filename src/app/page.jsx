import Header from "@/src/components/Header"
import Typography, { TYPOGRAPHY_TYPES } from "@/src/components/Typography"
import HomeContent from "@/src/components/HomeContent"

const Home = () => {
  return (
      <>
      <Header />
      <main className="grow flex flex-col items-center justify-center gap-8">
        <Typography type={TYPOGRAPHY_TYPES.hero}>Video Game Screenshots</Typography>
        <HomeContent />
      </main>
      </>
  )
}


export default Home