// components
import Spring from '@components/Spring';

// assets
import arrow from '@assets/banners/arrow.webp';

const SubscribeOffers = () => {
    return (
        <Spring className="relative overflow-hidden">
            <div className="bg-widget h-[78px] border-2 border-accent rounded-md pl-6 pr-20 flex items-center mr-3">
                <span className="h4 !text-accent">Best offers for subscribers</span>
            </div>
            <img className="w-[110px] absolute -right-5 top-1/2 -translate-y-1/2" src={arrow} alt="media"/>
        </Spring>
    )
}

export default SubscribeOffers