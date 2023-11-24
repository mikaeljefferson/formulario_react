import React, { useState } from 'react';
import './Form.css';

function Form() {
  const [formulario, setFormulario] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormulario((prevFormulario) => ({
      ...prevFormulario,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Dados do formulário:', formulario);
  };

  return (
    <div >
      <h1>Formulário</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input className='input'
            type="text"
            name="nome"
            value={formulario.nome}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formulario.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Mensagem:
          <textarea
            name="mensagem"
            value={formulario.mensagem}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit" className='submit-button'>Enviar</button>
      </form>
    </div>
  );
}

export default Form;
