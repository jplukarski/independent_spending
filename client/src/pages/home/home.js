import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'
import SelectCycle from '../../components/selectcycle/selectcycle'

const Home = () => (
    <>
        <Navbar />
        <div style={{ marginTop: '7em', marginBottom: '7em' }}>
            <SelectCycle />
        </div>
        <Footer />

    </>
)

export default Home
