import { IoPeopleSharp } from "react-icons/io5";
import { FaClock } from "react-icons/fa6";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    BarChart,
    Bar,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell
} from "recharts";
import UserProfiles from "../UserProfiles";
import './index.css';

const Overview = props => {
    const { employeeData, isClickToggle } = props;

    const totalSales = employeeData.reduce((acc, employee) => acc + employee.monthlySales, 0);
    const totalEmployees = employeeData.length;
    const totalUserActivityTime = employeeData.reduce((acc, employee) => acc + employee.activityTime, 0);
    const averageUserActivityTime = Math.round(totalUserActivityTime / employeeData.length);
    const maxSales = employeeData.reduce((max, employee) => employee.monthlySales > max.monthlySales ? employee : max, employeeData[0]);
    const minSales = employeeData.reduce((min, employee) => employee.monthlySales < min.monthlySales ? employee : min, employeeData[0]);

    const data = [
        {
            count: 5,
            gender: "Male",
        },
        {
            count: 2,
            gender: "Female",
        }
    ];

    const containerClass = isClickToggle ? 'dark' : 'light';

    return (
        <div className={`overview-cont ${containerClass}`}>
            <div className='top-section'>
                <div className={`top1 ${containerClass}`}>
                    <IoPeopleSharp className="i1" />
                    <div className="r1">
                        <p className="p1">Total Employees</p>
                        <h2 className="p2">{totalEmployees} members</h2>
                    </div>
                </div>
                <div className={`top1 ${containerClass}`}>
                    <FaClock className="i1" />
                    <div className="r1">
                        <p className="p1">Average User Activity</p>
                        <h2 className="p2">{averageUserActivityTime} hours</h2>
                    </div>
                </div>
                <div className={`top1 ${containerClass}`}>
                    <RiMoneyRupeeCircleFill className="i1" />
                    <div className="r1">
                        <p className="p1">Total Sales</p>
                        <h2 className="p2">{totalSales} Rs</h2>
                    </div>
                </div>
            </div>
            <div className="charts-cont">
                <div className={`line-chart-cont ${containerClass}`}>
                    <h1 className="sales-h">User Activity Time</h1>
                    <LineChart width={350} height={250} data={employeeData} className="linechart">
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" padding={{ left: 30, right: 30 }} className="xx" />
                        <YAxis className="xx" />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="name"
                            stroke="#8884d8"
                            activeDot={{ r: 4 }}
                        />
                        <Line type="monotone" dataKey="activityTime" stroke="#82ca9d" />
                    </LineChart>
                </div>
                <div className={`barchart-cont ${containerClass}`}>
                    <h1 className="sales-h">Individual Sales Report</h1>
                    <ResponsiveContainer width="100%" height={300} className="linechart">
                        <BarChart
                            data={employeeData}
                            margin={{
                                top: 5,
                            }}
                        >
                            <XAxis
                                dataKey="name"
                                tick={{
                                    stroke: "gray",
                                    strokeWidth: 1,
                                }}
                            />
                            <YAxis
                                tick={{
                                    stroke: "gray",
                                    strokeWidth: 0,
                                }}
                            />
                            <Legend
                                wrapperStyle={{
                                    padding: 10,
                                }}
                            />
                            <Bar dataKey="monthlySales" name="sales" fill="rgb(74, 74, 248)" barSize="25" />
                        </BarChart>
                    </ResponsiveContainer>
                    <p className="pp1">Highest Sales: {maxSales.name} {maxSales.monthlySales}rs</p>
                    <p className="pp1">Lowest Sales: {minSales.name} {minSales.monthlySales}rs</p>
                </div>
                <div className={`piechart-cont ${containerClass}`}>
                    <h1 className="sales-h">Demographic Data</h1>
                    <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                            <Pie
                                cx="50%"
                                cy="50%"
                                data={data}
                                startAngle={0}
                                endAngle={360}
                                innerRadius="40%"
                                outerRadius="70%"
                                dataKey="count"
                            >
                                <Cell name="Male" fill="rgb(74, 74, 248)" />
                                <Cell name="Female" fill="rgb(118, 118, 253)" />
                            </Pie>
                            <Legend
                                iconType="circle"
                                layout="vertical"
                                verticalAlign="middle"
                                align="right"
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <UserProfiles isClickToggle={isClickToggle}/>
            </div>
        </div>
    )
}

export default Overview;
