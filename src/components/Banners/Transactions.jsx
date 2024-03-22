// components
import Spring from '@components/Spring';

// assets
import big from '@assets/banners/transactions.webp';
import small from '@assets/banners/transactions-mini.webp';

const Transactions = () => {
    return (
        <Spring className="relative overflow-hidden bg-green rounded-md h-[286px] p-[18px]">
            <div className="relative z-10 flex flex-col items-center">
                <div className="badge-icon badge-icon--sm bg-[#035ECF] mb-[18px]">
                    <i className="icon-money-bill-transfer-solid !text-white"/>
                </div>
                <span className="h3 !text-white mb-1.5 md:!text-base md:mb-0">$32,987</span>
                <span className="font-heading font-bold text-white text-[10px]">
                    Transactions
                </span>
            </div>
            <img className="absolute bottom-2.5 right-0 max-w-[270px] md:hidden" src={big} alt="media"/>
            <img className="absolute bottom-0 -right-[1px] hidden md:block" src={small} alt="media"/>
        </Spring>
    )
}

export default Transactions