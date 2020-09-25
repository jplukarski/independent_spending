import React, { useState, useEffect} from 'react'
import { Statistic } from 'semantic-ui-react'

const PieChartHeader = props => {
    const [total, setTotal] = useState(0)

    useEffect(() => {
        let total = 0
        props.data.map(amount => {
            return total += amount.value
        })
        setTotal(total)
    },[props])
    return(
        <>
            <Statistic size='mini'>
                <Statistic.Label>Committees</Statistic.Label>
                <Statistic.Value>{props.committees}</Statistic.Value>
            </Statistic>
            <Statistic size='mini'>
                <Statistic.Label>Total Dollars Spent</Statistic.Label>
                <Statistic.Value>{new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' }).format(total)}</Statistic.Value>
            </Statistic>
        </>
    )
}

export default PieChartHeader