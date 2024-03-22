// components
import Collapse from '@mui/material/Collapse';

// utils
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import {getStatusColor} from '@utils/helpers';

const TransactionCollapseItem = ({transaction, activeCollapse, handleCollapse}) => {
    return (
        <div className="card">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-[18px]">
                    <div
                        className="img-wrapper w-[40px] h-[40px] flex items-center justify-center shrink-0">
                        <img className="max-w-[30px]" src={transaction.seller.logo} alt={transaction.seller.name}/>
                    </div>
                    <span className="h6 hidden truncate xs:inline">{transaction.seller.name}</span>
                </div>
                <div className="flex items-center gap-2.5 shrink-0">
                    <p className="text-sm font-medium">{dayjs(transaction.timestamp).format('DD.MM.YY, hh:mm')}</p>
                    <button className={`collapse-btn ${activeCollapse === transaction.sku ? 'active' : ''}`}
                            aria-label="Toggle view"
                            onClick={() => handleCollapse(transaction.sku)}>
                        <i className="icon icon-caret-down-solid"/>
                    </button>
                </div>
            </div>
            <Collapse in={activeCollapse === transaction.sku}>
                <table className="basic-table">
                    <tbody>
                    <tr>
                        <td>SKU</td>
                        <td>{transaction.sku}</td>
                    </tr>
                    <tr>
                        <td>Method</td>
                        <td>{transaction.method}</td>
                    </tr>
                    <tr>
                        <td>Type</td>
                        <td className="capitalize">{transaction.type}</td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td>
                            <span className="badge-status"
                                  style={{
                                      backgroundColor: `var(--${getStatusColor(transaction.status)})`,
                                      width: '100%'
                                  }}>
                                {transaction.status}
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>Country</td>
                        <td>{transaction.country}</td>
                    </tr>
                    <tr>
                        <td>Currency</td>
                        <td>{transaction.currency}</td>
                    </tr>
                    <tr>
                        <td>Fee</td>
                        <td>${transaction.fee}</td>
                    </tr>
                    <tr>
                        <td>Tax</td>
                        <td>{transaction.tax}</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>${(transaction.fee - (transaction.fee / 100 * transaction.tax)).toFixed(2)}</td>
                    </tr>
                    </tbody>
                </table>
            </Collapse>
        </div>
    )
}

TransactionCollapseItem.propTypes = {
    transaction: PropTypes.object.isRequired,
    activeCollapse: PropTypes.string.isRequired,
    handleCollapse: PropTypes.func.isRequired
}

export default TransactionCollapseItem