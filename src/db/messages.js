import {faker} from '@faker-js/faker';
import img1 from '@assets/reviews/1.webp';
import img2 from '@assets/reviews/2.webp';
import img3 from '@assets/reviews/3.webp';
import img4 from '@assets/reviews/4.webp';
import img5 from '@assets/reviews/5.webp';
import img6 from '@assets/reviews/6.webp';
import img7 from '@assets/reviews/7.webp';
import img8 from '@assets/reviews/8.webp';

const messages = [
    {
        id: 'message-1',
        content: faker.lorem.paragraph(),
        createdAt: faker.date.recent(),
        sender: {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            avatar: img1
        },
        archived: false
    },
    {
        id: 'message-2',
        content: faker.lorem.paragraph(),
        createdAt: faker.date.recent(),
        sender: {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            avatar: img2
        },
        archived: false
    },
    {
        id: 'message-3',
        content: faker.lorem.paragraph(),
        createdAt: faker.date.recent(),
        sender: {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            avatar: img3
        },
        archived: false
    },
    {
        id: 'message-4',
        content: faker.lorem.paragraph(),
        createdAt: faker.date.past(),
        sender: {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            avatar: img4
        },
        archived: true
    },
    {
        id: 'message-5',
        content: faker.lorem.paragraph(),
        createdAt: faker.date.past(),
        sender: {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            avatar: img5
        },
        archived: true
    },
    {
        id: 'message-6',
        content: faker.lorem.paragraph(),
        createdAt: faker.date.past(),
        sender: {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            avatar: img6
        },
        archived: false
    },
    {
        id: 'message-7',
        content: faker.lorem.paragraph(),
        createdAt: faker.date.past(),
        sender: {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            avatar: img7
        },
        archived: false
    },
    {
        id: 'message-8',
        content: faker.lorem.paragraph(),
        createdAt: faker.date.past(),
        sender: {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            avatar: img8
        },
        archived: false
    },
    {
        id: 'message-9',
        content: faker.lorem.paragraph(),
        createdAt: faker.date.past(),
        sender: {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            avatar: img1
        },
        archived: true
    },
    {
        id: 'message-10',
        content: faker.lorem.paragraph(),
        createdAt: faker.date.past(),
        sender: {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            avatar: img2
        },
        archived: true
    }
]

export default messages