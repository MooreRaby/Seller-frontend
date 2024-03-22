// components
import Spring from '@components/Spring';
import Counter from '@components/Counter';
import Trend from '@ui/Trend';
import SubmenuTrigger from '@ui/SubmenuTrigger';

const TransactionsInfobox = ({ value = 96100, trend = 14.56 }) => {
    return (
        <Spring className="card">
            <div className="flex justify-between items-start mb-2.5">
                <div className="badge-icon bg-green">
                    <i className="icon-transfer text-[20px]"/>
                </div>
                <SubmenuTrigger className="mt-1"/>
            </div>
            <span className="block label-text mb-0.5">Transactions</span>
            <Trend value={trend}/>
            <Counter className="h3" num={value} prefix="$" isFormatted/>
        </Spring>
    )
}

export default TransactionsInfobox