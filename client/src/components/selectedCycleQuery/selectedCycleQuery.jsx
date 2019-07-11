import React, { Component } from 'react'
import CandidateSelect from '../candidateSelect/candidateSelect'
import API from '../../utils/API'

export default class SelectedCycleCandidateDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cycle: '.',
            uniqueCandidates: [],

        }
    }

    getUniqueCandidates = (data) => {
        let candidates = [];
        // console.log(data[4])
        for (var i = 0; i < data.length; i++) {
            let incandidates = candidates.includes(data[i].candidate_name)
            if (!incandidates) {
                candidates.push(data[i].candidate_name)
            }
        }
        console.log(candidates)
        // this.setState({ uniqueCandidates: candidates })
    }

    componentDidUpdate = () => {
        if (this.props.cycle !== this.state.cycle) {
            API.getExpenditureByCycle(this.props.cycle).then(res =>
                // this.setState({ payload: res.data })
                this.getUniqueCandidates(res.data)
            )
                .catch(err => console.log(err))
        }
    }

    render() {
        return (
            <>
                <CandidateSelect candidates={this.state.uniqueCandidates} />
            </>
        )
    }
}