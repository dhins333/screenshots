import Link from "next/link"
import Image from "next/image"

import logo from '@/public/logo.svg'

const Header = (props) => {

  const { renderRightContent } = props

  return (
    <header className={'flex items-center justify-between p-8 w-full'}>
      <Link href="/">
        <Image 
          src={logo}
          width={48}
          height={48}
          alt="Website Logo"
          className="h-12 w-12" 
          priority={true}
        />
      </Link>
      {renderRightContent && typeof renderRightContent === 'function' && renderRightContent()} 
    </header>
  )
}

export default Header 