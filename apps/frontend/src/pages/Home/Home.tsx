import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductsType } from '../../types/ProductsType';

export default function Home({ search }: { search: string }) {
  const [products, setProducts] = useState<ProductsType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // falta fazer a verificação se o token é valido
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Você precisa estar logado para acessar esta página');
      navigate('/login');
    }

    const getData = async () => {
      const response = await fetch('http://localhost:5432/products');
      const data = await response.json();
      setProducts(data);
      setIsLoading(false);
    };
    getData();
  }, []);

  const handleDelete = async (idProduct: number) => {
    if (window.confirm('Deseja realmente deletar este produto?')) {
      const getNewData = products.filter(({ id }) => id !== idProduct);
      const response = await fetch(`http://localhost:5432/products/${idProduct}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        alert('Erro ao deletar produto');
        return;
      }
      setProducts(getNewData);
    }
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
