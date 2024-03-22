// components
import PageHeader from '@layout/PageHeader';
import DiscountSubscribe from '@components/Banners/DiscountSubscribe';
import TotalBalance from '@components/Banners/TotalBalance';
import Transactions from '@components/Banners/Transactions';
import WorldwideTransactions from '@components/Banners/WorldwideTransactions';
import FeaturedProduct from '@components/Banners/FeaturedProduct';
import HotOffer from '@components/Banners/HotOffer';
import SecurityPayments from '@components/Banners/SecurityPayments';
import Subscribe from '@components/Banners/Subscribe';
import SubscribeOffers from '@components/Banners/SubscribeOffers';
import HotOfferMini from '@components/Banners/HotOfferMini';

const Banners = () => {
    return (
        <>
            <PageHeader title="Banners & Offers" />
            <div className="widgets-grid grid-cols-1 2xl:grid-cols-[minmax(0,1fr)_minmax(0,340px)]">
                <div className="widgets-grid grid-cols-1">
                    <div className="widgets-grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,96px)]
                         lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,96px)]">
                        <DiscountSubscribe/>
                        <TotalBalance/>
                        <Transactions/>
                    </div>
                    <div className="widgets-grid grid-cols-1 lg:grid-cols-3">
                        <FeaturedProduct/>
                        <HotOffer/>
                        <SecurityPayments/>
                    </div>
                    <div className="widgets-grid grid-cols-1 lg:grid-cols-2">
                        <Subscribe/>
                        <SubscribeOffers/>
                    </div>
                </div>
                <div className="widgets-grid grid-cols-1">
                    <WorldwideTransactions/>
                    <HotOfferMini/>
                </div>
            </div>
        </>
    )
}

export default Banners