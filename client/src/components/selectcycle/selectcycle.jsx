import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import SelectedCycleCandidateDropdown from '../selectedCycleQuery/selectedCycleQuery'

export default class SelectCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cycleoptions: [
                { key: 'Select an Election Cycle', text: 'Select an Election Cycle', value: 'Select an Election Cycle' },
                { key: '2020', text: '2020', value: '2020' },
                { key: '2018', text: '2018', value: '2018' },
                { key: '2016', text: '2016', value: '2016' },
                { key: '2014', text: '2014', value: '2014' },
                { key: '2012', text: '2012', value: '2012' },
                { key: '2010', text: '2010', value: '2010' },
                { key: '2008', text: '2008', value: '2008' },
                { key: '2006', text: '2006', value: '2006' },
            ],
            value: "whoahaohao"
        }
    }

    handleChange = (e, { value }) => {
        this.setState({ value: value })
    }

    render() {
        return (
            <>
                <Dropdown
                    search
                    options={this.state.cycleoptions}
                    selection
                    button
                    onChange={this.handleChange}
                    placeholder="Select an Election Cycle"
                    onSearchChange={this.handleChange}
                // value={this.state.value}
                />
                <SelectedCycleCandidateDropdown cycle={this.state.value} />
            </>
        )
    }
}