import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import Button from '../updatePieChartButton/button'

export default class CandidateSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            candidateOptions: [],
            props: [],
            cycleData: [],
            value: '',
        }
    }

    handleChange = (event) => {
        // console.log(event.currentTarget.textContent)
        this.setState({ value: event.currentTarget.textContent })
    }

    formatCandidates = (candidates, data) => {
        var formattedCandidates = []
        for (var i = 0; i < candidates.length; i++) {
            formattedCandidates.push({ key: candidates[i], text: candidates[i], value: candidates[i] })
        }
        this.setState({ candidateOptions: formattedCandidates, cycleData: data })
    }

    componentDidUpdate = () => {
        if (this.props.candidates !== this.state.props) {
            this.setState({ props: this.props.candidates })
            this.formatCandidates(this.props.candidates, this.props.data)
        }
    }
    render() {
        return (
            <>
                <Dropdown
                    button
                    search
                    options={this.state.candidateOptions}
                    selection
                    onChange={this.handleChange}
                    placeholder="Select a Candidate"
                />
                <Button data={this.state.cycleData} candidate={this.state.value} />
            </>
        )
    }
}