import {faker} from '@faker-js/faker';
import img1 from '@assets/sellers/1.webp';
import img2 from '@assets/sellers/2.webp';
import img3 from '@assets/sellers/3.webp';
import img4 from '@assets/sellers/4.webp';
import img5 from '@assets/sellers/5.webp';
import img6 from '@assets/sellers/6.webp';
import img7 from '@assets/sellers/7.webp';
import img8 from '@assets/sellers/8.webp';
import img9 from '@assets/sellers/9.webp';
import img10 from '@assets/sellers/10.webp';
import img11 from '@assets/sellers/11.webp';
import img12 from '@assets/sellers/12.webp';
import img13 from '@assets/sellers/13.webp';
import img14 from '@assets/sellers/14.webp';
import img15 from '@assets/sellers/15.webp';
import img16 from '@assets/sellers/16.webp';
import img17 from '@assets/sellers/17.webp';
import img18 from '@assets/sellers/18.webp';
import img19 from '@assets/sellers/19.webp';
import img20 from '@assets/sellers/20.webp';
import img21 from '@assets/sellers/21.webp';
import img22 from '@assets/sellers/22.webp';
import img23 from '@assets/sellers/23.webp';
import img24 from '@assets/sellers/24.webp';
import img25 from '@assets/sellers/25.webp';
import img26 from '@assets/sellers/26.webp';
import img27 from '@assets/sellers/27.webp';
import img28 from '@assets/sellers/28.webp';
import img29 from '@assets/sellers/29.webp';
import img30 from '@assets/sellers/30.webp';
import img31 from '@assets/sellers/31.webp';
import img32 from '@assets/sellers/32.webp';
import img33 from '@assets/sellers/33.webp';
import img34 from '@assets/sellers/34.webp';
import img35 from '@assets/sellers/35.webp';
import img36 from '@assets/sellers/36.webp';

const sellers = [
    {
        id: 'seller-1',
        logo: img1,
        name: 'Albo E-Store',
        website: 'https://1.envato.market/tf-merkulove',
        address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
        phone: faker.phone.number('+1(###) ###-####'),
        email: 'albo@email.com',
        rating: 3.5,
        profit: {
            electronics: 256340,
            fashion: 2520,
            food: 12100,
            services: 5000
        },
        sales: 45741,
    },
    {
        id: 'seller-2',
        logo: img2,
        name: 'Asasio',
        website: 'https://1.envato.market/tf-merkulove',
        address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
        phone: faker.phone.number('+1(###) ###-####'),
        email: 'asasio_store@email.com',
        rating: 5,
        profit: {
            electronics: 4874,
            fashion: 5874,
            food: 100547,
            services: 105
        },
        sales: 59874
    },
    {
        id: 'seller-3',
        logo: img3,
        name: 'Ecom',
        website: 'https://1.envato.market/tf-merkulove',
        address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
        phone: faker.phone.number('+1(###) ###-####'),
        email: 'emailalbo_store@email.com',
        rating: 4,
        profit: {
            electronics: 10547,
            fashion: 40877,
            food: 36954,
            services: 487
        },
        sales: 100574
    },
    {
        id: 'seller-4',
        logo: img4,
        name: 'Delight',
        website: 'https://1.envato.market/tf-merkulove',
        address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
        phone: faker.phone.number('+1(###) ###-####'),
        email: 'emailalbo_store@email.com',
        rating: 5,
        mainCategory: 'electronics',
        profit: {
            electronics: 10784,
            fashion: 5412,
            food: 12547,
            services: 99840
        },
        sales: 4545484
    },
    {
        id: 'seller-5',
        logo: img5,
        name: 'Data Foundry',
        website: 'https://1.envato.market/tf-merkulove',
        address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
        phone: faker.phone.number('+1(###) ###-####'),
        email: 'emailalbo_store@email.com',
        rating: 2.5,
        profit: {
            electronics: 6340,
            fashion: 2520,
            food: 12100,
            services: 5000
        },
        sales: 365844
    },
    {
        id: 'seller-6',
        logo: img6,
        name: 'AV Solutions',
        website: 'https://1.envato.market/tf-merkulove',
        address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
        phone: faker.phone.number('+1(###) ###-####'),
        email: 'emailalbo_store@email.com',
        rating: 4.5,
        profit: {
            electronics: 6340,
            fashion: 2520,
            food: 12100,
            services: 5000
        },
        sales: 69884
    },
    {
        id: 'seller-7',
        logo: img7,
        name: 'Whale',
        website: 'https://1.envato.market/tf-merkulove',
        address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
        phone: faker.phone.number('+1(###) ###-####'),
        email: 'emailalbo_store@email.com',
        rating: 3,
        profit: {
            electronics: 6340,
            fashion: 2520,
            food: 12100,
            services: 5000
        },
        sales: 365844
    },
    {
        id: 'seller-8',
        logo: img8,
        name: 'Wood Cabins',
        website: 'https://1.envato.market/tf-merkulove',
        address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
        phone: faker.phone.number('+1(###) ###-####'),
        email: 'emailalbo_store@email.com',
        rating: 3,
        profit: {
            electronics: 6340,
            fashion: 2520,
            food: 12100,
            services: 5000
        },
        sales: 5848412
    },
    {
        id: 'seller-9',
        logo: img9,
        name: 'Academy',
        website: 'https://1.envato.market/tf-merkulove',
        address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
        phone: faker.phone.number('+1(###) ###-####'),
        email: 'emailalbo_store@email.com',
        rating: 3,
        profit: {
            electronics: 6340,
            fashion: 2520,
            food: 12100,
            services: 5000
        },
        sales: 369874
    },
    {
        id: 'seller-10',
        logo: img10,
        name: 'Liu & Jo',
        website: 'https://1.envato.market/tf-merkulove',
        address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
        phone: faker.phone.number('+1(###) ###-####'),
        email: 'emailalbo_store@email.com',
        rating: 3,
        profit: {
            electronics: 6340,
            fashion: 2520,
            food: 12100,
            services: 5000
        },
        sales: 5848412
    },
    {
        id: 'seller-11',
        logo: img11,
        name: 'Oakley Store',
        website: 'https://1.envato.market/tf-merkulove',
        address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
        phone: faker.phone.number('+1(###) ###-####'),
        email: 'emailalbo_store@email.com',
        rating: 3,
        profit: {
            electronics: 6340,
            fashion: 2520,
            food: 12100,
            services: 5000
        },
        sales: 58410
    },
    {
        id: 'seller-12',
        logo: img12,
        name: 'Dakine LCC',
        website: 'https://1.envato.market/tf-merkulove',
        address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
        phone: faker.phone.number('+1(###) ###-####'),
        email: 'emailalbo_store@email.com',
        rating: 3,
        profit: {
            electronics: 6340,
            fashion: 2520,
            food: 12100,
            services: 5000
        },
        sales: 802
    },
    {
        id: 'seller-13',
        logo: img13,
        name: 'TigerTool',
        website: 'https://1.envato.market/tf-merkulove',
        address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
        phone: faker.phone.number('+1(###) ###-####'),
        email: 'emailalbo_store@email.com',
        rating: 3,
        profit: {
            electronics: 6340,
            fashion: 2520,
            food: 12100,
            services: 5000
        },
        sales: 2404
    },
    {
        id: 'seller-14',
        logo: img14,
        name: 'Public Trendy',
        website: 'https://1.envato.market/tf-merkulove',
        address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
        phone: faker.phone.number('+1(###) ###-####'),
        email: 'emailalbo_store@email.com',
        rating: 3,
        profit: {
            electronics: 6340,
            fashion: 2520,
            food: 12100,
            services: 5000
        },
        sales: 90084
    },
    {
        id: 'seller-15',
        logo: img15,
        name: 'Market Reveal',
        website: 'https://1.envato.market/tf-merkulove',
        address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
        phone: faker.phone.number('+1(###) ###-####'),
        email: 'emailalbo_store@email.com',
        rating: 3,
        profit: {
            electronics: 6340,
            fashion: 2520,
            food: 12100,
            services: 5000
        },
        sales: 487512
    },
    {
        id: 'seller-16',
        logo: img16,
        name: 'Workplace Solutions',
        website: 'https://1.envato.market/tf-merkulove',
        address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
        phone: faker.phone.number('+1(###) ###-####'),
        email: 'emailalbo_store@email.com',
        rating: 3,
        profit: {
            electronics: 6340,
            fashion: 2520,
            food: 12100,
            services: 5000
        },
        sales: 90887
    },
    {
        id: 'seller-17',
        logo: img17,
        name: 'Arca Solutions, Inc.',
        website: 'https://1.envato.market/tf-merkulove',
        address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
        phone: faker.phone.number('+1(###) ###-####'),
        email: 'emailalbo_store@email.com',
        rating: 3,
        profit: {
            electronics: 6340,
            fashion: 2520,
            food: 12100,
            services: 5000
        },
        sales: 56848441
    },
    {
        id: 'seller-18',
        logo: img18,
        name: 'SC Project',
        website: 'https://1.envato.market/tf-merkulove',
        address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
        phone: faker.phone.number('+1(###) ###-####'),
        email: 'emailalbo_store@email.com',
        rating: 3,
        profit: {
            electronics: 6340,
            fashion: 2520,
            food: 12100,
            services: 5000
        },
        sales: 36955
    },
    {
        id: 'seller-19',
        logo: img19,
        name: 'Diriag Foods',
        website: 'https://1.envato.market/tf-merkulove',
        address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
        phone: faker.phone.number('+1(###) ###-####'),
        email: 'emailalbo_store@email.com',
        rating: 3,
        profit: {
            electronics: 6340,
            fashion: 2520,
            food: 12100,
            services: 5000
        },
        sales: 25454
    },
    {
        id: 'seller-20',
        logo: img20,
        name: 'SmartFoods LCC',
        website: 'https://1.envato.market/tf-merkulove',
        address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
        phone: faker.phone.number('+1(###) ###-####'),
        email: 'emailalbo_store@email.com',
        rating: 3,
        profit: {
            electronics: 6340,
            fashion: 2520,
            food: 12100,
            services: 5000
        },
        sales: 60887
    },
    {
        id: 'seller-21',
        logo: img21,
        name: 'Midimd Electronics',
        website: 'https://1.envato.market/tf-merkulove',
        address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
        phone: faker.phone.number('+1(###) ###-####'),
        email: 'emailalbo_store@email.com',
        rating: 3,
        profit: {
            electronics: 6340,
            fashion: 2520,
            food: 12100,
            services: 5000
        },
        sales: 978
    },
    {
        id: 'seller-22',
        logo: img22,
        name: 'Fanellini Fashion',
        website: 'https://1.envato.market/tf-merkulove',
        address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
        phone: faker.phone.number('+1(###) ###-####'),
        email: 'emailalbo_store@email.com',
        rating: 3,
        profit: {
            electronics: 6340,
            fashion: 2520,
            food: 12100,
            services: 5000
        },
        sales: 69558
    },
    {
        id: 'seller-23',
        logo: img23,
        name: 'Minerva Professional',
        website: 'https://1.envato.market/tf-merkulove',
        address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
        phone: faker.phone.number('+1(###) ###-####'),
        email: 'emailalbo_store@email.com',
        rating: 3,
        profit: {
            electronics: 6340,
            fashion: 2520,
            food: 12100,
            services: 5000
        },
        sales: 30065
    },
    {
        id: 'seller-24',
        logo: img24,
        name: 'Cancon Industries, Inc.',
        website: 'https://1.envato.market/tf-merkulove',
        address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
        phone: faker.phone.number('+1(###) ###-####'),
        email: 'emailalbo_store@email.com',
        rating: 3,
        profit: {
            electronics: 6340,
            fashion: 2520,
            food: 12100,
            services: 5000
        },
        sales: 21015
    },
    {
        id: 'seller-25',
        logo: img25,
        name: 'Wonder Trade',
        website: 'https://1.envato.market/tf-merkulove',
        address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
        phone: faker.phone.number('+1(###) ###-####'),
        email: 'emailalbo_store@email.com',
        rating: 3,
        profit: {
            electronics: 6340,
            fashion: 2520,
            food: 12100,
            services: 5000
        },
        sales: 10000
    },
    {
        id: 'seller-26',
        logo: img26,
        name: 'Imagination, Inc.',
        website: 'https://1.envato.market/tf-merkulove',
        address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
        phone: faker.phone.number('+1(###) ###-####'),
        email: 'emailalbo_store@email.com',
        rating: 3,
        profit: {
            electronics: 6340,
            fashion: 2520,
            food: 12100,
            services: 5000
        },
        sales: 5000
    },
    {
        id: 'seller-27',
        logo: img27,
        name: 'Rinni Candle Co.',
        website: 'https://1.envato.market/tf-merkulove',
        address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
        phone: faker.phone.number('+1(###) ###-####'),
        email: 'emailalbo_store@email.com',
        rating: 3,
        profit: {
            electronics: 6340,
            fashion: 2520,
            food: 12100,
            services: 5000
        },
        sales: 1000
    },
    {
        id: 'seller-28',
        logo: img28,
        name: 'Seluid Foods Trade',
        website: 'https://1.envato.market/tf-merkulove',
        address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
        phone: faker.phone.number('+1(###) ###-####'),
        email: 'emailalbo_store@email.com',
        rating: 3,
        profit: {
            electronics: 6340,
            fashion: 2520,
            food: 12100,
            services: 5000
        },
        sales: 100258
    },
    {
        id: 'seller-29',
        logo: img29,
        name: 'Agro Irilee, Inc.',
        website: 'https://1.envato.market/tf-merkulove',
        address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
        phone: faker.phone.number('+1(###) ###-####'),
        email: 'emailalbo_store@email.com',
        rating: 3,
        profit: {
            electronics: 6340,
            fashion: 2520,
            food: 12100,
            services: 5000
        },
        sales: 1548
    },
    {
        id: 'seller-30',
        logo: img30,
        name: 'Agro Tech, Inc.',
        website: 'https://1.envato.market/tf-merkulove',
        address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
        phone: faker.phone.number('+1(###) ###-####'),
        email: 'emailalbo_store@email.com',
        rating: 3,
        profit: {
            electronics: 6340,
            fashion: 2520,
            food: 12100,
            services: 5000
        },
        sales: 2905
    },
    {
        id: 'seller-31',
        logo: img31,
        name: 'Sorelli',
        website: 'https://1.envato.market/tf-merkulove',
        address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
        phone: faker.phone.number('+1(###) ###-####'),
        email: 'emailalbo_store@email.com',
        rating: 3,
        profit: {
            electronics: 6340,
            fashion: 2520,
            food: 12100,
            services: 5000
        },
        sales: 3665
    },
    {
        id: 'seller-32',
        logo: img32,
        name: 'Doneriald Aquatech, Inc.',
        website: 'https://1.envato.market/tf-merkulove',
        address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
        phone: faker.phone.number('+1(###) ###-####'),
        email: 'emailalbo_store@email.com',
        rating: 3,
        profit: {
            electronics: 6340,
            fashion: 2520,
            food: 12100,
            services: 5000
        },
        sales: 999
    },
    {
        id: 'seller-33',
        logo: img33,
        name: 'Hioh Tech, Inc.',
        website: 'https://1.envato.market/tf-merkulove',
        address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
        phone: faker.phone.number('+1(###) ###-####'),
        email: 'emailalbo_store@email.com',
        rating: 3,
        profit: {
            electronics: 6340,
            fashion: 2520,
            food: 12100,
            services: 5000
        },
        sales: 6958
    },
    {
        id: 'seller-34',
        logo: img34,
        name: 'Marco Industries',
        website: 'https://1.envato.market/tf-merkulove',
        address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
        phone: faker.phone.number('+1(###) ###-####'),
        email: 'emailalbo_store@email.com',
        rating: 3,
        profit: {
            electronics: 6340,
            fashion: 2520,
            food: 12100,
            services: 5000
        },
        sales: 69877
    },
    {
        id: 'seller-35',
        logo: img35,
        name: 'Tesco Trader',
        website: 'https://1.envato.market/tf-merkulove',
        address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
        phone: faker.phone.number('+1(###) ###-####'),
        email: 'emailalbo_store@email.com',
        rating: 3,
        profit: {
            electronics: 6340,
            fashion: 2520,
            food: 12100,
            services: 5000
        },
        sales: 58841
    },
    {
        id: 'seller-36',
        logo: img36,
        name: 'Mintesso',
        website: 'https://1.envato.market/tf-merkulove',
        address: '53 West Cherry Hill Lane Murfreesboro, TN 37128',
        phone: faker.phone.number('+1(###) ###-####'),
        email: 'emailalbo_store@email.com',
        rating: 3,
        profit: {
            electronics: 6340,
            fashion: 2520,
            food: 12100,
            services: 5000
        },
        sales: 99
    }
]

export default sellers