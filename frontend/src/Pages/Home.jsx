import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Industries from '../components/Industries'
import Clients from '../components/Clients'
import Infrastructure from '../components/Infrastructure'

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            {/* <Services /> */}
            <Clients />
            <Industries />
            <Infrastructure />
        </div>
    )
}

export default Home
