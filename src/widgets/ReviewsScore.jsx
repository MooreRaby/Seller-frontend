// components
import Spring from '@components/Spring'
import RatingStars from '@ui/RatingStars';
import Counter from '@components/Counter';

const ReviewsScore = ({ score = 0 }) => {
    return (
        <Spring className="card flex flex-col items-start md:items-center md:!pt-11">
            <RatingStars value={score} />
            <Counter className="h2 md:!text-[32px] my-[17px]" num={score} decimals={1} />
            <span className="h6">Review score</span>
        </Spring>
    )
}

export default ReviewsScore