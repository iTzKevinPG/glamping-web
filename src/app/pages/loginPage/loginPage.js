import React, { useState } from 'react';
import Button from '../../components/general-button/button';
import Input from '../../components/input/input';
import './loginPage.scss';

function LoginPage() {
  const [formValues, setFormValues] = useState({
    username: '',
  });

  const handleInputChange = (name, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleClick = () => {
    alert(`Se escribió: ${formValues.username}`);
  };

  return (
    <div className="container">
      <h1>Bienvenido a login</h1>

      <h2>Ingresa tu nombre de usuario</h2>
      <p>
        todos los componentes crecen al 100% del espacio que tengan, entonces ya
        depende de ti el tamaño
      </p>

      <Input
        type={'text'}
        value={formValues.username}
        onChange={(value) => handleInputChange('username', value)}
        placeholder={'Nombre de usuario'}
        className={''}
      />

      <Button
        text="Ver Formulario"
        color="var(--text-color-bg)"
        mode="outline"
        textColor="var(--text-color-bg)"
        onClick={() => {
          handleClick();
        }}
      />
    </div>
  );
}

export default LoginPage;
