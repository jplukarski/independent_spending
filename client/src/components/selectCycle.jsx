import React, {useState} from 'react'
import { Dropdown } from 'semantic-ui-react'
import SelectCandidate from './selectCandidate'

const SelectCycle = () => {
    const [cycle, setCycle] = useState('')
    const [enableCandidateSelect, setEnableCandidateSelect] = useState(false)
    const presidentialElectionCycles = [
    { key: 'Select an Election Cycle', text: 'Select an Election Cycle', value: 'Select an Election Cycle' },
    { key: '2020', text: '2020', value: '2020' },
    { key: '2016', text: '2016', value: '2016' },
    { key: '2012', text: '2012', value: '2012' },
    { key: '2008', text: '2008', value: '2008' },
    { key: '2004', text: '2004', value: '2004' }

]
    const handleChange = (e, {value}) => {
        setCycle(value)
        setEnableCandidateSelect(true)
    }

    return(
        <>
            <Dropdown 
                placeholder="Select Election Cycle" 
                search 
                selection 
                button 
                options={presidentialElectionCycles}
                onChange={handleChange}
                onSearchChange={handleChange}
            />
            <SelectCandidate cycle={cycle} enableCandidateSelect={enableCandidateSelect}/>
        </>
    )
}

export default SelectCycle