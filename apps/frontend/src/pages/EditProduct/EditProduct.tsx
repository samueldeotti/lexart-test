/* eslint-disable no-alert */
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductsType } from '../../types/ProductsType';
import ProductForm from '../../Components/ProductForm/ProductForm';

export default function EditProduct() {
  const inicialInfo = {
    id: 0,
    name: '',
    brand: '',
    model: '',
    color: '',
    price: 0,
  };

  const { id } = useParams();
  const [productInfo, setProductInfo] = useState<ProductsType>(inicialInfo);
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const tokenLocalStorage = localStorage.getItem('token');
    setToken(tokenLocalStorage as string);

    const getData = async () => {
      const response = await fetch(`https://lexart-test-server-psi.vercel.app/products/${id}`, {
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

      setProductInfo(data);
      setIsLoading(false);
    };
    getData();
  }, [id, navigate]);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setProductInfo({ ...productInfo, [target.name]: target.value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch(`https://lexart-test-server-psi.vercel.app/products/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productInfo),
    });

    if (response.ok) {
      alert('Produto alterado com sucesso');
      navigate('/products');
      return;
    }
    alert('Erro ao alterar produto');
  };

  const handleQuit = () => {
    setProductInfo(inicialInfo);
    navigate('/products');
  };

  return (
    <div>
      {isLoading ? <p>Carregando...</p>
        : (
          <ProductForm
            handleSubmit={ handleSubmit }
            productInfo={ productInfo }
            handleChange={ handleChange }
            handleRemoveType={ () => {} }
            handleAddType={ () => {} }
            handleQuit={ handleQuit }
          />
        )}
    </div>
  );
}
