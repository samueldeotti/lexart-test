import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mockedData from '../../mocks/products.mock';
import { GenericProductsType } from '../../types/ProductsType';

export default function Home({ search }: { search: string }) {
  const [products, setProducts] = useState<GenericProductsType[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      // const response = await fetch('http://localhost:3333/products')
      // const data = await response.json()
      // return data
      const response = mockedData as GenericProductsType[];
      setProducts(response);
    };
    getData();
  }, []);

  const handleDelete = (idProduct: number) => {
    // AINDA FALTA MANDAR A REQUISIÇÃO PARA O BACKEND
    // TALVEZ SEJA MELHOR FAZER UMA REQUISIÇÃO PARA O BACKEND E DELETAR O ITEM DO QUE FILTRAR DIRETAMENTE AQUI
    const getNewData = products.filter((_, index) => index !== idProduct);
    setProducts(getNewData);
  };

  console.log(products);

  return (
    <div>
      {products.filter((product) => product.name.toLowerCase()
        .includes(search.toLowerCase()))
        .map((product: GenericProductsType, index) => (
        /* AQUI COLOCAR O ID QUANDO FOR IMPLEMENTADO DO BANCO DE DADOS */
          <div key={ product.name + index }>
            <button onClick={ () => navigate(`/edit-product/${index}`) }>LAPIS</button>
            <button onClick={ () => handleDelete(index) }>X</button>
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
