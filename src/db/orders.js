import img1 from '@assets/products/electronics/1.webp';
import img2 from '@assets/products/fashion/1.webp';
import img3 from '@assets/products/electronics/3.webp';
import img4 from '@assets/products/services/1.webp';
import img5 from '@assets/products/fashion/12.webp';
import img6 from '@assets/products/food/11.webp';
import img7 from '@assets/products/food/16.webp';
import img8 from '@assets/products/fashion/9.webp';
import img9 from '@assets/products/services/3.webp';
import img10 from '@assets/products/electronics/11.webp';

const orders = [
    {
        orderNumber: 123456,
        sku: '123456FR',
        status: 'completed',
        rating: 3.5,
        category: 'electronics',
        payment: {
            amount: 600,
            received: 600,
        },
        product: {
            name: 'Oculus Quest 2 VR Headset 64 GB',
            image: img1,
            regular_price: 600,
            sale_price: 559,
        }
    },
    {
        orderNumber: 154844,
        sku: '598741FR',
        status: 'confirmed',
        rating: 4.5,
        category: 'fashion',
        payment: {
            amount: 4000,
            received: 180,
        },
        product: {
            name: 'Levis Standard Issue Backpack Black',
            image: img2,
            regular_price: 100,
        }
    },
    {
        orderNumber: 202587,
        sku: '485912TY',
        status: 'cancelled',
        rating: 4.5,
        category: 'electronics',
        payment: {
            amount: 200,
            received: 0,
        },
        product: {
            name: 'Xiaomi WiFI Repeater Pro',
            image: img3,
            regular_price: 200,
            sale_price: 180,
        }
    },
    {
        orderNumber: 300411,
        sku: '365487RT',
        status: 'confirmed',
        rating: 4.5,
        category: 'services',
        payment: {
            amount: 9.99,
            received: 9.99,
        },
        product: {
            name: 'UPS Express Shipping',
            image: img4,
            regular_price: 9.99,
        }
    },
    {
        orderNumber: 785241,
        sku: '002315ES',
        status: 'confirmed',
        rating: 4.5,
        category: 'fashion',
        payment: {
            amount: 40,
            received: 40,
        },
        product: {
            name: 'Parfois Woman Flower Backpack',
            image: img5,
            regular_price: 20,
            sale_price: 15.99
        }
    },
    {
        orderNumber: 458745,
        sku: '541125FR',
        status: 'completed',
        rating: 0,
        category: 'food',
        payment: {
            amount: 129.54,
            received: 129.54,
        },
        product: {
            name: 'Goodwill Sanctuary Sanca Olive Oil 5L',
            image: img6,
            regular_price: 129.54,
        }
    },
    {
        orderNumber: 105488,
        sku: '252596FR',
        status: 'confirmed',
        rating: 5,
        category: 'food',
        payment: {
            amount: 78.99,
            received: 52.18,
        },
        product: {
            name: 'Guylian Seashells Belgian Chocolate 1kg',
            image: img7,
            regular_price: 78.99,
            sale_price: 69.99
        }
    },
    {
        orderNumber: 900541,
        sku: '002315BN',
        status: 'cancelled',
        rating: 0,
        category: 'fashion',
        payment: {
            amount: 118.99,
            received: 0,
        },
        product: {
            name: 'Puma Crossbody Bag Black Unisex',
            image: img8,
            regular_price: 118.99,
            sale_price: 99.99
        }
    },
    {
        orderNumber: 121844,
        sku: '814315LP',
        status: 'refunded',
        rating: 0,
        category: 'services',
        payment: {
            amount: 9.99,
            received: 0,
        },
        product: {
            name: 'Sustainable packaging services for 1 item',
            image: img9,
            regular_price: 9.99,
        }
    },
    {
        orderNumber: 240412,
        sku: '361087RT',
        status: 'completed',
        rating: 4.5,
        category: 'electronics',
        payment: {
            amount: 200,
            received: 200,
        },
        product: {
            name: 'SteamDeck Gaming Console 64 GB',
            image: img10,
            regular_price: 200,
            sale_price: 180,
        }
    }
]

export default orders