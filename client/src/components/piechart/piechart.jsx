import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'NARAL PRO-CHOICE AMERICA PAC"', value: 103222.08 },
    { name: 'HUMAN RIGHTS CAMPAIGN PAC', value: 453222 },
    { name: 'NRA POLITICAL VICTORY FUND', value: 2971739.01 },
    { name: 'NATIONAL BEER WHOLESALERS ASSOCIATION POLITICAL ACTION COMMITTEE', value: 135371.21 },
    { name: 'TRUTHANDHOPE.ORG', value: 110772.96 },
    { name: 'NRA POLITICAL VICTORY FUND', value: 3850.7 },
    { name: 'NATIONAL REPUBLICAN CONGRESSIONAL COMMITTEE', value: 14924 },
];

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
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{`$${payload.value}`}</text>
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

    state = {
        activeIndex: 0,
    };

    onPieEnter = (data, index) => {
        this.setState({
            activeIndex: index,
        });
    };

    render() {
        return (
            <div style={{ width: '100%', height: 400 }}>

                <ResponsiveContainer minWidth={600}>
                    <PieChart>
                        <Pie
                            activeIndex={this.state.activeIndex}
                            activeShape={renderActiveShape}
                            data={data}
                            // cx={200}
                            // cy={200}
                            innerRadius={60}
                            outerRadius={80}
                            fill="#008ed7"
                            dataKey="value"
                            onMouseEnter={this.onPieEnter}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        );
    }
}