import React from 'react';
import Button from '../../components/general-button/button';
import './faqPage.scss';

const questions = [
  {
    id: 1,
    question: '¿Qué incluye la estancia en el glamping?',
    answer:
      'Cada tienda está equipada con camas cómodas, ropa de cama de lujo, acceso a baños privados y una terraza exterior para disfrutar de las vistas.',
  },
  {
    id: 2,
    question: '¿Es necesario llevar equipo de campamento?',
    answer:
      'No es necesario. Proporcionamos todo el equipo de alta calidad, incluyendo muebles y utensilios de cocina.',
  },
  {
    id: 3,
    question: '¿Se permite hacer fuego o barbacoa en el glamping?',
    answer:
      'Sí, contamos con zonas designadas para barbacoas y hogueras con todas las medidas de seguridad necesarias.',
  },
  {
    id: 4,
    question: '¿Hay opciones para comer dentro del glamping?',
    answer:
      'Ofrecemos un menú de comida gourmet que se puede disfrutar en la tienda o en nuestras zonas de picnic.',
  },
  {
    id: 5,
    question: '¿Qué actividades se pueden realizar en el área?',
    answer:
      'Disponemos de una variedad de actividades como senderismo, paseos en bicicleta, yoga al amanecer y talleres de arte local.',
  },
];

const openWsp = () => {
  const phoneNumber = '3173759116';
  window.open(`https://wa.me/${phoneNumber}`, '_blank');
};

function FaqPage() {
  return (
    <>
      <div className="backGroundLines"></div>
      <div className="faq">
        <h1 className="faq__title">Preguntas frecuentes</h1>
        {questions.map((q) => (
          <div key={q.id} className="faq__item">
            <h2 className="faq__question">{q.question}</h2>
            <p className="faq__answer">{q.answer}</p>
          </div>
        ))}

        <div className="faq__btn">
          <Button
            text="Tengo una pregunta"
            iconName="wsp"
            color="var(--text-color-bg)"
            mode="outline"
            textColor="var(--text-color-bg)"
            onClick={() => openWsp()}
          />
        </div>
      </div>
    </>
  );
}

export default FaqPage;
