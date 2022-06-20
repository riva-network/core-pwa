import { ReactElement } from "react"

import AuthLayout from "@/components/layouts/AuthLayout"
import { RegisterForm } from "@/components/views/auth"


const LoginPage = () => {
  return <>
    <RegisterForm />
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