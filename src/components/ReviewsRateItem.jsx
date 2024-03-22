import ProgressBar from '@ui/ProgressBar';

const ReviewsRateItem = ({rate = 0, value = 0}) => {
    return (
        <div className="flex items-center gap-2.5">
                <span className="flex items-center gap-1 label-text leading-none w-[30px]">
                    {rate} <i className="icon-star-solid text-yellow"/>
                </span>
            <div className="flex-1">
                <ProgressBar value={value} color="yellow"/>
            </div>
            <span className="!text-header label-text w-[42px] text-right">{value}%</span>
        </div>
    )
}

export default ReviewsRateItem