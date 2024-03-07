import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FormProductType } from '../../types/ProductsType';

export default function AddProcuct() {
  const inicialInfo: FormProductType = {
    name: '',
    brand: '',
    model: '',
    data: [
      {
        color: '',
        price: '',
      },
    ],
  };

  const navigate = useNavigate();

  const [isLogged, setIsLogged] = useState(false);

  // falta fazer a verificação se o token é valido
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setIsLogged(false);
      return;
    }
    setIsLogged(true);
  }, [navigate]);

  const [productInfo, setProductInfo] = useState<FormProductType>(inicialInfo);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (target.name === 'color' || target.name === 'price') {
      const newData = productInfo.data.map((item, index) => {
        if (index === productInfo.data.length - 1) {
          return { ...item, [target.name]: target.value };
        }
        return item;
      });

      setProductInfo({ ...productInfo, data: newData });
      return;
    }

    setProductInfo({ ...productInfo, [target.name]: target.value });
  };

  const handleAddType = () => {
    setProductInfo({
      ...productInfo,
      data: [{ color: '', price: 0 }, ...productInfo.data],
    });
  };
  const handleRemoveType = () => {
    const newData = productInfo.data
      .filter((_, index) => index !== productInfo.data.length - 1);
    setProductInfo({ ...productInfo, data: newData });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    productInfo.data.map(async (item) => {
      const response = await fetch('http://localhost:5432/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: productInfo.name,
          brand: productInfo.brand,
          model: productInfo.model,
          price: item.price,
          color: item.color,
        }),
      });

      if (response.ok) {
        alert('Produto adicionado com sucesso');
        setProductInfo(inicialInfo);
        return;
      }
      alert('Problema ao criar o produto');
    });
  };

  const handleQuit = () => {
    setProductInfo(inicialInfo);
    navigate('/products');
  };

  return (
    isLogged ? (
      <form onSubmit={ handleSubmit }>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            name="name"
            id="name"
            value={ productInfo.name }
            onChange={ handleChange }
            required
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
            required
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
            required
          />
        </label>
        <div style={ { display: 'flex' } }>
          {productInfo.data.map((item, index) => (
            <div key={ index }>
              <label htmlFor="color">
                Cor
                <input
                  type="text"
                  name="color"
                  id="color"
                  onChange={ handleChange }
                  value={ item.color }
                  required
                />
              </label>
              <label htmlFor="price">
                Preço
                <input
                  type="number"
                  name="price"
                  id="price"
                  placeholder="0"
                  onChange={ handleChange }
                  value={ item.price as number }
                  required
                />
              </label>

              {index ? (
                <button type="button" onClick={ handleRemoveType }>Remover tipo</button>
              ) : (
                <button type="button" onClick={ handleAddType }>Adicionar tipo</button>
              )}

            </div>
          ))}
        </div>
        <button type="submit">Adicionar</button>
        <button type="button" onClick={ handleQuit }>Cancelar</button>

      </form>
    )
      : (
        <>
          <h1>Você precisa estar logado para acessar essa pagina</h1>
          <Link to="/login">Login</Link>
        </>
      )
  );
}
