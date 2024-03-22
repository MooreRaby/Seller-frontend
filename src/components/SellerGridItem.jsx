// components
import Spring from '@components/Spring';
import SubmenuTrigger from '@ui/SubmenuTrigger';
import Submenu from '@ui/Submenu';
import {NavLink} from 'react-router-dom';

// hooks
import useSubmenu from '@hooks/useSubmenu';
import {useNavigate} from 'react-router-dom';

const SellerGridItem = ({seller, index}) => {
    const {anchorEl, open, handleClick, handleClose} = useSubmenu();
    const navigate = useNavigate();

    const handleLogoClick = () => navigate(`/seller-profile`);

    return (
        <Spring className="card flex items-start gap-1.5 !pt-[22px] !pr-5 !pb-6 !pl-6"
                type="slideUp"
                index={index}>
            <div className="h-[136px] bg-white rounded-lg flex flex-1 items-center justify-center cursor-pointer"
                 onClick={handleLogoClick}>
                <div className="w-[120px] h-[100px] flex items-center justify-center">
                    <img className="h-full w-auto object-contain" src={seller.logo} alt={seller.name}/>
                </div>
            </div>
            <SubmenuTrigger onClick={handleClick}/>
            <Submenu open={open} onClose={handleClose} anchorEl={anchorEl}>
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

export default SellerGridItem