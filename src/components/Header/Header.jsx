import Link from "next/link"
import Image from "next/image"

import logo from '@/public/logo.svg'

const Header = (props) => {

  const { renderRightContent } = props

  return (
    <header className={'flex items-start justify-between pt-8 pr-8 pl-8'}>
      <Link href="/">
        <Image 
          src={logo}
          width={48}
          height={48}
          alt="Website Logo"
        />
      </Link>
      {renderRightContent && typeof renderRightContent === 'function' && renderRightContent()} 
    </header>
  )
}

export default Header