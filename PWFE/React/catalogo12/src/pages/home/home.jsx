import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { Navigation } from '../../components/navigation/navigation';
import { Outlet } from 'react-router-dom'; 

export function Home() {
    return(
        <>
        <Header />
        <Navigation />
        <Outlet />
        <Footer />
    </>
    )
}