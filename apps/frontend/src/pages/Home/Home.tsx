/* eslint-disable no-alert */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductsType } from '../../types/ProductsType';
import { ButtonContainer, ProductContainer, ProductInfo,
  ProductsContainer } from './HomeStyle';

export default function Home({ search }: { search: string }) {
  const [products, setProducts] = useState<ProductsType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [token, setToken] = useState('');

  // falta fazer a verificação se o token é valido
  useEffect(() => {
    const tokenLocalStorage = localStorage.getItem('token');
    setToken(tokenLocalStorage as string);

    const getData = async () => {
      const response = await fetch('https://lexart-test-server-psi.vercel.app/products', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${tokenLocalStorage}`,
        },
      });
      const data = await response.json();

      if (data.message) {
        alert('Token inválido, faça login novamente');
        localStorage.removeItem('token');
        navigate('/login');
        return;
      }

      const sortedData = data
        .sort((a: ProductsType, b: ProductsType) => a.id as number - b.id as number);
      setProducts(sortedData);
      setIsLoading(false);
    };
    getData();
  }, [navigate]);

  const handleDelete = async (idProduct: number) => {
    if (window.confirm('Deseja realmente deletar este produto?')) {
      const getNewData = products.filter(({ id }) => id !== idProduct);
      const response = await fetch(`https://lexart-test-server-psi.vercel.app/products/${idProduct}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        alert('Erro ao deletar produto');
        return;
      }
      alert('Produto deletado com sucesso');
      setProducts(getNewData);
    }
  };

  return (
    <ProductsContainer>
      {isLoading ? <p>Loading...</p>
        : (
          <>
            {products.filter((product) => product.name.toLowerCase()
              .includes(search.toLowerCase()))
              .map((product: ProductsType) => (
                <ProductContainer key={ product.id }>
                  <ButtonContainer>
                    <button
                      onClick={ () => navigate(`/edit-product/${product.id}`) }
                    >
                      Editar
                    </button>
                    <button
                      onClick={ () => handleDelete(product.id as number) }
                    >
                      Apagar
                    </button>

                  </ButtonContainer>
                  <h2>{product.name}</h2>
                  <ProductInfo>
                    <p>{product.brand}</p>
                    <p>{product.model}</p>
                    <p>{`R$ ${product.price}`}</p>
                    <p>{product.color}</p>

                  </ProductInfo>
                </ProductContainer>

              ))}
          </>
        )}

    </ProductsContainer>
  );
}
