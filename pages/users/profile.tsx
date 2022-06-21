import { ReactElement } from "react"

import MainLayout from "@/components/layouts/MainLayout"

const ProfilePage = () => {
  return <>
    Profile page here
  </>
}

ProfilePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>
    {page}
  </MainLayout>
}



export default ProfilePage