// src/api.js
export const createCurriculo = async (formData) => {
    const response = await fetch('http://localhost:8000/graphql/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: `
          mutation {
            createCurriculo(
              nome: "${formData.nome}",
              email: "${formData.email}",
              celular: "${formData.celular}",
              cep: "${formData.cep}",
              endereco: "${formData.endereco}",
              complemento: "${formData.complemento}",
              bairro: "${formData.bairro}",
              cidade: "${formData.cidade}",
              estado: "${formData.estado}",
              pais: "${formData.pais}",
              objetivo: "${formData.objetivo}",
              formacao: ${JSON.stringify(formData.formacao)},
              experiencia: ${JSON.stringify(formData.experiencia)},
              idiomas: ${JSON.stringify(formData.idiomas)},
              certificacoes: ${JSON.stringify(formData.certificacoes)},
              habilidades: ${JSON.stringify(formData.habilidades)},
              outrasInformacoes: "${formData.outrasInformacoes}"
            ) {
              curriculo {
                id
                nome
                email
                celular
                cep
                endereco
                complemento
                bairro
                cidade
                estado
                pais
                objetivo
                formacao {
                  grau
                  instituicao
                  curso
                  inicio
                  fim
                  infoAdicional
                }
                experiencia {
                  cargo
                  empresa
                  inicio
                  fim
                  infoAdicional
                }
                idiomas {
                  idioma
                  nivel
                  infoAdicional
                }
                certificacoes {
                  certificado
                  instituicao
                  inicio
                  fim
                  infoAdicional
                }
                habilidades {
                  habilidade
                  nivel
                }
                outrasInformacoes
              }
            }
          }
        `
      })
    });
    const data = await response.json();
    return data.data.createCurriculo.curriculo;
  };
  