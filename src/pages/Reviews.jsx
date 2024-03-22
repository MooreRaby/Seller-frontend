// components
import PageHeader from '@layout/PageHeader';
import CustomersInfobox from '@components/CustomersInfobox';
import ReviewsRate from '@widgets/ReviewsRate';
import LatestAcceptedReviews from '@widgets/LatestAcceptedReviews';
import ReviewsScore from '@widgets/ReviewsScore';

const Reviews = () => {
    return (
        <>
            <PageHeader title="Reviews"/>
            <div className="flex flex-col flex-1 gap-5 md:gap-[26px]">
                <div className="grid grid-cols-1 gap-y-5 md:gap-y-[26px] xl:grid-cols-6 xl:gap-x-[26px]">
                    <div className="widgets-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:col-span-4">
                        <ReviewsScore score={4.5}/>
                        <CustomersInfobox label="Total"
                                          count={348}
                                          color="green"/>
                        <CustomersInfobox label="New"
                                          count={25}
                                          suffix="%"
                                          iconClass="user-plus-solid"/>
                        <CustomersInfobox label="Regular"
                                          count={75}
                                          suffix="%"
                                          color="red"
                                          iconClass="user-group-crown-solid"/>
                    </div>
                    <ReviewsRate/>
                </div>
                <LatestAcceptedReviews/>
            </div>
        </>
    )
}

export default Reviews