import { ReactElement } from "react"

type AppProvidersProps = {
  children: ReactElement
}

const AppProviders = ({ children }: AppProvidersProps) => {
  return <>
    {children}
  </>
}

export default AppProviders