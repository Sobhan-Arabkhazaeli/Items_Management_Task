import type React from "react"

const ProviderApp = ({children} : {children : React.ReactNode}) => {
  return (
    <>{children}</>
  )
}

export default ProviderApp