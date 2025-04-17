import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import Footer from "./Footer/Fotter"


export const AppLayout = ()=>{

    return(
        <>
        <Header />
        <Outlet />
        <Footer />

        </>
    )
}