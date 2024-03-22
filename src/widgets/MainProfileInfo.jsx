// components
import Spring from '@components/Spring';
import InfoBtn from '@ui/InfoBtn';
import Counter from '@components/Counter';
import Trend from '@ui/Trend';
import Submenu from '@ui/Submenu';

// hooks
import {useTheme} from '@contexts/themeContext';
import useSubmenu from '@hooks/useSubmenu';

// assets
import light from '@assets/logo_light.svg';
import dark from '@assets/logo_dark.svg';
import {NavLink} from 'react-router-dom';

const MainProfileInfo = () => {
    const {theme} = useTheme();
    const {anchorEl, open, handleClick, handleClose} = useSubmenu();

    return (
        <Spring className="card flex flex-col gap-4 md:flex-row md:gap-[26px] lg:col-span-3 xl:col-span-2 2xl:col-span-1">
            <div className="h-[230px] rounded-md bg-body border border-input-border p-5 flex flex-col items-center
                 justify-center gap-6 shrink-0 md:w-[190px]">
                <img className="h-20 w-auto ml-2.5"
                     src={theme === 'light' ? light : dark}
                     alt="ShopPoint" />
                <span className="font-heading font-bold text-xl leading-[1.1] text-header">
                    ShopPoint
                </span>
            </div>
            <div className="flex flex-1 flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <h3>ShopPoint - Retail</h3>
                    <p>Aliquam erat volutpat. Duis molestie ultrices tempus. Mauris sem orci, euismod sit amet.</p>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                        <h5>Average Rate 2023</h5>
                        <InfoBtn onClick={handleClick}/>
                    </div>
                    <div className="flex-1 grid grid-cols-1 gap-6 md:grid-cols-2 lg:flex justify-between xl:max-w-[670px]">
                        <div className="flex gap-5">
                            <div className="badge-icon bg-green">
                                <i className="icon-diamond text-[23px] mt-1"/>
                            </div>
                            <div>
                                <Counter className="block -mt-1 font-heading font-semibold leading-[1.1] text-header text-[26px] md:text-[32px]"
                                         num={15412}
                                         prefix="$"/>
                                <span className="block label-text mb-2">Income</span>
                                <Trend value={45.21}/>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div className="badge-icon bg-red">
                                <i className="icon-tax text-lg"/>
                            </div>
                            <div>
                                <Counter className="block -mt-1 font-heading font-semibold leading-[1.1] text-header text-[26px] md:text-[32px]"
                                         num={53487}
                                         prefix="$"/>
                                <span className="block label-text mb-2">Expense</span>
                                <Trend value={-12}/>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div className="badge-icon bg-accent">
                                <i className="icon-barcode"/>
                            </div>
                            <div>
                                <Counter className="block -mt-1 font-heading font-semibold leading-[1.1] text-header text-[26px] md:text-[32px]"
                                         num={5412}/>
                                <span className="block label-text mb-2">New Orders</span>
                                <Trend value={14.36}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Submenu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <div className="flex flex-col items-start gap-5 p-5">
                    <NavLink className="menu-btn subheading-2" to="/seller-profile">
                         <span className="icon-wrapper">
                             <i className="icon icon-chart-pie-solid"/>
                         </span>
                        View Profile
                    </NavLink>
                    <button className="menu-btn subheading-2">
                         <span className="icon-wrapper">
                             <i className="icon icon-link-solid"/>
                         </span>
                        Contacts
                    </button>
                    <button className="menu-btn subheading-2">
                        <span className="icon-wrapper">
                            <i className="icon icon-share-solid"/>
                        </span>
                        Share
                    </button>
                </div>
            </Submenu>
        </Spring>
    )
}

export default MainProfileInfo