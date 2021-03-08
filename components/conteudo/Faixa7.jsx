import styled from "styled-components";

import Container from "../ui/containers/Container";
import { FaixaWrapperSimples } from "../ui/faixas/FaixaStyles";
import Icon from "../ui/icons/Icon";

import { Title, TitleVerde } from "./Faixa1";

const ContentContainer = styled(Container)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

const TitleFaixa7 = styled(Title)`
  color: ${props => props.theme.client.colors.azul};
  line-height: 3rem;
`;
const TitleStrongFaixa7 = styled(TitleVerde)`
  color: ${props => props.theme.client.colors.azul};
  padding-bottom: 0;
`;

const FontText = styled.p`
  font-size: 15px;
  font-weight: 300;
  margin: 0;
`;


const Faixa7 = () => (
  <FaixaWrapperSimples>
    <ContentContainer>
      <TitleFaixa7>
        Retorno comprovado!
         <Icon tamanho="2rem" tipo="svg" cor="" icon="correct" />
      </TitleFaixa7>
      <TitleStrongFaixa7>
        100% dos franqueados recuperaram o investimento no prazo esperado*!
      </TitleStrongFaixa7>
      <FontText>*Fonte: Pesquisa ABF</FontText>
    </ContentContainer>
  </FaixaWrapperSimples>
);

export default Faixa7;
