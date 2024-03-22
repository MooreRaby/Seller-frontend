import {faker} from '@faker-js/faker';
import albo from '@assets/sellers/1.webp';
import ecom from '@assets/sellers/3.webp';
import delight from '@assets/sellers/4.webp';
import whale from '@assets/sellers/7.webp';
import academy from '@assets/sellers/9.webp';
import oakley from '@assets/sellers/11.webp';

const transactions = [
    {
        sku: faker.finance.accountNumber(5),
        timestamp: faker.date.past(),
        method: 'Visa',
        type: faker.finance.transactionType(),
        status: 'waiting',
        country: 'USA',
        currency: faker.finance.currencyCode(),
        fee: faker.finance.amount(1, 10000, 2),
        tax: faker.finance.amount(0, 1, 1),
        seller: {
            name: 'Albo E-Store',
            logo: albo,
        }
    },
    {
        sku: faker.finance.accountNumber(5),
        timestamp: faker.date.past(),
        method: 'Visa',
        type: faker.finance.transactionType(),
        status: 'approved',
        country: 'USA',
        currency: faker.finance.currencyCode(),
        fee: faker.finance.amount(1, 10000, 2),
        tax: faker.finance.amount(0, 1, 1),
        seller: {
            name: 'Ecom',
            logo: ecom,
        }
    },
    {
        sku: faker.finance.accountNumber(5),
        timestamp: faker.date.past(),
        method: 'Maestro',
        type: faker.finance.transactionType(),
        status: 'approved',
        country: 'Australia',
        currency: faker.finance.currencyCode(),
        fee: faker.finance.amount(1, 10000, 2),
        tax: faker.finance.amount(0, 1, 1),
        seller: {
            name: 'Albo E-Store',
            logo: albo,
        }
    },
    {
        sku: faker.finance.accountNumber(5),
        timestamp: faker.date.past(),
        method: 'PayPal',
        type: faker.finance.transactionType(),
        status: 'approved',
        country: 'Israel',
        currency: faker.finance.currencyCode(),
        fee: faker.finance.amount(1, 10000, 2),
        tax: faker.finance.amount(0, 1, 1),
        seller: {
            name: 'Ecom',
            logo: ecom,
        }
    },
    {
        sku: faker.finance.accountNumber(5),
        timestamp: faker.date.past(),
        method: 'Switch',
        type: faker.finance.transactionType(),
        status: 'cancelled',
        country: 'Italy',
        currency: faker.finance.currencyCode(),
        fee: faker.finance.amount(1, 10000, 2),
        tax: faker.finance.amount(0, 1, 1),
        seller: {
            name: 'Delight',
            logo: delight,
        }
    },
    {
        sku: faker.finance.accountNumber(5),
        timestamp: faker.date.past(),
        method: 'Visa',
        type: faker.finance.transactionType(),
        status: 'rejected',
        country: 'USA',
        currency: faker.finance.currencyCode(),
        fee: faker.finance.amount(1, 10000, 2),
        tax: faker.finance.amount(0, 1, 1),
        seller: {
            name: 'Delight',
            logo: delight,
        }
    },
    {
        sku: faker.finance.accountNumber(5),
        timestamp: faker.date.past(),
        method: 'Mastercard',
        type: faker.finance.transactionType(),
        status: 'approved',
        country: 'France',
        currency: faker.finance.currencyCode(),
        fee: faker.finance.amount(1, 10000, 2),
        tax: faker.finance.amount(0, 1, 1),
        seller: {
            name: 'Whale',
            logo: whale,
        }
    },
    {
        sku: faker.finance.accountNumber(5),
        timestamp: faker.date.past(),
        method: 'PayPal',
        type: faker.finance.transactionType(),
        status: 'approved',
        country: 'France',
        currency: faker.finance.currencyCode(),
        fee: faker.finance.amount(1, 10000, 2),
        tax: faker.finance.amount(0, 1, 1),
        seller: {
            name: 'Academy',
            logo: academy,
        }
    },
    {
        sku: faker.finance.accountNumber(5),
        timestamp: faker.date.past(),
        method: 'Visa',
        type: faker.finance.transactionType(),
        status: 'approved',
        country: 'Latvia',
        currency: faker.finance.currencyCode(),
        fee: faker.finance.amount(1, 10000, 2),
        tax: faker.finance.amount(0, 1, 1),
        seller: {
            name: 'Academy',
            logo: academy,
        }
    },
    {
        sku: faker.finance.accountNumber(5),
        timestamp: faker.date.past(),
        method: 'PayPal',
        type: faker.finance.transactionType(),
        status: 'cancelled',
        country: 'Poland',
        currency: faker.finance.currencyCode(),
        fee: faker.finance.amount(1, 10000, 2),
        tax: faker.finance.amount(0, 1, 1),
        seller: {
            name: 'Oakley Store',
            logo: oakley,
        }
    },
    {
        sku: faker.finance.accountNumber(5),
        timestamp: faker.date.past(),
        method: 'Maestro',
        type: faker.finance.transactionType(),
        status: 'approved',
        country: 'Canada',
        currency: faker.finance.currencyCode(),
        fee: faker.finance.amount(1, 10000, 2),
        tax: faker.finance.amount(0, 1, 1),
        seller: {
            name: 'Oakley Store',
            logo: oakley,
        }
    },
    {
        sku: faker.finance.accountNumber(5),
        timestamp: faker.date.past(),
        method: 'Mastercard',
        type: faker.finance.transactionType(),
        status: 'approved',
        country: 'Sweden',
        currency: faker.finance.currencyCode(),
        fee: faker.finance.amount(1, 10000, 2),
        tax: faker.finance.amount(0, 1, 1),
        seller: {
            name: 'Albo E-Store',
            logo: albo,
        }
    }
]

export default transactions