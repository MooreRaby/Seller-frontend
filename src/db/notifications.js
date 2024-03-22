import {faker} from '@faker-js/faker';
import img1 from '@assets/reviews/1.webp';
import img2 from '@assets/reviews/2.webp';
import img3 from '@assets/reviews/3.webp';
import img4 from '@assets/reviews/4.webp';
import img5 from '@assets/reviews/5.webp';
import img6 from '@assets/reviews/6.webp';
import img7 from '@assets/reviews/7.webp';

const notifications = [
    {
        id: 'notification-1',
        timestamp: faker.date.recent(),
        category: 'order',
        subcategory: 'Offers',
        text: 'joined to discount program',
        user: {
            firstName: 'J.',
            lastName: 'Davidson',
            avatar: img1
        }
    },
    {
        id: 'notification-2',
        timestamp: faker.date.recent(),
        category: 'follow',
        subcategory: 'Referral link',
        text: 'created new account by email',
        user: {
            firstName: 'Mark',
            lastName: 'Dowers',
            avatar: img2
        }
    },
    {
        id: 'notification-3',
        timestamp: faker.date.recent(),
        category: 'follow',
        subcategory: 'Referral link',
        text: 'created new account by email',
        user: {
            firstName: 'Parker',
            lastName: 'Johnson',
            avatar: img3
        }
    },
    {
        id: 'notification-4',
        timestamp: faker.date.recent(),
        category: 'order',
        subcategory: 'Electronics',
        text: 'leaved a new review',
        user: {
            firstName: 'Mary',
            lastName: 'Wilson',
            avatar: img4
        }
    },
    {
        id: 'notification-5',
        timestamp: faker.date.recent(),
        category: 'order',
        subcategory: 'Electronics',
        text: 'sent a request for refund',
        user: {
            firstName: 'Helen',
            lastName: 'Miller',
            avatar: img5
        }
    },
    {
        id: 'notification-6',
        timestamp: faker.date.recent(),
        category: 'follow',
        subcategory: 'Subscriptions',
        text: 'started following you',
        user: {
            firstName: 'Victor',
            lastName: 'Stevens',
            avatar: img6
        }
    },
    {
        id: 'notification-7',
        timestamp: faker.date.past(),
        category: 'follow',
        subcategory: 'Subscriptions',
        text: 'started following you',
        user: {
            firstName: 'Rita',
            lastName: 'Fisher',
            avatar: img7
        }
    }
]

export default notifications