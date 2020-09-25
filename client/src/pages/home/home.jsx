import React from 'react'
import Navbar from '../../components/navbar'
import SelectCycle from '../../components/selectCycle'
import {Container} from 'semantic-ui-react'

const Home = () => (
    <>
        <Navbar/>
        <Container>
            <SelectCycle/>
        </Container>
    </>
)

export default Home