// components
import MessageItem from '@components/MessageItem';
import FilterItem from '@ui/FilterItem';
import DrawerBase from '@ui/DrawerBase';

// hooks
import useMeasure from 'react-use-measure';
import {useState, useEffect} from 'react';

// constants
import {MESSAGE_OPTIONS} from '@constants/options';

// utils
import dayjs from 'dayjs';

// data placeholder
import messages from '@db/messages';

const step = 6;

const MessagesPanel = ({open, onOpen, onClose}) => {
    const [headerRef, {height: headerHeight}] = useMeasure();
    const [footerRef, {height: footerHeight}] = useMeasure();
    const [filter, setFilter] = useState('all');
    const [displayed, setDisplayed] = useState(step);

    const latestMessages = messages.filter(message => dayjs(message.createdAt).isAfter(dayjs().subtract(1, 'day')));
    const archivedMessages = messages.filter(message => message.archived);

    useEffect(() => {
        setFilter('all');
        setDisplayed(step);
    }, [open]);

    const handleLoadMore = () => {
        setDisplayed(displayed + step);
    }

    const getQty = (category) => {
        if (category === 'all') return messages.length;
        if (category === 'latest') return latestMessages.length;
        if (category === 'archived') return archivedMessages.length;
    }

    const filteredData = () => {
        if (filter === 'all') return messages;
        if (filter === 'latest') return latestMessages
        if (filter === 'archived') return archivedMessages
    }
    
    const sortedData = () => filteredData().sort((a, b) => dayjs(b.createdAt).diff(dayjs(a.createdAt)));

    return (
        <DrawerBase open={open} onOpen={onOpen} onClose={onClose} anchor="right">
            <div className="py-8 px-[30px] pb-4" ref={headerRef}>
                <div className="flex justify-between items-center">
                    <h5>Messages</h5>
                    <button className="text-accent text-lg transition hover:text-red"
                            onClick={onClose}
                            aria-label="Close messages panel">
                        <i className="icon-circle-xmark-regular"/>
                    </button>
                </div>
                <div className="flex mt-[18px]">
                    {
                        MESSAGE_OPTIONS.map((item, index) => (
                            <FilterItem
                                key={index}
                                text={item.label}
                                value={item.value}
                                active={filter}
                                qty={getQty(item.value)}
                                onClick={() => setFilter(item.value)}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="h-full overflow-y-auto flex-1" style={{height: `calc(100vh - ${headerHeight + footerHeight}px)`}}>
                {
                    sortedData().slice(0, displayed).map((message, index) => (
                        <MessageItem key={`${message.id}-${filter}`} message={message} index={index}/>
                    ))
                }
            </div>
            <div className="p-[30px]" ref={footerRef}>
                <button className="btn btn--secondary w-full"
                        onClick={handleLoadMore}
                        disabled={displayed >= filteredData().length}>
                    Load More
                </button>
            </div>
        </DrawerBase>
    )
}

export default MessagesPanel