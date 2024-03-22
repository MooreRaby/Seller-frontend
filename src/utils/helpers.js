import {PRODUCT_CATEGORIES} from '@constants/options';

/**
 *
 * @param arr
 * @param value
 * @returns {number}
 */
export const getPercentage = (arr, value) => {
    const total = arr.reduce((acc, item) => acc + item.value, 0)
    return Math.round((value / total) * 100);
}

export const getTotal = arr => {
    return arr.reduce((acc, item) => acc + item.value, 0);
}

/**
 *
 * @param num - number to be formatted
 * @param fractionDigits - number of digits after the decimal point
 * @param prefix - prefix to be added to the formatted number
 * @returns {*|string}
 */
export const numFormatter = (num, fractionDigits = 0, prefix = '') => {
    const options = {
        minimumFractionDigits: fractionDigits,
        maximumFractionDigits: fractionDigits,
    };

    if (num > 999 && num < 1000000) {
        const formattedNum = (num / 1000).toLocaleString(undefined, options);
        return `${prefix}${formattedNum}k`
    } else if (num > 1000000) {
        const formattedNum = (num / 1000000).toLocaleString(undefined, options);
        return `${prefix}${formattedNum}m`
    } else if (num < 900) {
        return `${prefix}${num}`
    }
};

export const commaFormatter = num => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// grid y-axis or x-axis points generator for recharts
/**
 *
 * @param id - container id
 * @param gutter - grid gutter
 * @param axis - 'x' or 'y'
 * @returns {*[]} - array of grid points
 */
export const generateGridPoints = (id, gutter = 20, axis = 'y') => {
    // const gridWidth = document.getElementById(id).offsetWidth;
    const gridWidth = 1000;
    // const gridHeight = document.getElementById(id).offsetHeight;
    const gridHeight = 400;

    let points = [];
    for (let i = 0; i < (axis === 'y' ? gridWidth : gridHeight); i += gutter) {
        points.push(i);
    }
    return points;
}

export const sortProducts = (products, sort) => {
    switch (sort) {
        default:
        case 'best-selling':
            return products.sort((a, b) => b.sold - a.sold);
        case 'available':
            return products.sort((a, b) => b.in_stock - a.in_stock);
        case 'price-low-to-high':
            return products.sort((a, b) => a.regular_price - b.regular_price);
        case 'price-high-to-low':
            return products.sort((a, b) => b.regular_price - a.regular_price);
    }
}

export const sortSellers = (data, sortOption) => {
    switch (sortOption) {
        case 'best-selling':
            return data.sort((a, b) => b.sales - a.sales);
        case 'rating-high-to-low':
            return data.sort((a, b) => b.rating - a.rating);
        case 'rating-low-to-high':
            return data.sort((a, b) => a.rating - b.rating);
        case 'a-z':
            return data.sort((a, b) => a.name.localeCompare(b.name));
        case 'z-a':
            return data.sort((a, b) => b.name.localeCompare(a.name));
        default:
            return data;
    }
}

export const getCategory = value => {
    return PRODUCT_CATEGORIES.find(category => category.value === value);
}

export const getStatusColor = status => {
    switch (status) {
        default:
        case 'approved':
        case 'completed':
            return 'accent';
        case 'waiting':
        case 'confirmed':
            return 'green';
        case 'cancelled':
            return 'red';
        case 'rejected':
        case 'refunded':
            return 'badge-status-bg';
    }
}