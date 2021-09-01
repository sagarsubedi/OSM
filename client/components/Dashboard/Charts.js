import{
    ResponsiveContainer,
    AreaChart,
    XAxis,
    YAxis,
    Area,
    Tooltip,
    CartesianGrid

} from "recharts";
import {format, parseISO, subDays} from "date-fns";

const dummyData = [];
for(let num=30; num>=0; num--){
    dummyData.push({
        date: subDays(new Date(), num).toISOString().substring(0,10),
        value: 1+ Math.random()
    })
}

var chartColor = "#ef5350";

function Charts() {
    return (
        <ResponsiveContainer width="95%" height={400}>
            <AreaChart data={dummyData}>

                <defs>
                    <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={chartColor} stopOpacity={0.4}></stop>
                        <stop offset="75%" stopColor={chartColor} stopOpacity={0.05}></stop>
                    </linearGradient>
                </defs>

                <Area dataKey="value" stroke={chartColor} fill="url(#color)"/>

                {/* X and Y values */}
                <XAxis dataKey="date"/>
                <YAxis dataKey="value" />

                {/* Other funcs */}
                <Tooltip />
                <CartesianGrid opacity={0.1} vertical={false}/>

            </AreaChart>
        </ResponsiveContainer>
    )
}

export default Charts;
