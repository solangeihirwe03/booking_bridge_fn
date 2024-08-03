import Header from "./Header"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"

const MainRoute = () => {
  return (
    <div className="font-jost flex flex-col justify-between gap-20 w-full">
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default MainRoute
