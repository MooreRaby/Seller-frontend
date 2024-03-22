// components
import Spring from '@components/Spring';

// assets
import sale from '@assets/banners/sale.webp';

const HotOffer = ({wrapperClass}) => {
    return (
        <Spring
            className={`${wrapperClass || ''} bg-yellow py-8 px-11 border-2 border-dashed border-orange flex flex-col items-center rounded-md`}>
            <img className="w-[195px]" src={sale} alt="sale"/>
            <span className="h2 mt-5 mb-4 !text-orange md:text-[38px]">Hot Offer!</span>
            <button className="btn bg-white text-red border border-solid border-red gap-2.5 w-full max-w-[250px]
                    hover:bg-red hover:text-white">
                Get Discount <i className="icon-percent-solid"/>
            </button>
        </Spring>
    )
}

export default HotOffer