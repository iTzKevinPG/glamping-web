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
    <div className='container-padre'>

      <div className='container-arbol'>
        <img className='imagen-arbol' src="/assets/images/arbol.png" alt="Imagen arbol"/>
        <img className='imagen-LogoGlamping' src="/assets/images/LogoG.svg" alt="Imagen logo"/>
      </div>
      
      <div className="container">
        <h1>LOGIN</h1>

        <Input
          type={'text'}
          value={formValues.username}
          onChange={(value) => handleInputChange('username', value)}
          placeholder={'Usurname'}
          className={'usuario'}
        />

        <Input
          type={'text'}
          value={formValues.Password}
          onChange={(value) => handleInputChange('Password', value)}
          placeholder={'Password'}
          className={'input_password'}
        />
        <div className='div_check'>
          <input className='input_check' type="checkbox" name="my-checkbox" id="opt-in" />
          <label className='label_check' for="opt-in">Renember Password</label>
        </div>

        <div className='div_boton'>
          <Button
            className={'btn_login'}
            text="LOGIN"
            color="var(--secondary-color)"
            mode="fill"
            textColor="var(--text-color-bg)"
            onClick={() => {
              handleClick('login');
            }}
          />

        </div>

        <div>
          <p className='P_text'>Forgot Password?</p>
          <p className='P_text'>Don't have account?</p>
        </div>




      </div>      

    </div>
    



  );
}

export default LoginPage;
