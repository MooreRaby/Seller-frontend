// components
import Spring from '@components/Spring';

// assets
import accent from '@assets/banners/color-accent.webp';
import collage from '@assets/banners/collage.webp';

const DiscountSubscribe = () => {
    return (
        <Spring className="md:col-span-2 lg:col-span-1">
            <div className="relative bg-linear-blue shadow-banner rounded-md p-10 lg:h-[218px]">
                <div className="relative z-10">
                    <p className="h1 !text-white !font-semibold max-w-[200px] mb-4">
                        Get Up to 70% off
                    </p>
                    <button className="text-btn text-btn--white">subscribe</button>
                </div>
                <img className="absolute top-0 left-0 w-full h-full" src={accent} alt="media"/>
                <img className="hidden lg:block absolute top-10 -right-10 h-[264px] w-auto xl:-right-[16%]"
                     src={collage}
                     alt="media"/>
            </div>
        </Spring>
    )
}

export default DiscountSubscribe