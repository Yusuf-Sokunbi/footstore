import basilBottle from './FOOTIMAGE/Sander/IMG-20250902-WA0035.jpg';
import lemonBottle from './FOOTIMAGE/Sander/IMG_1103.jpg';
import garlicBottle from './FOOTIMAGE/Sander/IMG-20250902-WA0034.jpg';
import rosemaryBottle from './FOOTIMAGE/Sander/IMG-20250902-WA0032.jpg';
import chiliBottle from './FOOTIMAGE/Sander/IMG-20250902-WA0037.jpg';
import delicateBottle from './FOOTIMAGE/Shoe/IMG_0852.jpg';
import mediumBottle from './FOOTIMAGE/Shoe/IMG_0853.jpg';
import boldBottle from './FOOTIMAGE/Shoe/whitesole.jpg';
import ShoeBottle from './FOOTIMAGE/Shoe/IMG_0507.jpg';
import LouisVitun from './FOOTIMAGE/Half_shoe/IMG_1017.jpg';
import LouisVitunWhite from './FOOTIMAGE/Half_shoe/IMG_1018.jpg';
import CrossSlippers from './FOOTIMAGE/Palm/cross_slippers.jpeg';

export const cartItems = [{
    id: '123',
    name: 'Basil',
    price: '$26.00',
    imageName: basilBottle,
    quantity:1
}, {
    id: '234',
    name: 'Lemon',
    price: '$26.00',
    imageName: lemonBottle,
    quantity:1
}, {
    id: '345',
    name: 'Garlic',
    price: '$26.00',
    imageName: garlicBottle,
    quantity:1
}];

export const products = [{
    id: 1,
    name: 'Basil',
    price: '$26.00',
    imageName: basilBottle,
    category:'Sandal',
    size: ['38','39','40','41','42'],
    color: ['Black','White','Brown']
}, {
    id: 2,
    name: 'Lemon',
    price: '$26.00',
    imageName: lemonBottle,
    category:'Sandal',
    size: ['38','39','40','43','45'],
    color: ['Black','other','Brown']
}, {
    id: 3,
    name: 'Garlic',
    price: '$26.00',
    imageName: garlicBottle,
    category:'Sandal',
    size: ['38','39','40','42','44'],
    color: ['Black','Brown']
}, {
    id: 4,
    name: 'Rosemary',
    price: '$26.00',
    imageName: rosemaryBottle,
    category:'Sandal',
    size: ['40','41','42'],
    color: ['Black','White','Brown']
}, {
    id: 5,
    name: 'Chili',
    price: '$26.00',
    imageName: chiliBottle,
    category:'Sandal',
    size: ['38','39','40','42'],
    color: ['Black','White','Brown']
}, {
    id: 6,
    name: 'Delicate',
    price: '$24.50',
    imageName: delicateBottle,
    category:'Shoe',
    size: ['38','39','40','41','42'],
    color: ['Brown']
}, {
    id: 7,
    name: 'Medium',
    price: '$24.50',
    imageName: mediumBottle,
    category:'Shoe',
    size: ['38','39','40','41','42'],
    color: ['Black','White','Brown']
}, {
    id: 8,
    name: 'Bold',
    price: '$24.50',
    imageName: boldBottle,
    category:'Shoe',
    size: ['38','40','41','42'],
    color: ['Black','White','Brown']
},
 {
    id: 10,
    name: 'LouisVitun',
    price: '$24.50',
    imageName: LouisVitun,
    category:'Halfshoe',
    size: ['38','39','40','41','42'],
    color: ['Black','White','Brown']
}, {
    id: 11,
    name: 'ShoeBottle',
    price: '$24.50',
    imageName: ShoeBottle,
    category:'Shoe',
    size: ['38','39','40','41','42'],
    color: ['Black','White','Brown']
}, {
    id: 12,
    name: 'LouisVitunWhite',
    price: '$24.50',
    imageName: LouisVitunWhite,
    category:'Halfshoe',
    size: ['40','41','42','43','44'],
    color: ['Black','White','Brown']
}, {
    id: 13,
    name: 'Bold',
    price: '$24.50',
    imageName: boldBottle,
    category:'Shoe',
    size: ['38','39','40','41','42'],
    color: ['Black','Brown']
},
{
    id: 14,
    name: 'CrossSlippers',
    price: '$24.50',
    imageName: CrossSlippers,
    category:'Palm',
    size: ['38','39','40','41','42'],
    color: ['Black','White','Brown']

},
];

 export const shoes = products.filter(product => product.category === 'Shoe')
 export const sandals = products.filter(product => product.category === 'Sandal')
 export const halfshoes = products.filter(product => product.category === 'Halfshoe')
 export const palms = products.filter(product => product.category === 'Palm')
 export const blacks = products.filter(product => product.color['Black'] === 'Black')

