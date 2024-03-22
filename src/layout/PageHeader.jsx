// components
import DocumentTitle from '@components/DocumentTitle';

// hooks
import {useState, useEffect} from 'react';
import {useWindowSize} from 'react-use';

// utils
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const PageHeader = ({title}) => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const {width} = useWindowSize();
    const dateFormat = width < 768 ? 'MM.DD.YYYY' : 'MMMM DD, YYYY';

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, [currentTime]);

    return (
        <>
            <DocumentTitle title={title}/>
            <div className="card no-hover flex flex-col gap-5 !p-5 mb-5 md:mb-[26px] md:!p-[26px] lg:!py-5 lg:flex-row
                 lg:items-center lg:gap-4">
                <h1 className="flex-1 text-center lg:text-left">{title}</h1>
                <button className="group hidden w-fit xl:flex items-center gap-2 font-heading font-semibold
                        text-header text-sm">
                    Data Refresh
                    <i className="icon icon-arrows-rotate-regular text-[20px] group-hover:animate-spin-slow"/>
                </button>
                <div className="h-11 bg-body flex items-center justify-center rounded-md px-9 font-heading font-bold
                    text-header text-sm border border-input-border lg:w-[310px]">
                    {dayjs(currentTime).format(`${dateFormat} HH`)}
                    <span className="animate-pulse-fast">:</span>
                    {dayjs(currentTime).format('mm A')}
                </div>
            </div>
        </>
    )
}

PageHeader.propTypes = {
    title: PropTypes.string.isRequired
}

export default PageHeader