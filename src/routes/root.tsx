import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"

export default function Root() {
  return (
    <>
      <div className="flex bg-medium min-h-screen">
        <Sidebar />
        <div id="main" className="flex-grow overflow-y-auto p-4">
          <Outlet />
        </div>
      </div>
    </>
  )
}
