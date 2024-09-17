import React from 'react'
import Layout from './Layout'
import ComponentAward from '../components/Award/Award'
import Hero from '@/components/Award/Hero'
import DetailAward from '@/components/Award/DetailAward'

const Award = () => {
    return (

        <Layout>
            <Hero />
            <ComponentAward />
        </Layout>
    )
}

export default Award