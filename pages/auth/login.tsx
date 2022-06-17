import { ReactElement } from "react"

import AuthLayout from "@/components/layouts/AuthLayout"
import { LoginForm } from "@/components/views/auth"


const LoginPage = () => {
  return <>
    <LoginForm />
  </>
}

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AuthLayout>
      {page}
    </AuthLayout>
  )
}

export default LoginPage