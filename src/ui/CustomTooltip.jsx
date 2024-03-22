// components
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';

const CustomTooltip = ({children, withArrow = true, tooltipClass, ...props}) => {
    return (
        <Tooltip TransitionComponent={Fade}
                 arrow={withArrow}
                 classes={{
                     popper: 'p-[15px]',
                     tooltip: `!bg-widget shadow !rounded-md !p-0 !font-body !text-body-text`,
                     arrow: '!text-widget'
                 }}
                 enterTouchDelay={0}
                 leaveTouchDelay={5000}
                 {...props}
        >
            {children}
        </Tooltip>
    )
}

export default CustomTooltip