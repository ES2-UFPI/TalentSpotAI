// src/App.js
import React, { useState } from 'react';
import './App.css';
import { createCurriculo } from './api'; // Importe a função de API

function App() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    celular: '',
    cep: '',
    endereco: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
    pais: '',
    objetivo: '',
    formacao: [],
    experiencia: [],
    idiomas: [],
    certificacoes: [],
    habilidades: [],
    outrasInformacoes: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleNestedChange = (index, name, value, field) => {
    const updatedField = [...form[field]];
    updatedField[index][name] = value;
    setForm({ ...form, [field]: updatedField });
  };

  const handleAddNested = (field, newEntry) => {
    setForm({ ...form, [field]: [...form[field], newEntry] });
  };

  const handleRemoveNested = (index, field) => {
    const updatedField = [...form[field]];
    updatedField.splice(index, 1);
    setForm({ ...form, [field]: updatedField });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.nome) newErrors.nome = 'Nome é obrigatório';
    if (!form.email) newErrors.email = 'Email é obrigatório';
    if (!form.estado) newErrors.estado = 'Estado é obrigatório';
    if (!form.pais) newErrors.pais = 'País é obrigatório';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      try {
        const curriculo = await createCurriculo(form);
        console.log('Currículo criado:', curriculo);
      } catch (error) {
        console.error('Erro ao criar currículo:', error);
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="App">
      <h1>Currículo</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input type="text" name="nome" value={form.nome} onChange={handleChange} />
          {errors.nome && <span className="error">{errors.nome}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label>Celular:</label>
          <input type="tel" name="celular" value={form.celular} onChange={handleChange} />
        </div>
        <div>
          <label>CEP:</label>
          <input type="text" name="cep" value={form.cep} onChange={handleChange} />
        </div>
        <div>
          <label>Endereço:</label>
          <input type="text" name="endereco" value={form.endereco} onChange={handleChange} />
        </div>
        <div>
          <label>Complemento:</label>
          <input type="text" name="complemento" value={form.complemento} onChange={handleChange} />
        </div>
        <div>
          <label>Bairro:</label>
          <input type="text" name="bairro" value={form.bairro} onChange={handleChange} />
        </div>
        <div>
          <label>Cidade:</label>
          <input type="text" name="cidade" value={form.cidade} onChange={handleChange} />
        </div>
        <div>
          <label>Estado:</label>
          <input type="text" name="estado" value={form.estado} onChange={handleChange} />
          {errors.estado && <span className="error">{errors.estado}</span>}
        </div>
        <div>
          <label>País:</label>
          <input type="text" name="pais" value={form.pais} onChange={handleChange} />
          {errors.pais && <span className="error">{errors.pais}</span>}
        </div>
        <div>
          <label>Objetivo Profissional:</label>
          <textarea name="objetivo" value={form.objetivo} onChange={handleChange}></textarea>
        </div>
        <div>
          <h3>Formação</h3>
          {form.formacao.map((item, index) => (
            <div key={index} className="formacao-entry">
              <label>Grau:</label>
              <input type="text" name="grau" value={item.grau} onChange={(e) => handleNestedChange(index, 'grau', e.target.value, 'formacao')} />
              <label>Instituição:</label>
              <input type="text" name="instituicao" value={item.instituicao} onChange={(e) => handleNestedChange(index, 'instituicao', e.target.value, 'formacao')} />
              <label>Curso:</label>
              <input type="text" name="curso" value={item.curso} onChange={(e) => handleNestedChange(index, 'curso', e.target.value, 'formacao')} />
              <label>Início:</label>
              <input type="text" name="inicio" value={item.inicio} onChange={(e) => handleNestedChange(index, 'inicio', e.target.value, 'formacao')} />
              <label>Fim:</label>
              <input type="text" name="fim" value={item.fim} onChange={(e) => handleNestedChange(index, 'fim', e.target.value, 'formacao')} />
              <label>Informações Adicionais:</label>
              <textarea name="infoAdicional" value={item.infoAdicional} onChange={(e) => handleNestedChange(index, 'infoAdicional', e.target.value, 'formacao')}></textarea>
              <button type="button" onClick={() => handleRemoveNested(index, 'formacao')}>Remover</button>
            </div>
          ))}
          <button type="button" onClick={() => handleAddNested('formacao', { grau: '', instituicao: '', curso: '', inicio: '', fim: '', infoAdicional: '' })}>Adicionar Formação</button>
        </div>
        <div>
          <h3>Experiência Profissional</h3>
          {form.experiencia.map((item, index) => (
            <div key={index} className="experiencia-entry">
              <label>Nome do Cargo:</label>
              <input type="text" name="cargo" value={item.cargo} onChange={(e) => handleNestedChange(index, 'cargo', e.target.value, 'experiencia')} />
              <label>Empresa:</label>
              <input type="text" name="empresa" value={item.empresa} onChange={(e) => handleNestedChange(index, 'empresa', e.target.value, 'experiencia')} />
              <label>Data de Início:</label>
              <input type="text" name="inicio" value={item.inicio} onChange={(e) => handleNestedChange(index, 'inicio', e.target.value, 'experiencia')} />
              <label>Data de Saída:</label>
              <input type="text" name="fim" value={item.fim} onChange={(e) => handleNestedChange(index, 'fim', e.target.value, 'experiencia')} />
              <label>Informações Adicionais:</label>
              <textarea name="infoAdicional" value={item.infoAdicional} onChange={(e) => handleNestedChange(index, 'infoAdicional', e.target.value, 'experiencia')}></textarea>
              <button type="button" onClick={() => handleRemoveNested(index, 'experiencia')}>Remover</button>
            </div>
          ))}
          <button type="button" onClick={() => handleAddNested('experiencia', { cargo: '', empresa: '', inicio: '', fim: '', infoAdicional: '' })}>Adicionar Experiência</button>
        </div>
        <div>
          <h3>Idiomas</h3>
          {form.idiomas.map((item, index) => (
            <div key={index} className="idiomas-entry">
              <label>Idioma:</label>
              <input type="text" name="idioma" value={item.idioma} onChange={(e) => handleNestedChange(index, 'idioma', e.target.value, 'idiomas')} />
              <label>Nível:</label>
              <select name="nivel" value={item.nivel} onChange={(e) => handleNestedChange(index, 'nivel', e.target.value, 'idiomas')}>
                <option value="básico">Básico</option>
                <option value="intermediário">Intermediário</option>
                <option value="avançado">Avançado</option>
                <option value="fluente/nativo">Fluente/Nativo</option>
              </select>
              <label>Informações Adicionais:</label>
              <textarea name="infoAdicional" value={item.infoAdicional} onChange={(e) => handleNestedChange(index, 'infoAdicional', e.target.value, 'idiomas')}></textarea>
              <button type="button" onClick={() => handleRemoveNested(index, 'idiomas')}>Remover</button>
            </div>
          ))}
          <button type="button" onClick={() => handleAddNested('idiomas', { idioma: '', nivel: 'básico', infoAdicional: '' })}>Adicionar Idioma</button>
        </div>
        <div>
          <h3>Certificações</h3>
          {form.certificacoes.map((item, index) => (
            <div key={index} className="certificacoes-entry">
              <label>Certificado:</label>
              <input type="text" name="certificado" value={item.certificado} onChange={(e) => handleNestedChange(index, 'certificado', e.target.value, 'certificacoes')} />
              <label>Instituição:</label>
              <input type="text" name="instituicao" value={item.instituicao} onChange={(e) => handleNestedChange(index, 'instituicao', e.target.value, 'certificacoes')} />
              <label>Data de Início:</label>
              <input type="text" name="inicio" value={item.inicio} onChange={(e) => handleNestedChange(index, 'inicio', e.target.value, 'certificacoes')} />
              <label>Data de Fim:</label>
              <input type="text" name="fim" value={item.fim} onChange={(e) => handleNestedChange(index, 'fim', e.target.value, 'certificacoes')} />
              <label>Informações Adicionais:</label>
              <textarea name="infoAdicional" value={item.infoAdicional} onChange={(e) => handleNestedChange(index, 'infoAdicional', e.target.value, 'certificacoes')}></textarea>
              <button type="button" onClick={() => handleRemoveNested(index, 'certificacoes')}>Remover</button>
            </div>
          ))}
          <button type="button" onClick={() => handleAddNested('certificacoes', { certificado: '', instituicao: '', inicio: '', fim: '', infoAdicional: '' })}>Adicionar Certificação</button>
        </div>
        <div>
          <h3>Habilidades</h3>
          {form.habilidades.map((item, index) => (
            <div key={index} className="habilidades-entry">
              <label>Habilidade:</label>
              <input type="text" name="habilidade" value={item.habilidade} onChange={(e) => handleNestedChange(index, 'habilidade', e.target.value, 'habilidades')} />
              <label>Nível:</label>
              <select name="nivel" value={item.nivel} onChange={(e) => handleNestedChange(index, 'nivel', e.target.value, 'habilidades')}>
                <option value="básico">Básico</option>
                <option value="intermediário">Intermediário</option>
                <option value="avançado">Avançado</option>
              </select>
              <button type="button" onClick={() => handleRemoveNested(index, 'habilidades')}>Remover</button>
            </div>
          ))}
          <button type="button" onClick={() => handleAddNested('habilidades', { habilidade: '', nivel: 'básico' })}>Adicionar Habilidade</button>
        </div>
        <div>
          <label>Outras Informações:</label>
          <textarea name="outrasInformacoes" value={form.outrasInformacoes} onChange={handleChange}></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
