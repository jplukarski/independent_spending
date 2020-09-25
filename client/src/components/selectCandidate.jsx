import React, {useState,useEffect} from 'react'
import { Dropdown } from 'semantic-ui-react'
import axios from 'axios';
import UpdatePieChartButton from './updatePieChartButton'

const SelectCandidate = props => {
    const [cycle, setCycle] = useState('')
    const [candidates, setCandidates] = useState([])
    const [dropdownOptions, setDropdownOptions] = useState([])
    const [candidate, setCandidate] = useState('')
    const [enablePieChartButtons, setEnablePieChartButtons] = useState(false)
    const [selectedCandidateID, setSelectedCandidateID] = useState('')
    useEffect(()=>{
        if(props.cycle !== cycle){
            const requestBody = {
                query: `query {expenditures(cycle:"${props.cycle}"){_id candidate_id candidate_name committee_name committee_id count cycle support_oppose_indicator total}}`
            }
            axios({
                url:'http://localhost:3001/graphql',
                method: 'post',
                data: requestBody
            })
            .then(res => {
                getUniqueCandidates(res.data.data.expenditures)
            })
            .catch(err => {
                console.log(err)
            })
            setCycle(props.cycle)
        }
        formatCandidatesForDropdown(candidates)
    },[props.cycle, candidates, cycle, props.enableCandidateSelect])
    const getUniqueCandidates = query => {
        let candidates = []
        let options =[]
        query.forEach(expenditure => {
            const obj = {
                name: expenditure.candidate_name,
                id: expenditure.candidate_id
            }
            let inCandidates = candidates.includes(expenditure.candidate_name)
            if(!inCandidates) {
                candidates.push(expenditure.candidate_name)
                options.push(obj)
            }
        })
        setCandidates(options)
    } 
    const formatCandidatesForDropdown = candidates => {
        let options = []
        candidates.forEach(option => {
            options.push({ key: option.id, text: option.name, value: option.name })
        })
        setDropdownOptions(options)
    }
    const handleChange = (event, data) => {
        const {value} = data;
        const candidateID = data.options.find(x => x.value === value)
        if(candidateID) {
            const {key} = data.options.find(x => x.value === value)
            setCandidate(event.target.textContent)
            setEnablePieChartButtons(true)
            setSelectedCandidateID(key)
        }
    }
    return(
        <>
            <Dropdown 
                placeholder="Select Candidate" 
                search 
                selection 
                button 
                disabled={!props.enableCandidateSelect}
                options={dropdownOptions}
                onChange={handleChange}
                onSearchChange={handleChange}
            />
            <UpdatePieChartButton cycle={cycle} candidate={candidate} enableButtons={enablePieChartButtons} candidateID={selectedCandidateID}/>
        </>
    )
}

export default SelectCandidate