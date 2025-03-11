import React from 'react'
import Layout from './Layout'
import FuzzyText from '@/components/FuzzyText/FuzzyText'
import ShinyText from '@/components/ShinyText/ShinyText'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
    const navigate = useNavigate()

    return (
        <Layout>
            <div className="flex flex-col gap-24 items-center justify-center h-screen text-center">
                <FuzzyText
                    baseIntensity={0.2}
                    hoverIntensity={0.5}
                    enableHover={true}
                >
                    404 Not Found
                </FuzzyText>
                <span onClick={() => navigate('/')} className='cursor-pointer'>
                    <ShinyText text="Back to Home!" disabled={false} speed={3} className='custom-class' />
                </span>
            </div>
        </Layout>
    )
}
