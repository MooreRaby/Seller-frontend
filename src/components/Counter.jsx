// components
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

// hooks
import {useState} from 'react';

// utils
import PropTypes from 'prop-types';
import {numFormatter, commaFormatter} from '@utils/helpers';

const Counter = ({num, className, isFormatted, ...props}) => {
    const [countFinished, setCountFinished] = useState(false);

    return (
        <CountUp start={countFinished ? num : 0}
                 end={num}
                 duration={2}
                 onEnd={() => setCountFinished(true)}
                 formattingFn={isFormatted ? value => numFormatter(value, 0, props.prefix) : null}
                 {...props}>
            {({countUpRef, start}) => (
                <VisibilitySensor onChange={start} active={!countFinished} delayedCall>
                    <span className={`relative ${className || ''}`}>
                        <span className="opacity-0">
                            {props.prefix}
                            {isFormatted ? numFormatter(num, props.decimals || 0, props.prefix) : commaFormatter(num)}
                            {props.suffix}
                        </span>
                        <span className="absolute left-0" ref={countUpRef}/>
                    </span>
                </VisibilitySensor>
            )}
        </CountUp>
    )
}

Counter.propTypes = {
    num: PropTypes.number.isRequired,
    className: PropTypes.string,
}

export default Counter