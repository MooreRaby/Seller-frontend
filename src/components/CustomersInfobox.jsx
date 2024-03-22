// components
import Spring from '@components/Spring';
import Counter from '@components/Counter';

// utils
import PropTypes from 'prop-types';

const CustomersInfobox = ({iconClass = 'users-solid', color = 'accent', label = 'All', count = 0, suffix}) => {
    return (
        <Spring className="card flex flex-col justify-center md:items-center">
            <div className={`badge-icon badge-icon--sm bg-${color}`}>
                <i className={`icon-${iconClass} text-base`}/>
            </div>
            <div className="mt-3 mb-4">
                <Counter className="h2 md:!text-[32px]" num={count} suffix={suffix} />
            </div>
            <h6>
                {label}
                <span className="xl:hidden 4xl:inline"> Customers</span>
            </h6>
        </Spring>
    )
}

CustomersInfobox.propTypes = {
    iconClass: PropTypes.string,
    color: PropTypes.string,
    label: PropTypes.string,
    count: PropTypes.number
}

export default CustomersInfobox