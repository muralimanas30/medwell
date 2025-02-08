import { Outlet, useNavigation } from 'react-router-dom'
import React from 'react'
import { Header, Navbar, Loader } from '../components'
const HomeLayout = () => {
    const navigation = useNavigation()
    const isPageLoading = navigation.state === 'loading'
    return (
        <>
            <Header />
            <Navbar />
            {isPageLoading ? (
                <Loading />
            ) : (<section className='mx-10 py-8 w-[calc(100% - 2.5rem)]'>
                <Outlet />
            </section>)
            }
        </>
    )
}

export default HomeLayout
