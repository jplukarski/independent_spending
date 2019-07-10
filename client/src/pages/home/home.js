import React from 'react'
import Piechart from '../../components/piechart/piechart'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'
import SelectCycle from '../../components/selectcycle/selectcycle'

const Home = () => (
    <>
        <Navbar />
        <div style={{ marginTop: '7em' }}>
            <SelectCycle />
            <Piechart />
        </div>
        <Footer />

    </>
)

export default Home
