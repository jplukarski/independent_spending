import React, { Component } from 'react'
import CandidateSelect from '../candidateSelect/candidateSelect'
import API from '../../utils/API'

export default class SelectedCycleCandidateDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cycle: 'not chosen',
            uniqueCandidates: [],
            cycleData: [],
        }
    }

    getUniqueCandidates = (data) => {
        let candidates = [];
        for (var i = 0; i < data.length; i++) {
            let incandidates = candidates.includes(data[i].candidate_name)
            if (!incandidates) {
                candidates.push(data[i].candidate_name)
            }
        }
        this.setState({ uniqueCandidates: candidates, cycleData: data })
    }

    componentDidUpdate = () => {
        if (this.props.cycle !== this.state.cycle) {
            API.getExpenditureByCycle(this.props.cycle).then(res =>
                this.getUniqueCandidates(res.data)
            )
                .catch(err => console.log(err))
            this.setState({ cycle: this.props.cycle })
        }
    }

    render() {
        return (
            <>
                <CandidateSelect candidates={this.state.uniqueCandidates} data={this.state.cycleData} />
            </>
        )
    }
}