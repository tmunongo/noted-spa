import { Outlet } from "react-router-dom"

type Props = {}

const Auth = (props: Props) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Outlet />
    </div>
  )
}

export default Auth
