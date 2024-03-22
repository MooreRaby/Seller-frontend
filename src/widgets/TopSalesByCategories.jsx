// components
import Spring from '@components/Spring';
import LabeledProgressBar from '@components/LabeledProgressBar';

// utils
import {getPercentage, numFormatter} from '@utils/helpers';

const data = [
    {label: 'Electronics', value: 7541, color: 'accent'},
    {label: 'Fashion', value: 3897, color: 'red'},
    {label: 'Food & Drinks', value: 9874, color: 'header'},
    {label: 'Services', value: 6548, color: 'yellow'},
]

const TopSalesByCategories = () => {
    return (
        <Spring className="card flex flex-col gap-2.5 2xl:col-span-2">
            <h5>Top Sales by Categories</h5>
            <div className="flex flex-col gap-[17px]">
                {
                    data.map((item, index) => (
                        <LabeledProgressBar key={index}
                                            wrapperClass="!gap-0"
                                            label={item.label}
                                            color={item.color}
                                            value={getPercentage(data, item.value)}
                                            displayValue={numFormatter(item.value, 2, '$')} />
                    ))
                }
            </div>
        </Spring>
    )
}

export default TopSalesByCategories