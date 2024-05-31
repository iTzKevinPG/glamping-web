import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { postAsync } from '../../api/httpClient';
import Button from '../../components/general-button/button';
import Input from '../../components/input/input';
import { useUser } from '../../contexts/userContext';
import './loginPage.scss';

function LoginPage() {
  const { login, user } = useUser();
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    checkValid: false,
  });

  const handleInputChange = (name, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleClick = async () => {
    if (formValues.email === '' || formValues.password === '') {
      alert('Todos los campos son requeridos');
      return;
    }

    try {
      const response = await postAsync('/login', formValues);
      login(response.result.result);
      navigate(`/`);
    } catch (error) {
      if (error.response.data && error.response.data.status_code === 404) {
        alert('Las credenciales son incorrectas');
        return;
      }
      alert('Ha ocurrido un error');
    }
  };

  useEffect(() => {
    if (user) {
      navigate(`/`);
    }
  }, [user, navigate]);

  return (
    <>
      <div className="backGroundLines two"></div>
      <div className="login-container">
        <div className="login-container__tree">
          <img
            className="login-container__tree--img-tree"
            src="/assets/images/login-trees.svg"
            alt="Imagen arbol"
          />
          <img
            className="login-container__tree--logo"
            src="/assets/images/logo2v.svg"
            alt="Imagen logo"
          />
        </div>

        <div className="login-container__form">
          <div className="login-container__form--container">
            <h1>INICIO DE SESIÓN</h1>
            <Input
              type={'text'}
              value={formValues.email}
              onChange={(value) => handleInputChange('email', value)}
              placeholder={'Usuario'}
              className={'login-container__form--input'}
            />

            <Input
              type={'password'}
              value={formValues.password}
              onChange={(value) => handleInputChange('password', value)}
              placeholder={'Contraseña'}
              className={'login-container__form--input'}
            />
            <div className="login-container__div_check">
              <input
                className="login-container__div_check--input_check"
                type="checkbox"
                name="my-checkbox"
                onChange={(e) =>
                  handleInputChange('checkValid', e.target.checked)
                }
              />
              <label className="login-container__div_check--label_check">
                Recordar contraseña
              </label>
            </div>

            <div className="login-container__div_button">
              <Button
                className={'login-container__div_button--btn_login'}
                text="LOGIN"
                color="var(--secondary-color)"
                mode="fill"
                textColor="var(--text-color-bg)"
                onClick={() => {
                  handleClick('login');
                }}
              />
            </div>

            <div className="login-container__texts">
              <Link className="login-container__texts--link" to="/">
                <span>Olvide la contraseña?</span>
              </Link>

              <Link className="login-container__texts--link" to="/register">
                <span>No tienes cuenta? Regístrate</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
