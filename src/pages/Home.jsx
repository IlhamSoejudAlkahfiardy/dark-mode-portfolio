import React from 'react'

import Hero from '../components/LandingPage/Hero';
import About from '../components/LandingPage/About';
import Skill from '../components/LandingPage/Skill';
import JobDesk from '../components/LandingPage/JobDesk';
import Layout from './Layout';

const Home = () => {
    return (
        <Layout>

            <Hero />
            <About />
            <Skill />
            <JobDesk />

        </Layout>
    )
}

export default Home