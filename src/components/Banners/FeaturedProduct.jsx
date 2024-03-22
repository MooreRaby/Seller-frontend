// components
import Spring from '@components/Spring';
import {NavLink} from 'react-router-dom';

// assets
import phone from '@assets/banners/phone.webp';

const FeaturedProduct = () => {
    return (
        <Spring className="card flex flex-col items-center justify-end text-center !pb-8 h-[390px]">
            <img className="max-w-[200px] mb-2.5" src={phone} alt="New Phone15 Pro"/>
            <h4>New Phone15 Pro</h4>
            <p className="mt-1 mb-4 font-medium font-heading text-highlight-inverse dark:text-white">
                Get $200–$600 in credit toward
            </p>
            <NavLink className="subheading-2 transition-all flex items-center gap-2 hover:gap-3" to="/products-grid">
                Shop now <i className="icon-caret-right-solid"/>
            </NavLink>
        </Spring>
    )
}

export default FeaturedProduct