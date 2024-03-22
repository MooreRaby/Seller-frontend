// components
import Collapse from '@mui/material/Collapse';
import {NavLink} from 'react-router-dom';
import SubmenuTrigger from '@ui/SubmenuTrigger';

// utils
import PropTypes from 'prop-types';

const SellerCollapseItem = ({seller, activeCollapse, handleCollapse}) => {
    return (
        <div className="card">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                    <div className="img-wrapper flex items-center justify-center w-10 h-10">
                        <img className="max-w-[28px]" src={seller.logo} alt={seller.name}/>
                    </div>
                    <h6 className="max-w-[110px] truncate xs:max-w-[160px]">{seller.name}</h6>
                </div>
                <div className="flex items-center gap-4">
                    <button className={`collapse-btn ${activeCollapse === seller.id ? 'active' : ''}`}
                            aria-label="Toggle view"
                            onClick={() => handleCollapse(seller.id)}>
                        <i className="icon icon-caret-down-solid"/>
                    </button>
                    <NavLink to="/product-editor" aria-label="Edit">
                        <i className="icon icon-pen-to-square-regular"/>
                    </NavLink>
                    <SubmenuTrigger/>
                </div>
            </div>
            <Collapse in={activeCollapse === seller.id}>
                <table className="basic-table">
                    <tbody>
                    <tr>
                        <td>Rating</td>
                        <td>
                            <div className="flex items-center gap-2.5">
                                <i className="icon-star-solid text-yellow"/>
                                <span className="label-text">{seller.rating}</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-gray-500">Email</td>
                        <td>
                            <a className="block max-w-[160px] truncate text-accent"
                               href={`mailto:${seller.email}`}>
                                {seller.email}
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-gray-500">Phone</td>
                        <td>
                            <a className="block max-w-[160px] truncate text-accent" href={`tel:${seller.phone}`}>
                                {seller.phone}
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-gray-500">Site</td>
                        <td>
                            <a className="block max-w-[160px] truncate text-accent"
                               href={seller.website}
                               target="_blank"
                               rel="noopener noreferrer">
                                www.website.com
                            </a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </Collapse>
        </div>
    )
}

SellerCollapseItem.propTypes = {
    seller: PropTypes.object.isRequired,
    activeCollapse: PropTypes.string.isRequired,
    handleCollapse: PropTypes.func.isRequired
}

export default SellerCollapseItem