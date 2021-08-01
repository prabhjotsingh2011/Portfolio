import React from 'react'
import Particles from 'react-particles-js'
import ParticlesConfig from './config/Particle-config'

function ParticleBackground() {
    return (
        <>

        <Particles width="100%" height="97vh"  params={ParticlesConfig}/>
        </>
    )
}

export default ParticleBackground;
