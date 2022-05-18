import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Danilo',
      email: 'danilosh45@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Dan',
      email: 'danilosh45@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },

  ],

  products: [
    {
      //_id: '1',
      name: 'Wine 2640',
      slug: 'wine-26540',
      category: 'Red Wine',
      image: '/images/wine1.jpg',
      price: 120,
      countInStock: 10,
      brand: 'chapeuwine',
      rating: 4.3,
      numReviews: 5,
      description: 'high quality Wine',
    },
    {
      //_id: '2',
      name: 'Wine ilurce',
      slug: 'wine-ilurce',
      category: 'Rose Wine',
      image: '/images/p2.jpg',
      price: 101,
      countInStock: 0,
      brand: 'chapeuwine',
      rating: 4.4,
      numReviews: 10,
      description: 'high quality Wine',
    },
    {
      // _id: '3',
      name: 'Wine Petit',
      slug: 'wine-petit',
      category: 'Red Wine',
      image: '/images/p3.jpg',
      price: 120,
      countInStock: 10,
      brand: 'chapeuwine',
      rating: 4.3,
      numReviews: 10,
      description: 'high quality Wine',
    },
    {
      // _id: '4',
      name: 'Wine mondeu',
      slug: 'wine-mondeu',
      category: 'Red Wine',
      image: '/images/p4.jpg',
      price: 120,
      countInStock: 20,
      brand: 'chapeuwine',
      rating: 4.3,
      numReviews: 10,
      description: 'high quality Wine',
    },
  ],
};

export default data;
