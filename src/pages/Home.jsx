import React from 'react'
import ComponentLandingPage from '../components/LandingPage'
import Layout from './Layout'

const Home = () => {
    return (
        <Layout>
            <div className='w-full flex'>

                <ComponentLandingPage />

            </div>
        </Layout>
    )
}

export default Home