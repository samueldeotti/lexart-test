import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductsType } from '../../types/ProductsType';

export default function Home({ search }: { search: string }) {
  const [products, setProducts] = useState<ProductsType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('http://localhost:5432/products');
      const data = await response.json();
      setProducts(data);
      setIsLoading(false);
    };
    getData();
  }, []);

  const handleDelete = (idProduct: number) => {
    // AINDA FALTA MANDAR A REQUISIÇÃO PARA O BACKEND
    // TALVEZ SEJA MELHOR FAZER UMA REQUISIÇÃO PARA O BACKEND E DELETAR O ITEM DO QUE FILTRAR DIRETAMENTE AQUI
    const getNewData = products.filter((_, index) => index !== idProduct);
    setProducts(getNewData);
  };

  return (
    <div>
      {isLoading ? <p>Loading...</p>
        : (
          <>
            {products.filter((product) => product.name.toLowerCase()
              .includes(search.toLowerCase()))
              .map((product: ProductsType) => (
                <div key={ product.id }>
                  <button
                    onClick={ () => navigate(`/edit-product/${product.id}`) }
                  >
                    LAPIS
                  </button>
                  <button onClick={ () => handleDelete(product.id as number) }>X</button>
                  <h2>{product.name}</h2>
                  <p>{product.brand}</p>
                  <p>{product.model}</p>
                  <p>{product.price}</p>
                  <p>{product.color}</p>
                </div>

              ))}
          </>
        )}

    </div>
  );
}
