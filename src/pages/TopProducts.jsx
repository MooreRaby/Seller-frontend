// components
import PageHeader from '@layout/PageHeader';
import TopSalesByCategories from '@widgets/TopSalesByCategories';
import TopRetail from '@widgets/TopRetail';
import TopProductsList from '@widgets/TopProductsList';

const TopProducts = () => {
    return (
        <>
            <PageHeader title="Top Products" />
            <div className="widgets-grid grid-cols-1 lg:!gap-10 xl:mb-[50px]">
                <div className="widgets-grid grid-cols-1 xl:grid-cols-[minmax(0,330px)_minmax(0,1fr)]
                    2xl:grid-cols-6">
                    <TopSalesByCategories />
                    <TopRetail />
                </div>
                <div className="widgets-grid grid-cols-1 lg:grid-cols-2">
                    <TopProductsList />
                    <TopProductsList category="fashion" />
                </div>
                <div className="widgets-grid grid-cols-1 lg:grid-cols-2">
                    <TopProductsList category="food"/>
                    <TopProductsList category="services" />
                </div>
            </div>
        </>
    )
}

export default TopProducts