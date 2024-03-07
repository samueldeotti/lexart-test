/* eslint-disable no-alert */
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductsType } from '../../types/ProductsType';

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
    if (!tokenLocalStorage) {
      alert('Faça login para acessar essa página');
      navigate('/login');
    }
    setToken(tokenLocalStorage as string);

    const getData = async () => {
      const response = await fetch(`http://localhost:5432/products/${id}`, {
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

  // adicionar função que manda para o backend e altera o produto
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch(`http://localhost:5432/products/${id}`, {
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
          <form onSubmit={ handleSubmit }>
            <label htmlFor="name">
              Nome
              <input
                type="text"
                name="name"
                id="name"
                value={ productInfo.name }
                onChange={ handleChange }
              />
            </label>
            <label htmlFor="brand">
              Marca
              <input
                type="text"
                name="brand"
                id="brand"
                value={ productInfo.brand }
                onChange={ handleChange }
              />
            </label>
            <label htmlFor="model">
              Modelo
              <input
                type="text"
                name="model"
                id="model"
                value={ productInfo.model }
                onChange={ handleChange }
              />
            </label>

            <label htmlFor="color">
              Cor
              <input
                type="text"
                name="color"
                id="color"
                onChange={ handleChange }
                value={ productInfo.color }
                required
              />
            </label>
            <label htmlFor="price">
              Preço
              <input
                type="number"
                name="price"
                id="price"
                onChange={ handleChange }
                value={ productInfo.price }
                required
              />
            </label>

            <button type="submit">Editar</button>
            <button type="button" onClick={ handleQuit }>Cancelar</button>

          </form>

        )}
    </div>
  );
}
