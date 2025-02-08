import { Outlet, useNavigation } from 'react-router-dom'
import React from 'react'
import { Header, Navbar, Loader, Footer } from '../components'
const HomeLayout = () => {
    const navigation = useNavigation()
    const isPageLoading = navigation.state === 'loading'
    return (
        <>
            <Header />
            <Navbar />
            {isPageLoading ? (
                <Loading />
            ) : (<section className='py-8 mx-8'>
                <Outlet />
            </section>)
            }
            <Footer />
        </>
    )
}

export default HomeLayout
