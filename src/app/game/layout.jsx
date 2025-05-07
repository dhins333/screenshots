import Header from '@/src/components/Header'

const GamesLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="grow flex flex-col items-center justify-center gap-8">
        {children}
      </main>
    </>
  )
}

export default GamesLayout