import PropTypes from 'prop-types';

const Switch = ({defaultChecked, checked, onChange, id}) => {
    return (
        <div className="switch">
            <input id={id}
                   type="checkbox"
                   checked={checked}
                   onChange={onChange}
                   defaultChecked={defaultChecked} />
            <label className="switch_slider" htmlFor={id} />
        </div>
    )
}

Switch.propTypes = {
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    id: PropTypes.string.isRequired,
    defaultChecked: PropTypes.bool
}

export default Switch