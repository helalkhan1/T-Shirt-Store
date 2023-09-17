import black from "../images/products/product-001-b.jpg";
import orange from "../images/products/product-01-c.jpg";
import white from "../images/products/product-01-d.jpg";
import product1 from '../images/products/product-01-a.jpg';
import product2 from "../images/products/product-02-a.jpg";
import product3 from '../images/products/product-03-a.jpg';
import product4 from "../images/products/product-04-a.jpg";
import product5 from "../images/products/product-05-a.jpg";
import product6 from "../images/products/product-06-a.jpg";
import product7 from '../images/products/product-07-a.jpg';
import product8 from "../images/products/product-08-a.jpg";
import product9 from "../images/products/product-09-a.jpg";
import product10 from "../images/products/product-10-a.jpg";


const data = [

    {
        image1: product2,
        image2: { color: "White",  imgsrc: white,  S_stock:9, M_stock:3, L_stock:6, XL_stock:3, XXL_stock:2 },
        image3: { color: "Black",  imgsrc: black,  S_stock:9, M_stock:3, L_stock:6, XL_stock:3, XXL_stock:2 },
        image4: { color: "Orange", imgsrc: orange, S_stock:9, M_stock:3, L_stock:6, XL_stock:3, XXL_stock:2 },
        productName: "T-Shirt Name 2",
        category: "Men",
        price: 18,
        stars: 4.5,
        reviews: 35,
    },

    {
        image1: product1,
        image2: { color: "Black",  imgsrc: black,  S_stock:0, M_stock:2, L_stock:4, XL_stock:5, XXL_stock:1 },
        image3: { color: "Orange", imgsrc: orange, S_stock:1, M_stock:5, L_stock:2, XL_stock:8, XXL_stock:4 },
        image4: { color: "White",  imgsrc: white,  S_stock:9, M_stock:3, L_stock:6, XL_stock:3, XXL_stock:2 },
        productName: "T-Shirt Name 1",
        category: "Women",
        price: 12.50,
        stars: 4,
        reviews: 15,
    },

    {
        image1: product3,
        image2: { color: "Orange", imgsrc: orange, S_stock:9, M_stock:3, L_stock:6, XL_stock:3, XXL_stock:2 },
        image3: { color: "White",  imgsrc: white,  S_stock:9, M_stock:3, L_stock:6, XL_stock:3, XXL_stock:2 },
        image4: { color: "Black",  imgsrc: black,  S_stock:9, M_stock:3, L_stock:6, XL_stock:3, XXL_stock:2 },
        productName: "T-Shirt Name 3",
        category: "Men",
        price: 15,
        stars: 3.5,
        reviews: 6,
    },

    {
        image1: product4,
        image2: { color: "White",  imgsrc: white,  S_stock:9, M_stock:3, L_stock:6, XL_stock:3, XXL_stock:2  },
        image3: { color: "Black",  imgsrc: black,  S_stock:9, M_stock:3, L_stock:6, XL_stock:3, XXL_stock:2  },
        image4: { color: "Orange", imgsrc: orange, S_stock:9, M_stock:3, L_stock:6, XL_stock:3, XXL_stock:2  },
        productName: "T-Shirt Name 4",
        category: "Women",
        price: 15,
        stars: 0,
        reviews: 0,
    },

    {
        image1: product5,
        image2: { color: "Black",  imgsrc: black,  S_stock:9, M_stock:3, L_stock:6, XL_stock:3, XXL_stock:2 },
        image3: { color: "Orange", imgsrc: orange, S_stock:6, M_stock:3, L_stock:6, XL_stock:3, XXL_stock:2 },
        image4: { color: "White",  imgsrc: white,  S_stock:4, M_stock:3, L_stock:6, XL_stock:3, XXL_stock:2 },
        productName: "T-Shirt Name 5",
        category: "Men",
        price: 15,
        stars: 4,
        reviews: 30,
    },

    {
        image1: product6,
        image2: { color: "White",  imgsrc: white,  S_stock:9, M_stock:3, L_stock:6, XL_stock:3, XXL_stock:2 },
        image3: { color: "Black",  imgsrc: black,  S_stock:9, M_stock:3, L_stock:6, XL_stock:3, XXL_stock:2 },
        image4: { color: "Orange", imgsrc: orange, S_stock:9, M_stock:3, L_stock:6, XL_stock:3, XXL_stock:2 },
        productName: "T-Shirt Name 6",
        category: "Women",
        price: 15,
        stars: 5,
        reviews: 3,
    },

    {
        image1: product7,
        image2: { color: "Black",  imgsrc: black,  S_stock:9, M_stock:3, L_stock:6, XL_stock:3, XXL_stock:2  },
        image3: { color: "Orange", imgsrc: orange, S_stock:9, M_stock:3, L_stock:6, XL_stock:3, XXL_stock:2  },
        image4: { color: "White",  imgsrc: white,  S_stock:9, M_stock:3, L_stock:6, XL_stock:3, XXL_stock:2  },
        productName: "T-Shirt Name 7",
        category: "Women",
        price: 15,
        stars: 0,
        reviews: 0,
    },

    {
        image1: product10,
        image2: { color: "White",  imgsrc: white,  S_stock:9, M_stock:3, L_stock:6, XL_stock:3, XXL_stock:2  },
        image3: { color: "Black",  imgsrc: black,  S_stock:9, M_stock:3, L_stock:6, XL_stock:3, XXL_stock:2  },
        image4: { color: "Orange", imgsrc: orange, S_stock:9, M_stock:3, L_stock:6, XL_stock:3, XXL_stock:2  },
        productName: "T-Shirt Name 10",
        category: "Men",
        price: 15,
        stars: 0,
        reviews: 0,
    },

    {
        image1: product8,
        image2: { color: "Black",  imgsrc: black,  S_stock:9, M_stock:3, L_stock:6, XL_stock:3, XXL_stock:2 },
        image3: { color: "Orange", imgsrc: orange, S_stock:6, M_stock:3, L_stock:6, XL_stock:3, XXL_stock:2 },
        image4: { color: "White",  imgsrc: white,  S_stock:4, M_stock:3, L_stock:6, XL_stock:3, XXL_stock:2 },
        productName: "T-Shirt Name 8",
        category: "Women",
        price: 15,
        stars: 4,
        reviews: 30,
    },

    {
        image1: product9,
        image2: { color: "White",  imgsrc: white,  S_stock:9, M_stock:3, L_stock:6, XL_stock:3, XXL_stock:2  },
        image3: { color: "Black",  imgsrc: black,  S_stock:9, M_stock:3, L_stock:6, XL_stock:3, XXL_stock:2  },
        image4: { color: "Orange", imgsrc: orange, S_stock:9, M_stock:3, L_stock:6, XL_stock:3, XXL_stock:2  },
        productName: "T-Shirt Name 9",
        category: "Men",
        price: 15,
        stars: 0,
        reviews: 0,
    },
   
]

export default data;