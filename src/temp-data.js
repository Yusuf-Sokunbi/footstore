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
// import CrossSlippers from './FOOTIMAGE/Palm/cross_slippers.jpeg';

export const cartItems = [
// {
//     id: '123',
//     name: 'Basil',
//     price: 20000.00,
//     imageName: basilBottle,
//     quantity:1,
//     color: 'Green',
//     size: '40',
// }, 
// {
//     id: '234',
//     name: 'Lemon',
//     price: 20000.00,
//     imageName: lemonBottle,
//     quantity:1,
//     color:"black",
//     size: '40',
// }, 
// {
//     id: '345',
//     name: 'Garlic',
//     price: 20000.00,
//     imageName: garlicBottle,
//     quantity:1,
//     color:"black"
// }
];

export const products = [{
    id: "123",
    _id:1,
    name: 'Basil',
    price: 28000.00,
   imageName:require("./FOOTIMAGE/Shoe/shoelaceblack.jpg"),
    category:'Sandal',
    color: 'Brown',
    size: '40',
    sizes: [ 
							{id:1, size:'38',price:20000},
							{id:2, size:'39',price:22000}, 
							{id:3, size:'40',price:24000}, 
							{id:4, size:'41',price:26000}, 
							{id:5, size:'42',price:28000},
              {id:6, size:'43',price:30000},
              {id:7, size:'44',price:32000},
              {id:8, size:'45',price:34000},
           ],
     colors:[{ id:1,
                      name:'black',
                       title:'Basil1',
                       image:require("./FOOTIMAGE/Shoe/shoelaceblack.jpg"),
                        price:28000
                    },
                    { id:2,
                      name:'Brown',
                      title:'Basil2',
                      image:require("./FOOTIMAGE/Shoe/brownlace.jpg"),
                       price:25000
                    },
                    { id:3,
                      name:'Blue',
                      title:'Basil3',
                     image:require("./FOOTIMAGE/Shoe/shoelaceblue.jpg"),
                      price:22000
                    },
                   ],
}, {
    id: "234",
    _id:2,
    name: 'Lemon',
    price: 20000.00,
    imageName: lemonBottle,
    category:'Sandal',
    size: '42',
		sizes:[ 
							{id:1, size:'38',price:20000},
							{id:2, size:'39',price:22000}, 
							{id:3, size:'40',price:24000}, 
							{id:4, size:'41',price:26000}, 
							{id:5, size:'42',price:28000},
              {id:6, size:'43',price:30000},
              {id:7, size:'44',price:32000},
              {id:8, size:'45',price:34000},
           ],
		color:'Brown',
    colors:[{ id:1,
                      name:'Brown',
                       title:'Lemon1',
                       image:lemonBottle,
                      price:22000
                    },
                    { id:2,
                      name:'Black',
                      title:'Lemon2',
                      image:garlicBottle,
                      price:25000
                    },
                    { id:3,
                      name:'White',
                      title:'Lemon3',
                     image:basilBottle,
                     price:28000
                    },
                   ],
}, {
    id: "345",
    _id:3,
    name: 'Garlic',
    price: 20000.00,
    imageName: garlicBottle,
    category:'Sandal',
    size: '43',
		sizes: [ 
							{id:1, size:'38',price:20000},
							{id:2, size:'39',price:22000}, 
							{id:3, size:'40',price:24000}, 
							{id:4, size:'41',price:26000}, 
							{id:5, size:'42',price:28000},
              {id:6, size:'43',price:30000},
              {id:7, size:'44',price:32000},
              {id:8, size:'45',price:34000},
           ],
		color: 'Black',
    colors:[{ id:1,
                      name:'black',
                      title:'Garlic1',
                      image:garlicBottle,
                       price:25000
                    },
                    { id:2,
                      name:'Brown',
                      title:'Garlic1',
                      image:lemonBottle,
                       price:22000
                    },
                    { id:3,
                      name:'White',
                      title:'Garlic1',
                      image:basilBottle,
                       price:28000
                    },
                   ],
}, {
    id: "456",
    _id:4,
    name: 'Rosemary',
    price: 20000.00,
    imageName: rosemaryBottle,
    category:'Sandal',
   size: '40 ',
		sizes: [ 
							{id:1, size:'38',price:20000},
							{id:2, size:'39',price:22000}, 
							{id:3, size:'40',price:24000}, 
							{id:4, size:'41',price:26000}, 
							{id:5, size:'42',price:28000},
              {id:6, size:'43',price:30000},
              {id:7, size:'44',price:32000},
              {id:8, size:'45',price:34000},
           ],
		color:'Brown',
    colors:[{ id:1,
                      name:'black',
                      title:'Garlic1',
                      image:garlicBottle,
                       price:25000
                    },
                    { id:2,
                      name:'Brown',
                      title:'Garlic1',
                      image:lemonBottle,
                       price:22000
                    },
                    { id:3,
                      name:'White',
                      title:'Garlic1',
                      image:basilBottle,
                       price:28000
                    },
                   ],
}, {
    id: "567",
    _id:5,
    name: 'Chili',
    price: 20000.00,
    imageName: chiliBottle,
    category:'Sandal',
    size: '43',
    color: 'black',
}, {
    id: "678",
    _id:6,
    name: 'Delicate',
    price: 35000.00,
    imageName: delicateBottle,
    category:'Shoe',
    size: '38',
    color: 'black',
}, {
    id: "789",
    _id:7,
    name: 'Medium',
    price: 40000.00,
    imageName: mediumBottle,
    category:'Shoe',
    size: '38',
    color:'White',
      colors:[{ id:1,
                      name:'black',
                      title:'Medium',
                      image:require("./FOOTIMAGE/Shoe/blackhanqu.jpg"),
                       price:45000
                    },
                    { id:2,
                      name:'Brown',
                      title:'Medium',
                      image:require("./FOOTIMAGE/Shoe/brownsuwadi.jpg"),
                      price:32000
                    },
                    { id:3,
                      name:'White',
                      title:'Medium',
                      image:mediumBottle,
                      price:40000
                    },
                   ],
}, {
    id: "890",
    _id:8,
    name: 'Bold',
    price: 35000.00,
    imageName: boldBottle,
    category:'Shoe',
    size: '41',
		sizes: [ 
							{id:1, size:'38',price:28000},
							{id:2, size:'39',price:30000}, 
							{id:3, size:'40',price:33000}, 
							{id:4, size:'41',price:35000}, 
							{id:5, size:'42',price:45000}
           ],
    color: 'Black',
},
 {
    id: "100",
    _id:9,
    name: 'LouisVitun',
    price: 30000.00,
    imageName: LouisVitun,
    category:'Halfshoe',
    size: '41',
    color: 'Brown'
}, {
    id: "101",
    _id:10,
    name: 'ShoeBottle',
    price: 35000.00,
    imageName: ShoeBottle,
    category:'Shoe',
    size: '40',
    color: 'brown',
}, {
    id: "102",
    _id:11,
    name: 'LouisVitunWhite',
    price: 30000.00,
    imageName: LouisVitunWhite,
    category:'Halfshoe',
    size: '43',
    color: 'White'
}, {
    id: "103",
    _id:12,
    name: 'Bold',
    price: 35000.00,
    imageName: boldBottle,
    category:'Shoe',
    size: '42',
    color: 'Black',
},
{
    id: "104",
    _id:13,
    name: 'CrossSlippers',
    price: 18000.00,
    imageName: CrossSlippers,
    category:'Palm',
    size: '40',
    color: 'Black',

},
];

 export const shoes = products.filter(product => product.category === 'Shoe')
 export const sandals = products.filter(product => product.category === 'Sandal')
 export const halfshoes = products.filter(product => product.category === 'Halfshoe')
 export const palms = products.filter(product => product.category === 'Palm')
 export const blacks = products.filter(product => product.color ==='Black')
 export const browns = products.filter(product => product.color ==='Brown')
 export const whites = products.filter(product => product.color === 'White')
 export const others = products.filter(product => product.color === 'other')

