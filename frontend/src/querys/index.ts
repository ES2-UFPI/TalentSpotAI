import { gql } from '@apollo/client';

const TODAS_VAGAS_QUERY = gql`
    query TodasVagas {
        todasVagas {
            nomeVaga
            empresa
            detalhes
            salario
            tipo
            compativel
        }
    }
`;

export default TODAS_VAGAS_QUERY;

