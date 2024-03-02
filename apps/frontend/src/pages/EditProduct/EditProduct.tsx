import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { GenericProductsType } from '../../types/ProductsType';

export default function EditProduct() {
  const inicialInfo: GenericProductsType = {
    name: '',
    brand: '',
    model: '',
    data: [
      {
        color: '',
        price: 0,
      },
    ],
  };

  // const { id } = useParams();

  // fazer um get info para o backend - passar o id do produto, vai estar na rota, o inicial info vai começar com os dados do produto

  // ai quando eu clicar eu atualizar fazer um patch para o backend

  const [productInfo, setProductInfo] = useState<GenericProductsType>(inicialInfo);

  const navigate = useNavigate();

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
    const newData = productInfo;
    newData.data.unshift({ color: '', price: 0 });
    setProductInfo({ ...productInfo, data: newData.data });
  };
  const handleRemoveType = () => {
    const newData = productInfo.data
      .filter((_, index) => index !== productInfo.data.length - 1);
    setProductInfo({ ...productInfo, data: newData });
  };

  // adicionar função que manda para o backend e cria um novo produto
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setProductInfo(inicialInfo);
  };

  const handleQuit = () => {
    setProductInfo(inicialInfo);
    navigate('/products');
  };

  return (
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
                type="text"
                name="price"
                id="price"
                onChange={ handleChange }
                value={ item.price }
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
      <button type="submit">Editar</button>
      <button type="button" onClick={ handleQuit }>Cancelar</button>

    </form>
  );
}
