import React, { useEffect, useState } from 'react';
import { getAsync, putAsync } from '../../api/httpClient';
import { useUser } from '../../contexts/userContext';
import BankData from '../bank-data/bankData';
import Button from '../general-button/button';
import Input from '../input/input';
import './profileForm.scss';

function formatDate(dateString) {
  return dateString.split(' ')[0];
}

function ProfileForm() {
  const { userData, profile, user } = useUser();

  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    birthDate: '',
    phone: '',
    email: '',
    password: '',
    payMethodId: '',
  });

  const handleInputChange = (name, value) => {
    setFormData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const saveInfo = async () => {
    if (
      formData.fullName === '' ||
      formData.address === '' ||
      formData.birthDate === '' ||
      formData.phone === '' ||
      formData.email === '' ||
      formData.password === '' ||
      formData.payMethodId === null
    ) {
      alert('Todos los campos y secciones son requeridos');
      return;
    }

    try {
      const response = await putAsync('/user', {
        ...formData,
        id: user.userId,
      });
      if (response) {
        alert('Usuario actualizado con éxito!');
      }
    } catch (error) {
      alert('Ha ocurrido un error');
    }
  };

  useEffect(() => {
    function setData() {
      if (userData) {
        setFormData({
          fullName: userData.fullName ?? '',
          address: userData.address ?? '',
          birthDate: formatDate(userData.birthDate) ?? '',
          phone: userData.phone ?? '',
          email: userData.email ?? '',
          password: userData.password ?? '',
          payMethodId: userData.payMethodId,
        });
      }
    }

    async function fetchData() {
      const response = await getAsync('/user', { id: user?.userId });
      await profile(response.result.result.user);
      setData();
    }

    if (!userData) {
      fetchData();
    }

    if (userData) {
      setData();
    }
  }, [user, profile, userData]);

  return (
    <div className="profile-page-container">
      <div className="profile-page-container__profile-content">
        <div className="profile-page-container__profile-image-container">
          <img
            src="../assets/images/perfil.svg"
            alt="Profile"
            style={{ width: '90%' }}
          />
        </div>
        <div className="profile-page-container__form-container">
          <h1>Perfil</h1>
          <h2>Datos personales</h2>
          <div className="profile-page-container__input-row">
            <Input
              className="profile-page-container__input-row--input"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={(value) => handleInputChange('fullName', value)}
              placeholder="Nombres"
            />
            <Input
              className="profile-page-container__input-row--input"
              type="email"
              name="email"
              value={formData.email}
              onChange={(value) => handleInputChange('email', value)}
              placeholder="Correo"
            />
          </div>
          <div className="profile-page-container__input-row">
            <Input
              className="profile-page-container__input-row--input"
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={(value) => handleInputChange('birthDate', value)}
              placeholder="Fecha de nacimiento"
            />
            <Input
              className="profile-page-container__input-row--input"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={(value) => handleInputChange('phoneNumber', value)}
              placeholder="Número de celular"
            />
          </div>
          <div className="profile-page-container__input-row">
            <Input
              className="profile-page-container__input-row--input"
              type="text"
              name="username"
              value={formData.address}
              onChange={(value) => handleInputChange('username', value)}
              placeholder="Usuario"
            />
            <Input
              className="profile-page-container__input-row--input"
              type="password"
              name="password"
              value={formData.password}
              onChange={(value) => handleInputChange('password', value)}
              placeholder="Contraseña"
            />
          </div>
          <div className="profile-page-container__button-container">
            <div className="profile-page-container__button-container--btn">
              <Button
                text="Editar"
                color="var(--text-color-bg-contrast)"
                mode="fill"
                textColor="var(--text-color-bg)"
                onClick={() => saveInfo()}
              />
            </div>
          </div>
        </div>
      </div>

      <hr className="profile-page-container__custom-line" />

      <BankData
        paymentMethod={formData.payMethodId}
        onChange={(value) => handleInputChange('payMethodId', value)}
        onSave={() => saveInfo()}
      />

      <div className="profile-page-container__delete-container">
        <Button
          text="Eliminar"
          iconName="trash"
          color="var(--background-red-color)"
          mode="outline"
          textColor="var(--background-red-color)"
          onClick={() => {}}
        />
      </div>
    </div>
  );
}

export default ProfileForm;
