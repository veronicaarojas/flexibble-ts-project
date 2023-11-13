import Image from 'next/image'
import Link from 'next/link'


function Navbar() {
  return (
    <nav className='flexBetween navbar'>
      <div className='flex-1 flex-start gap-10'>
        <Link href="/"></Link>
        <Image
        src="/logo.svg"
        width={115}
        height={43}
        alt="logo"/>
      </div>
    </nav>
  ) 
}

export default Navbar