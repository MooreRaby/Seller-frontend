// components
import Spring from '@components/Spring';
import ReviewsRateItem from '@components/ReviewsRateItem';

// utils
import {getPercentage} from '@utils/helpers';

const data = [
    {rate: 5, value: 2568},
    {rate: 4, value: 3568},
    {rate: 3, value: 1568},
    {rate: 2, value: 0},
    {rate: 1, value: 568},
]

const ReviewsRate = () => {
    return (
        <Spring className="card min-h-[182px] !py-5 flex flex-col justify-between col-span-2">
            {
                data.map((item, index) => (
                    <ReviewsRateItem key={index} rate={item.rate} value={getPercentage(data, item.value)}/>
                ))
            }
        </Spring>
    )
}

export default ReviewsRate