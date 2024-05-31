import React from 'react';
import './bankData.scss';

import Button from '../general-button/button'; // Asegúrate de que la ruta al componente Button es correcta
import InputCheckOption from '../input-check/inputCheck';

function BankData({ paymentMethod, onChange, onSave }) {
  return (
    <div className="bank-data-page-container">
      <div className="bank-data-page-container__bank-data-content">
        <div className="bank-data-page-container__bank-data-content--bank-logo">
          <img
            src="../assets/images/banco.svg"
            alt="Bank"
            style={{ width: '90%' }}
          />
        </div>
        <div className="bank-data-page-container__bank-data-container">
          <h1>Datos de banco</h1>
          <h2>Métodos de pago</h2>
          <div className="bank-data-page-container__payment-options">
            <InputCheckOption
              label="Tarjeta de crédito"
              iconUrl="../assets/images/credit-card.svg"
              isChecked={paymentMethod === 1}
              onCheck={() => onChange(1)}
              textColor="var(--text-color-bg-contrast)"
            ></InputCheckOption>

            <InputCheckOption
              label="Pago por PSE"
              iconUrl="../assets/images/pse.svg"
              isChecked={paymentMethod === 2}
              onCheck={() => onChange(2)}
              textColor="var(--text-color-bg-contrast)"
            ></InputCheckOption>

            <InputCheckOption
              label="Transferencia Bancolombia"
              iconUrl="../assets/images/bancolombia.svg"
              isChecked={paymentMethod === 3}
              onCheck={() => onChange(3)}
              textColor="var(--text-color-bg-contrast)"
            ></InputCheckOption>
          </div>
          <div className="bank-data-page-container__buttons">
            <Button
              text="Guardar"
              color="var(--text-color-bg-contrast)"
              mode="fill"
              textColor="var(--text-color-bg)"
              onClick={() => onSave()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BankData;
