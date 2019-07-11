import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

export default class CandidateSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            candidateOptions: [
                { key: 'MONDALE, WALTER F.', text: 'MONDALE, WALTER F.', value: 'MONDALE, WALTER F.' },
                { key: 'BUSH, GEORGE W', text: 'BUSH, GEORGE W', value: 'BUSH, GEORGE W' },
                { key: 'KERRY, JOHN F', text: 'KERRY, JOHN F', value: 'KERRY, JOHN F' },
                { key: 'COORS, PETER', text: 'COORS, PETER', value: 'COORS, PETER' },
                { key: 'DEAN, HOWARD', text: 'DEAN, HOWARD', value: 'DEAN, HOWARD' },
                { key: 'RENZI, RICHARD GEORGE', text: 'RENZI, RICHARD GEORGE', value: 'RENZI, RICHARD GEORGE' }
            ],
        }
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value })
    }

    componentDidUpdate = () => {
        if (this.props.candidates !== this.state.candidateOptions) {
            // This makes this.state.candidateOptions an array. It needs to be 
            this.setState({ candidateOptions: this.props.candidates }) //  an array of 
            // objects that look like
            // {key: this.props.candidate}, test: this.props.candidate, value: this.props.candidate}
        }
    }


    render() {
        return (
            <Dropdown
                button
                search
                options={this.state.candidateOptions}
                selection
                onSearchChange={this.handleChange}
                placeholder="Select a Candidate"
            />
        )
    }
}