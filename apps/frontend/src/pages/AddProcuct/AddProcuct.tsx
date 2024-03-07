import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormProductType } from '../../types/ProductsType';
import ProductForm from '../../Components/ProductForm/ProductForm';

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

  const [token, setToken] = useState('');

  useEffect(() => {
    const tokenLocalStorage = localStorage.getItem('token');
    setToken(tokenLocalStorage as string);
  }, [navigate]);

  const [productInfo, setProductInfo] = useState<FormProductType>(inicialInfo);

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (target.name === 'color' || target.name === 'price') {
      const newData = productInfo.data.map((item, index) => {
        if (index === 0) {
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
      const response = await fetch('https://lexart-test-server-psi.vercel.app/products', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
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

      const data = await response.json();
      if (data.message) {
        alert('Token inválido, faça login novamente');
        localStorage.removeItem('token');
        navigate('/login');
        return;
      }

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
    <ProductForm
      handleSubmit={ handleSubmit }
      productInfo={ productInfo }
      handleChange={ handleChange }
      handleRemoveType={ handleRemoveType }
      handleAddType={ handleAddType }
      handleQuit={ handleQuit }
    />

  );
}
