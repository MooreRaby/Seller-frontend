// components
import PageHeader from '@layout/PageHeader';
import CalendarSelector from '@components/CalendarSelector';
import PopularTags from '@components/PopularTags';
import SalesVolumeChart from '@widgets/SalesVolumeChart';
import ReferralRate from '@widgets/ReferralRate';
import ProfitPerformance from '@widgets/ProfitPerformance';
import RevenueInfobox from '@components/RevenueInfobox';
import ConversionRateWithChart from '@widgets/ConversionRateWithChart';
import WalletBadge from '@widgets/WalletBadge';

// assets
import credit from '@assets/credit-card.webp';
import wallet from '@assets/wallet.webp';
import coins from '@assets/coins.webp';

const RevenueByPeriod = () => {
    return (
        <>
            <PageHeader title="Revenue By Period"/>
            <div>
                <div className="flex flex-col gap-4 mb-5 md:mb-[26px] md:gap-5 lg:flex-row lg:justify-between">
                    <CalendarSelector wrapperClass="md:max-w-[275px]" id="revenue"/>
                    <PopularTags/>
                </div>
                <div className="widgets-grid grid-cols-1 md:grid-cols-2
                     2xl:grid-cols-[minmax(0,_584px)_minmax(0,_462px)_minmax(0,_1fr)]">
                    <SalesVolumeChart/>
                    <div className="widgets-grid grid-cols-1 md:grid-cols-2 md:gap-[26px] md:col-span-2 lg:col-span-1">
                        <RevenueInfobox icon="tax" color="yellow" trend={10} label="Income 2022" value={96100}/>
                        <RevenueInfobox color="red" trend={78} label="Profit 2022" value={2100}/>
                        <RevenueInfobox icon="tax" trend={-12} label="Income 2023" value={396100}/>
                        <RevenueInfobox color="green" trend={65} label="Profit 2022" value={80100}/>
                    </div>
                    <ProfitPerformance/>
                    <ConversionRateWithChart/>
                    <ReferralRate/>
                    <div className="widgets-grid grid-cols-1 md:row-start-3 md:col-end-3 2xl:row-start-2 2xl:col-end-4">
                        <WalletBadge value={176200}
                                     imgClass="2xl:hidden 4xl:flex"
                                     label="Total Balance"
                                     image={coins}/>
                        <WalletBadge value={32100}
                                     imgClass="2xl:hidden 4xl:flex"
                                     label="Total Expense"
                                     image={credit}/>
                        <WalletBadge value={144100}
                                     imgClass="2xl:hidden 4xl:flex"
                                     label="Total Profit"
                                     image={wallet}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RevenueByPeriod