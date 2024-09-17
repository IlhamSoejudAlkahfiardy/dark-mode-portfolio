import React from 'react'
import ComponentProject from '../components/Project'
import Layout from './Layout'

const Project = () => {
    return (
        <Layout>
            <div className='min-h-screen w-full bg-zinc-950'>

                <ComponentProject />

            </div>
        </Layout>
    )
}

export default Project