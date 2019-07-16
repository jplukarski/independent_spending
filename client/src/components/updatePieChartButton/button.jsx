import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import Piechart from '../piechart/piechart'

export default class ButtonExampleEmphasis extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cycleData: [],
            support: true,
            candidate: '',
            dataForPiechart: [],
        }
    }

    getSupportDataForPiechart = () => {
        let data = this.state.cycleData
        let dataByCandidate = []
        for (var i = 0; i < data.length; i++) {
            if (data[i].candidate_name === this.state.candidate && data[i].support_oppose_indicator === "S") {
                dataByCandidate.push({ committee_name: data[i].committee_name, total: data[i].total, support: data[i].support_oppose_indicator })
            }
        }
        this.setState({ dataForPiechart: dataByCandidate })
    }

    getOpposeDataForPiechart = () => {
        let data = this.state.cycleData
        let dataByCandidate = []
        for (var i = 0; i < data.length; i++) {
            if (data[i].candidate_name === this.state.candidate && data[i].support_oppose_indicator === "O") {
                dataByCandidate.push({ committee_name: data[i].committee_name, total: data[i].total, support: data[i].support_oppose_indicator })
            }
        }
        this.setState({ dataForPiechart: dataByCandidate })
    }

    supportClick = () => {
        this.setState({
            cycleData: this.props.data,
            support: true,
            candidate: this.props.candidate,
        }, () => this.getSupportDataForPiechart())
    }

    opposeClick = () => {
        this.setState({
            cycleData: this.props.data,
            support: false,
            candidate: this.props.candidate,
        }, () => this.getOpposeDataForPiechart())
    }

    render() {
        return (
            <>
                <Button primary fluid onClick={this.supportClick}>Support</Button>
                <Button secondary fluid onClick={this.opposeClick}>Oppose</Button>
                <Piechart data={this.state.dataForPiechart} support={this.state.support} candidate={this.state.candidate} />
            </>
        )
    }
}