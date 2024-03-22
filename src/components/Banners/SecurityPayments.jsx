// components
import Spring from '@components/Spring';

// assets
import cards from '@assets/banners/cards.webp';
import security from '@assets/banners/security.svg';

const SecurityPayments = () => {
    return (
        <Spring className="flex flex-col items-center justify-between rounded-md shadow-banner py-[30px] px-5
                text-white text-center bg-radial-blue h-[390px]">
            <div className="relative flex flex-1">
                <img className="relative max-h-[200px] w-auto mt-auto -right-[26px]" src={cards} alt="media"/>
                <div className="lens absolute z-10 w-[215px] h-[215px] top-0 left-1/2 -translate-x-1/2">
                    <img className="opacity-[.85] w-[93px] ml-2.5 mt-2.5" src={security} alt="media" />
                    <span className="block absolute w-[140px] h-[140px] bg-yellow blur-2xl rounded-full opacity-30 left-2.5"/>
                </div>
                <span className="block absolute w-[210px] h-[210px] bg-green blur-xl rounded-full opacity-30 right-0
                      -bottom-1/3"/>
            </div>
            <div className="relative z-10">
                <h4 className="text-white mt-5 mb-2">Security Payments</h4>
                <p className="text-sm font-medium font-heading max-w-[256px]">
                    Secure e-commerce platform and payment provider
                </p>
            </div>
        </Spring>
    )
}

export default SecurityPayments