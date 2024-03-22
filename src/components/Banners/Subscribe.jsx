// components
import Spring from '@components/Spring';

// hooks
import {useTheme} from '@contexts/themeContext';

const Subscribe = () => {
    const {theme} = useTheme();

    return (
        <Spring>
            <div className="rounded-md p-5 flex flex-col gap-5 md:flex-row md:gap-2.5 md:justify-between md:items-center
                 md:py-0 md:h-[78px] md:px-[30px]"
                 style={{background: `var(--linear-sm-${theme})`}}>
                <p className="h6 max-w-[310px] m-auto text-center !text-white !leading-[1.4] md:text-left md:m-0">
                    Make your new become a part of largest marketplace
                </p>
                <button className="btn btn--primary md:min-w-[200px] lg:min-w-[120px] xl:min-w-[200px]">
                    Subscribe
                </button>
            </div>
        </Spring>
    )
}

export default Subscribe