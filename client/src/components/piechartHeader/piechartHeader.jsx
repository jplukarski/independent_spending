import React, { PureComponent } from 'react';
import { Statistic } from 'semantic-ui-react'

export default class StatisticExampleHorizontalGroup extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            data: [],
        }
    }

    componentDidUpdate = () => {
        if (this.props.data !== this.state.data) {
            let total = 0
            for (var i = 0; i < this.props.data.length; i++) {
                total = total + this.props.data[i].value
            }
            this.setState({ data: this.props.data, total: total})
        }
    }

    render() {
        return (    
            <>
            <Statistic size='mini'>
                <Statistic.Value>{this.props.committees}</Statistic.Value>
                <Statistic.Label>Committees</Statistic.Label>
            </Statistic>
            <Statistic size='mini'>
                <Statistic.Value>{new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' }).format(this.state.total)}</Statistic.Value>
                <Statistic.Label>Total Dollars Spent</Statistic.Label>
            </Statistic>
            <Statistic size='mini'>
                <Statistic.Value>{
                    this.props.support ? "Support" : "Oppose"
                }</Statistic.Value>
                <Statistic.Label>{this.props.candidate}</Statistic.Label>
            </Statistic>
        </>

        );
    }
}