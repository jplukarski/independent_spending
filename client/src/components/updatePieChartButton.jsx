import React, {useState, useEffect} from 'react'
import { Button } from 'semantic-ui-react'
import axios from 'axios';
import PieChart from './piechart'

const UpdatePieChartButton = props => {
    const [cycle, setCycle] = useState([])
    const [support, setSupport] = useState(true)
    const [candidate, setCandidate] = useState('')
    const [dataForPieChart, setDataForPieChart] = useState([])
    const [candidateID, setCandidateID] = useState('')

    useEffect(() => {
        const getDataForPieChart = () => {
            const requestBody = {
                query: `query { expenditures(cycle: "${cycle}" candidate_id: "${candidateID}", support_oppose_indicator: "${support ? "S" : "O"}"){
                      committee_name
                      committee_id
                      total
                    }
                  }`
            }
            axios({
                url: 'http://localhost:3001/graphql',
                method: 'post',
                data: requestBody
            })
            .then(res => {
                setDataForPieChart(res.data.data.expenditures)
            })
            .catch(err => {
                console.log(err)
            })
        }
        getDataForPieChart()
    },[cycle,support,candidate,candidateID])


    
    const supportClick = () => {
        setCycle(props.cycle)
        setCandidate(props.candidate)
        setSupport(true)
        setCandidateID(props.candidateID)
    }
    const opposeClick = () => {
        setCycle(props.cycle)
        setCandidate(props.candidate)
        setSupport(false)
        setCandidateID(props.candidateID)

    }

    return(
        <>
            <Button color='linkedin' disabled={!props.enableButtons} onClick={supportClick}>Support</Button>
            <Button color='google plus' disabled={!props.enableButtons} onClick={opposeClick}>Oppose</Button>
            <PieChart data={dataForPieChart} support={support} candidate={candidate}/>
        </>
    )
}

export default UpdatePieChartButton