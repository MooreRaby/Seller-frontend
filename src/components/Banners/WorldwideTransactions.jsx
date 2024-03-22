// components
import Spring from '@components/Spring';

// assets
import world from '@assets/banners/world.webp';
import bubbles from '@assets/banners/bubbles.webp';
import gear from '@assets/banners/gear.webp';
import map from '@assets/banners/map.webp';

const WorldwideTransactions = () => {
    return (
        <Spring className="relative overflow-hidden rounded-md bg-widget shadow h-[700px] md:h-[300px] 3xl:h-[700px]">
            <div className="flex flex-col items-center text-center relative z-20 h-full md:pl-8 md:justify-center
                 3xl:justify-start 3xl:pl-0">
                <img className="w-auto max-h-[340px] -mt-2.5 md:hidden 3xl:block"
                     src={world}
                     alt="media"/>
                <img className="absolute w-auto h-12 left-5 bottom-10"
                     src={bubbles}
                     alt="media"/>
                <img className="absolute w-auto h-[100px] right-0 bottom-0"
                     src={gear}
                     alt="media"/>
                <h3 className="max-w-[280px]">
                    Worldwide Transactions
                </h3>
                <p className="mt-5 mb-10 max-w-[195px] font-heading font-semibold text-base text-highlight-inverse">
                    100% Open Source - No sign up required
                </p>
                <button className="btn btn--primary max-w-[270px] w-full">
                    Try for Free
                </button>
            </div>
            <img className="absolute z-10 left-0 bottom-5 md:hidden 3xl:block" src={map} alt="media"/>
        </Spring>
    )
}

export default WorldwideTransactions