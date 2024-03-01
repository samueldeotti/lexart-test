import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mockedData from '../../mocks/products.mock';
import { GenericProductsType } from '../../types/ProductsType';

export default function Home() {
  const [products, setProducts] = useState<GenericProductsType[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      // const response = await fetch('http://localhost:3333/products')
      // const data = await response.json()
      // return data
      const response = mockedData as GenericProductsType[];
      console.log(response);
      setProducts(response);
    };
    getData();
  }, []);

  return (
    <div>
      {products.map((product: GenericProductsType, index) => (
        /* AQUI COLOCAR O ID QUANDO FOR IMPLEMENTADO DO BANCO DE DADOS */
        <div key={ product.name + index }>
          <button onClick={ () => navigate(`/edit-product/${index}`) }>LAPIS</button>
          <h2>{product.name}</h2>
          <p>{product.brand}</p>
          <p>{product.model}</p>
          <div>
            {product.data.map((item) => (
              <div key={ item.color }>
                <p>{item.price}</p>
                <p>{item.color}</p>
              </div>
            ))}
          </div>
        </div>

      ))}

    </div>
  );
}
