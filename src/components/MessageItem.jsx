// components
import Spring from '@components/Spring';
import TruncatedText from '@components/TruncatedText';

// hooks
import useMeasure from 'react-use-measure';

// utils
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const placeholder = {
    id: 'message-1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget finibus aliquam, nunc',
    createdAt: new Date(),
    sender: {
        firstName: 'John',
        lastName: 'Doe',
        avatar: 'https://placehold.it/100x100'
    }
}

const MessageItem = ({ message = placeholder, index }) => {
    const fullName = `${message.sender.firstName} ${message.sender.lastName}`;
    const [ref, { width }] = useMeasure();

    return (
        <Spring className="notification with-bg !px-[30px] flex gap-2.5" index={index}>
            <img className="w-[36px] h-[36px] shrink-0 rounded-md bg-body overflow-hidden"
                 src={message.sender.avatar}
                 alt={fullName} />
            <div>
                <h6 className="text-sm truncate max-w-[210px]">{fullName}</h6>
                <p className="flex items-center gap-1.5 mt-1 mb-2 text-xs font-medium text-gray">
                    <span>{dayjs(message.createdAt).fromNow()}</span>
                    <i className="icon-circle-solid text-[4px]"/>
                    <span>at {dayjs(message.createdAt).format('h:mm A')}</span>
                </p>
                <div className="max-w-[210px] text-sm mt-1 mb-2" ref={ref}>
                    <TruncatedText text={message.content} width={width} />
                </div>
                <div className="flex gap-2.5">
                    <button className="btn btn--outline size-xs green w-[70px]">
                        Reply
                    </button>
                    <button className="btn btn--outline size-xs red w-[120px]">
                        Mark as read
                    </button>
                </div>
            </div>
        </Spring>
    )
}

export default MessageItem