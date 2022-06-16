import { ReactElement } from "react"

type AuthLayoutProps = {
  children: ReactElement
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return <>
    Auth layout
    {children}
  </>
}

export default AuthLayout