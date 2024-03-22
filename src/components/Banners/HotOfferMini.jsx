// components
import Spring from '@components/Spring';

// assets
import tags from '@assets/banners/tags.webp';

const HotOfferMini = ({wrapperClass}) => {
    return (
        <Spring
            className={`${wrapperClass || ''} bg-yellow border-2 border-dashed border-orange px-5 flex items-center gap-[14px] rounded-md h-[78px]`}>
            <img className="w-[74px]" src={tags} alt="tags"/>
            <span className="h2 !text-orange md:text-[36px]">Hot Offer!</span>
        </Spring>
    )
}

export default HotOfferMini