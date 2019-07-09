import React from 'react'
import Piechart from '../../components/piechart/piechart'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'
import SelectCycle from '../../components/selectcycle/selectcycle'
import CandidateSelect from '../../components/candidateSelect/candidateSelect'

const Home = () => (
    <>
        <Navbar />
        <div style={{ marginTop: '7em' }}>
            <SelectCycle />
            <CandidateSelect />
            <Piechart />
        </div>
        <Footer />

    </>
)

export default Home
