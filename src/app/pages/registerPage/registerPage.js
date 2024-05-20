import React, { useState } from 'react';
import Button from '../../components/general-button/button';
import Input from '../../components/input/input';
import './registerPage.scss';

function RegisterPage() {
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
    <div className='container-padre'>

      <div className='container-arbol'>
        <img className='imagen-arbol' src="/assets/images/arbol.png" alt="Descripción de la imagen" />
      </div>

      <div className="container">
        <h1>REGISTRARSE</h1>

        <div className='container-inputpadre'>
          <div className='container-input'>
            <Input
              type={'text'}
              value={formValues.username}
              onChange={(value) => handleInputChange('Full name', value)}
              placeholder={'Full name'}
              className={'Full-name'}
            />

            <Input
              type={'text'}
              value={formValues.username}
              onChange={(value) => handleInputChange('contraseña', value)}
              placeholder={'Address'}
              className={'Address'}
            />

            <Input
              type={'text'}
              value={formValues.username}
              onChange={(value) => handleInputChange('contraseña', value)}
              placeholder={'Password'}
              className={'input_password'}
            />
          </div>

          <div className='container-input2'>
            <Input
              type={'text'}
              value={formValues.username}
              onChange={(value) => handleInputChange('contraseña', value)}
              placeholder={'Email address'}
              className={'Email-address'}
            />

            <Input
              type={'text'}
              value={formValues.username}
              onChange={(value) => handleInputChange('contraseña', value)}
              placeholder={'Phone No'}
              className={'phone'}
            />

            <Input
              type={'text'}
              value={formValues.username}
              onChange={(value) => handleInputChange('contraseña', value)}
              placeholder={'Confirm Password'}
              className={'Confirm-Password'}
            />
          </div>


        </div>
        <div className='div_check'>
          <input className='input_check' type="checkbox" name="my-checkbox" id="opt-in" />
          <label className='label_check' for="opt-in">Acepto terminos y condiciones</label>
        </div>


        <div className='div_boton'>
          <Button
            className={'btn_login'}
            text="REGISTRARSE"
            color="var(--secondary-color)"
            mode="fill"
            textColor="var(--text-color-bg)"
            onClick={() => {
              handleClick('registrarse');
            }}
          />

        </div>

        <div>
          <p className='P_text'>Already have an account? login</p>
          
        </div>




      </div>

    </div>




  );
}

export default RegisterPage;