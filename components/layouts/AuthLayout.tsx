import Image from 'next/image'
import { ReactElement } from "react"

type AuthLayoutProps = {
  children: ReactElement
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return <div className="container max-w-sm mx-auto h-screen flex justify-center items-center flex-col">
    <div style={{
      filter: 'drop-shadow(0px 25px 75px #3758FF)'
    }}
    >
      <Image src="/footer-logo.svg" alt='Riva network logo' width="151" height="151" />
    </div>
    <b className="my-6 text-white uppercase tracking-wider text-lg z-50">RIVA NETWORK
    </b>
    {children}
  </div >
}

export default AuthLayout