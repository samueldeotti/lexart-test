import { DataProductType } from '../../types/ProductsType';
import Input from '../Input/Input';
import { Container, Form } from '../LoginForm/LoginFormStyle';
import { TypesContainer } from './ProductFormStyle';

type ProductFormProps = {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  productInfo: any;
  handleChange: (e: any) => void;
  handleRemoveType: () => void;
  handleAddType: () => void;
  handleQuit: () => void;
};

export default function ProductForm({ handleSubmit, productInfo,
  handleChange, handleRemoveType, handleAddType, handleQuit }: ProductFormProps) {
  const pathName = window.location.pathname;
  return (
    <Container style={ { marginTop: '40px' } }>
      <Form onSubmit={ handleSubmit }>
        <div>
          <Input
            type="text"
            name="name"
            value={ productInfo.name }
            setValue={ handleChange }
            text="Nome"
            isObject
            required
          />
          <Input
            type="text"
            name="brand"
            value={ productInfo.brand }
            setValue={ handleChange }
            text="Marca"
            isObject
            required
          />

          <Input
            type="text"
            name="model"
            value={ productInfo.model }
            setValue={ handleChange }
            text="Modelo"
            isObject
            required
          />

          {!pathName.includes('add') && (
            <>
              <Input
                type="text"
                name="color"
                value={ productInfo.color as string }
                setValue={ handleChange }
                text="Cor"
                isObject
                required
              />

              <Input
                type="number"
                name="price"
                value={ productInfo.price }
                setValue={ handleChange }
                text="Preço"
                isObject
                required
              />
            </>
          )}

          {pathName.includes('add') && (
            <TypesContainer id="types">
              {productInfo.data.map((item: DataProductType, index: number) => (
                <div key={ index }>
                  <div>
                    <Input
                      type="text"
                      name="color"
                      value={ item.color as string }
                      setValue={ handleChange }
                      text="Cor"
                      isObject
                      required
                    />
                    <Input
                      type="number"
                      name="price"
                      value={ item.price as string }
                      setValue={ handleChange }
                      text="Preço"
                      isObject
                      required
                    />

                  </div>

                  {pathName.includes('add') && (
                    index ? (
                      <button
                        type="button"
                        style={ { backgroundColor: '#e93131' } }
                        onClick={ handleRemoveType }
                      >
                        Remover tipo
                      </button>
                    ) : (
                      <button
                        type="button"
                        style={ { backgroundColor: '#1b738b' } }
                        onClick={ handleAddType }
                      >
                        Adicionar tipo
                      </button>
                    )
                  )}

                </div>
              )) }
            </TypesContainer>

          )}
          <button
            type="submit"
          >
            {`${pathName.includes('add') ? 'Adicionar' : 'Editar'} produto`}
          </button>
          <button type="button" onClick={ handleQuit }>Cancelar</button>

        </div>

      </Form>

    </Container>

  );
}
