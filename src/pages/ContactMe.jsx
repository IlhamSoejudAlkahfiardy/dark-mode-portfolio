import React from 'react'
import Layout from './Layout'
import ComponentContactMe from '@/components/ContactMe'
import Particles from '@/components/Particles/Particles'

const ContactMe = () => {
  return (
    <Layout>
      <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <ComponentContactMe />
    </Layout>
  )
}

export default ContactMe