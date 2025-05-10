import Image from "next/image"
import Header from "../Header"

import { darken } from './gamePageLayout.module.css'
import { cn } from "@/src/lib/utils"

const GamePageLayout = ({ children, backgroundUrl, logoUrl, logoHeight, logoWidth, name, mainClasses, dominantColor }) => {

  const renderLogo = () => {
    if (!logoUrl) return null

    return (
      <Image 
        src={logoUrl}
        width={logoWidth}
        height={logoHeight}
        alt={`${name} Logo`}
        priority={true}
        className="h-36 w-auto"
      />
    )
  }

  return (
    <div className={cn("bg-black bg-no-repeat bg-cover bg-fixed flex flex-col min-h-screen", backgroundUrl && darken)}
        style={backgroundUrl ? {
          backgroundImage: `url(${backgroundUrl})`,
          backgroundColor: dominantColor
        } : {}}
    >
      <div className='backdrop-blur-xs flex flex-col grow'>
        <Header renderRightContent={renderLogo} />
        <main 
          className={cn('grow', mainClasses)}
        >
          {children}
        </main>
      </div>
    </div>
  )
}

export default GamePageLayout