// components
import Spring from '@components/Spring';
import {BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';

// hooks
import {useTheme} from '@contexts/themeContext';

// utils
import {numFormatter} from '@utils/helpers';

const data = [
    {name: 'Period 1', expense: 4000, income: 2400},
    {name: 'Period 2', expense: 3000, income: 1398},
    {name: 'Period 3', expense: 2000, income: 7000},
    {name: 'Period 4', expense: 2780, income: 3908},
    {name: 'Period 5', expense: 1890, income: 4800},
    {name: 'Period 6', expense: 2390, income: 3800},
    {name: 'Period 7', expense: 3490, income: 4300}
];

const CustomTooltip = ({active, payload}) => {
    if (active) {
        return (
            <div className="chart-tooltip p-3 flex flex-col gap-1.5">
                {
                    payload?.map((item, index) => (
                        <div className="flex items-center gap-2" key={index}>
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full" style={{background: item.fill}}/>
                                <span className="label-text capitalize">{item.name}:</span>
                            </div>
                            <span className="h6 !text-sm">
                                {numFormatter(item.value, 1, '$')}
                            </span>
                        </div>
                    ))
                }
            </div>
        );
    }

    return null;
}

const SaleActivity = () => {
    const {theme} = useTheme();

    return (
        <Spring className="card flex flex-col gap-[5px] min-h-[182px]">
            <h5>Sale Activity</h5>
            <div className="flex-1">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={false}>
                        <XAxis dataKey="name" hide={true}/>
                        <YAxis hide={true}/>
                        <Tooltip cursor={false} content={<CustomTooltip/>}/>
                        <Bar dataKey="income"
                             barSize={12}
                             radius={6}
                             fill="var(--green)"/>
                        <Bar dataKey="expense"
                             barSize={12}
                             radius={6}
                             fill="var(--header)"
                             style={{filter: `drop-shadow(0 1px 4px ${theme === 'light' ? 'rgba(119, 119, 119, 0.72)' : '#9F9F9F'})`}}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </Spring>
    )
}

export default SaleActivity