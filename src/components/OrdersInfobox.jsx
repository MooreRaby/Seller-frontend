// components
import Spring from '@components/Spring';
import Counter from '@components/Counter';
import SubmenuTrigger from '@ui/SubmenuTrigger';

// utils
import PropTypes from 'prop-types';

const OrdersInfobox = ({icon, color = 'accent', title = 'Lorem ipsum', count = 0}) => {
    return (
        <Spring className="card !pb-5">
            <div className="flex justify-between items-start">
                <div className="badge-icon badge-icon--sm" style={{backgroundColor: `var(--${color})`}}>
                    {icon}
                </div>
                <SubmenuTrigger />
            </div>
            <h6 className="mt-[28px] mb-2.5">
                <span className="xl:hidden 2xl:inline">Orders </span>
                {title}
            </h6>
            <Counter className="h3" num={count} />
        </Spring>
    )
}

OrdersInfobox.propTypes = {
    icon: PropTypes.node,
    color: PropTypes.oneOf(['accent', 'green', 'red', 'badge-status-bg']),
    title: PropTypes.string,
    count: PropTypes.number
}

export default OrdersInfobox