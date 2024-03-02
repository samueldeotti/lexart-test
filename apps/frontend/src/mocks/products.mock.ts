import { ProductsType } from '../types/ProductsType';

const products = [{
  name: 'Xiaomi Redmi 9',
  brand: 'Xiaomi',
  model: 'Redmi 9',
  price: 10000,
  color: 'red',
},
{
  name: 'Xiaomi Redmi 9',
  details: {
    brand: 'Xiaomi',
    model: 'Redmi 9',
    color: 'red',
  },
  price: 10000,
},
{
  name: 'Xiaomi Redmi 9',
  brand: 'Xiaomi',
  model: 'Redmi 9',
  data: [
    {
      price: 10000,
      color: 'red',
    },
    {
      price: 10000,
      color: 'blue',
    },
  ],
},
{
  name: 'Iphone 14 Pro',
  brand: 'Iphone',
  model: '14 Pro',
  data: [
    {
      price: 30000,
      color: 'silver',
    },
    {
      price: 30100,
      color: 'gold',
    },
  ],
},
];

const genericProducts = products.map((
  { name, details, brand, model, color, price, data }: ProductsType,
) => {
  if (details) {
    return {
      name,
      brand: details.brand,
      model: details.model,
      data: [{ price, color: details.color }],
    };
  }
  if (data) {
    return {
      name,
      brand,
      model,
      data: data.map((item) => ({
        price: item.price,
        color: item.color,
      })),
    };
  }
  return {
    name,
    brand,
    model,
    data: [{ price, color }],

  };
});

export default genericProducts;
