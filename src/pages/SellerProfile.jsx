// components
import PageHeader from '@layout/PageHeader';
import CalendarSelector from '@components/CalendarSelector';
import PopularTags from '@components/PopularTags';
import SellerProfilePreview from '@widgets/SellerProfilePreview';
import TransactionsInfobox from '@widgets/TransactionsInfobox';
import SaleActivity from '@widgets/SaleActivity';
import SalesProfitByCategory from '@widgets/SalesProfitByCategory';
import PeriodSalesRevenue from '@widgets/PeriodSalesRevenue';
import SellerProfileInfobox from '@components/SellerProfileInfobox';
import WalletBadge from '@widgets/WalletBadge';

// hooks
import {useWindowSize} from 'react-use';

// assets
import credit from '@assets/credit-card.webp';
import wallet from '@assets/wallet.webp';

const Boxes = ({wrapperClass}) => {
    return (
        <div className={`grid w-full grid-cols-1 gap-5 md:grid-cols-3 md:gap-[26px] ${wrapperClass || ''}`}>
            <SellerProfileInfobox value={23400} label="Income"/>
            <SellerProfileInfobox icon="barcode" color="green" value={234} label="New Orders" withCurrency={false}/>
            <SellerProfileInfobox icon="tax" color="red" value={123} label="Expense"/>
        </div>
    )
}

const SellerProfile = () => {
    const {width} = useWindowSize();

    return (
        <>
            <PageHeader title="Seller Profile Details"/>
            <div className="flex flex-col gap-4 mb-5 md:mb-[26px] md:gap-5 lg:flex-row lg:justify-between">
                <CalendarSelector wrapperClass="md:max-w-[275px]" id="sellerPeriodSelector"/>
                <PopularTags/>
            </div>
            <div className="widgets-grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-6">
                <SellerProfilePreview/>
                <TransactionsInfobox/>
                <div className="widgets-grid grid-cols-1 md:col-span-3 md:grid-cols-2">
                    <SaleActivity/>
                    <div className="widgets-grid grid-cols-1">
                        <WalletBadge label="Total Expense" value={32100} image={credit}/>
                        <WalletBadge label="Total Profit" value={144100} image={wallet}/>
                    </div>
                </div>
                <div className="widgets-grid grid-cols-1 md:col-span-3 lg:grid-cols-2 2xl:col-span-6">
                    <PeriodSalesRevenue/>
                    <div className="widgets-grid grid-cols-1">
                        <SalesProfitByCategory/>
                        {
                            (width < 1024 || width >= 1440) && <Boxes/>
                        }
                    </div>
                </div>
                {(width >= 1024 && width < 1440) && <Boxes wrapperClass="col-span-3"/>}
            </div>
        </>
    )
}

export default SellerProfile