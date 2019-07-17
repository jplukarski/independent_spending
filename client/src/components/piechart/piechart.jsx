import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import PieChartHeader from '../pieChartHeader/pieChartHeader'


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


export default class Example extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            data: [],
            //  data: [{ name: 'NATIONAL REPUBLICAN CONGRESSIONAL COMMITTEE', value: 149254 }]
            dataFromProps: [],
            candidate: 'Choose a candidate',
        }
    }

    onPieEnter = (data, index) => {
        this.setState({
            activeIndex: index,
        });
    };

    // formatData = (data) => {

    // }

    componentDidUpdate = () => {
        if (this.props.data !== this.state.dataFromProps) {
            // this.formatData(this.props.data)
            let dataForPie = []
            for (var i = 0; i < this.props.data.length; i++) {
                dataForPie.push({ name: this.props.data[i].committee_name, value: this.props.data[i].total })
            }
            this.setState({ data: dataForPie, dataFromProps: this.props.data, candidate: this.props.candidate })
        }
    }

    render() {
        return (
            <div style={{ width: '100%', height: 400 }}>
                <PieChartHeader committees={this.state.data.length} candidate={this.state.candidate} support={this.props.support} data={this.state.data} />
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            activeIndex={this.state.activeIndex}
                            activeShape={renderActiveShape}
                            data={this.state.data}
                            innerRadius={60}
                            outerRadius={80}
                            fill={this.props.support ? "#008ed7" : "#e1445e"}
                            dataKey="value"
                            onMouseEnter={this.onPieEnter}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        );
    }
}