import { ReactElement } from "react"

type AppProvidersProps = {
  children: ReactElement
}

const AppProviders = ({ children }: AppProvidersProps) => {
  return <>
    App provider here
    {children}
  </>
}

export default AppProviders