import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import PieChartHeader from './pieChartHeader'

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
        cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
        fill, payload, percent
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{`${new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD' }).format(payload.value)}`}</text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`${(percent * 100).toFixed(2)}%`}</text>
            <text x={cx} y={cy + 100} dy={8} textAnchor="middle" >{payload.name}</text>
        </g>
    );
  };

const Chart = props => {

    const [activeIndex, setActiveIndex] = useState()
    const [dataForPieChart, setDataForPieChart] = useState([])
    const onPieEnter = (data, index) => {
        setActiveIndex(index)
    }

    useEffect(() => {
        formatData(props.data)
    },[props.data])

    const formatData = data => {
        let dataForPie = []
            data.forEach(spending => {
                dataForPie.push({name: spending.committee_name, value: parseFloat(spending.total)})
            })
            setDataForPieChart(dataForPie)
    }
    return(
        <div style={{ width: '100%', height: 400 }} >
            <PieChartHeader committees={dataForPieChart.length} candidate={props.candidate} data={dataForPieChart}/>
            <ResponsiveContainer>
                <PieChart width={400} height={400}>
                    <Pie
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    data={dataForPieChart}
                    innerRadius={60}
                    outerRadius={80}
                    fill={props.support ? "#008ed7" : "#e1445e"}
                    dataKey="value"
                    onMouseEnter={onPieEnter}
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart