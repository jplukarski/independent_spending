import React from 'react'
import Navbar from '../../components/navbar'
import {Container} from 'semantic-ui-react'

const About = () => {
    return(

        <>
            <Navbar/>
            <Container>
                <p>
                    Schedule E covers the line item expenditures for independent expenditures. For example, if a super PAC bought ads on TV to oppose a federal candidate, each ad purchase would be recorded here with the expenditure amount, name and id of the candidate, and whether the ad supported or opposed the candidate.
                </p>
                <p>
                    An independent expenditure is an expenditure for a communication "expressly advocating the election or defeat of a clearly identified candidate that is not made in cooperation, consultation, or concert with, or at the request or suggestion of, a candidate, a candidate’s authorized committee, or their agents, or a political party or its agents."
                </p>
            </Container>
        </>
        )
}

export default About