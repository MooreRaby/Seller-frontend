// components
import RangeDatePicker from '@ui/RangeDatePicker';

// utils
import PropTypes from 'prop-types';

const CalendarSelector = ({wrapperClass, label = 'Sales period', id}) => {
    return (
        <div className={`${wrapperClass || ''} flex flex-col gap-2.5 w-full`}>
            <label className="h5 w-fit" htmlFor={id}>{label}:</label>
            <RangeDatePicker id={id}/>
        </div>
    )
}

CalendarSelector.propTypes = {
    wrapperClass: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.string.isRequired
}

export default CalendarSelector