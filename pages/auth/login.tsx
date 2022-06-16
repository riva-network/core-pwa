import { ReactElement } from "react"

import AuthLayout from "../../components/layouts/AuthLayout"

const LoginPage = () => {
  return <>
    login page here
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