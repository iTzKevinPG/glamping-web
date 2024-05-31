import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { postAsync } from '../../api/httpClient';
import Button from '../../components/general-button/button';
import Input from '../../components/input/input';
import './registerPage.scss';

function RegisterPage() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    fullName: '',
    email: '',
    address: '',
    phone: '',
    password: '',
    validPassword: '',
    checkValid: false,
  });

  const handleInputChange = (name, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleClick = async () => {
    if (
      formValues.fullName === '' ||
      formValues.email === '' ||
      formValues.address === '' ||
      formValues.phone === '' ||
      formValues.password === '' ||
      formValues.validPassword === '' ||
      !formValues.checkValid
    ) {
      alert('Todos los campos son requeridos');
      return;
    }

    if (formValues.password !== formValues.validPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    try {
      const response = await postAsync('/register', formValues);
      if (response) {
        alert('Usuario creado con éxito!');
        navigate(`/login`);
      }
    } catch (error) {
      if (error.response.data && error.response.data.status_code === 409) {
        alert('El email o nombre de usuario ya se encuentra registrado');
        return;
      }
      alert('Ha ocurrido un error');
    }
  };

  return (
    <>
      <div className="backGroundLines"></div>
      <div className="register-container">
        <div className="register-container__tree">
          <img
            className="register-container__tree--img-tree"
            src="../assets/images/register-trees.svg"
            alt="Imagen arbol"
          />
        </div>

        <div className="register-container__form">
          <div className="register-container__form--container">
            <h1>REGISTER</h1>

            <div className="register-container__form--inputs">
              <div className="register-container__form--column">
                <Input
                  type={'text'}
                  value={formValues.fullName}
                  onChange={(value) => handleInputChange('fullName', value)}
                  placeholder={'Nombre completo'}
                  className={'register-container__form--input'}
                />
                <Input
                  type={'text'}
                  value={formValues.phone}
                  onChange={(value) => handleInputChange('phone', value)}
                  placeholder={'Teléfono'}
                  className={'register-container__form--input'}
                />

                <Input
                  type={'text'}
                  value={formValues.password}
                  onChange={(value) => handleInputChange('password', value)}
                  placeholder={'Contraseña'}
                  className={'register-container__form--input'}
                />
              </div>

              <div className="register-container__form--column">
                <Input
                  type={'text'}
                  value={formValues.email}
                  onChange={(value) => handleInputChange('email', value)}
                  placeholder={'Email'}
                  className={'register-container__form--input'}
                />

                <Input
                  type={'text'}
                  value={formValues.address}
                  onChange={(value) => handleInputChange('address', value)}
                  placeholder={'Dirección'}
                  className={'register-container__form--input'}
                />

                <Input
                  type={'text'}
                  value={formValues.validPassword}
                  onChange={(value) =>
                    handleInputChange('validPassword', value)
                  }
                  placeholder={'Confirmar contraseña'}
                  className={'register-container__form--input'}
                />
              </div>
            </div>

            <div className="register-container__div_check">
              <input
                className="login-container__div_check--input_check"
                type="checkbox"
                name="my-checkbox"
                onChange={(e) =>
                  handleInputChange('checkValid', e.target.checked)
                }
              />
              <label className="register-container__div_check--label_check">
                Acepto términos y condiciones
              </label>
            </div>

            <div className="register-container__div_button">
              <Button
                className={'register-container__div_button--btn_login'}
                text="REGISTRARSE"
                color="var(--secondary-color)"
                mode="fill"
                textColor="var(--text-color-bg)"
                onClick={() => {
                  handleClick('login');
                }}
              />
            </div>

            <div className="register-container__texts">
              <Link className="register-container__texts--link" to="/login">
                <span>Ya tienes una cuenta? Inicia Sesión</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
