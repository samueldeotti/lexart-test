export type ProductsType = {
  name: string,
  brand?: string,
  model?: string,
  price?: number,
  color?: string,
  details?: {
    brand: string,
    model: string,
    color: string
  },
  data?: {
    price: number,
    color: string
  }[]
};

export type GenericProductsType = {
  name: string,
  brand: string,
  model: string,
  data: {
    price: number,
    color: string
  }[]
};
