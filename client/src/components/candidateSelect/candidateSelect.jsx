import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

export default class CandidateSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            candidateOptions: [
                { key: 'Select a Candidate', text: 'Select a Candidate', value: 'Select a Candidate' },
                { key: 'MONDALE, WALTER F.', text: 'MONDALE, WALTER F.', value: 'MONDALE, WALTER F.' },
                { key: 'BUSH, GEORGE W', text: 'BUSH, GEORGE W', value: 'BUSH, GEORGE W' },
                { key: 'KERRY, JOHN F', text: 'KERRY, JOHN F', value: 'KERRY, JOHN F' },
                { key: 'COORS, PETER', text: 'COORS, PETER', value: 'COORS, PETER' },
                { key: 'DEAN, HOWARD', text: 'DEAN, HOWARD', value: 'DEAN, HOWARD' },
                { key: 'RENZI, RICHARD GEORGE', text: 'RENZI, RICHARD GEORGE', value: 'RENZI, RICHARD GEORGE' },
            ],
        }
    }

    render() {
        return (
            <Dropdown
                button
                options={this.state.candidateOptions}
                selection
                search
                placeholder="Select a Candidate"
            />
        )
    }
}