import styled from "styled-components";
import PropTypes from "prop-types";

import Container from "../ui/containers/Container";
import { FaixaWrapperSimples } from "../ui/faixas/FaixaStyles";
import ButtonPulse from "../ui/buttons/ButtonPulse";

import { Title, TitleVerde } from "./Faixa1"
import { ButtonWrapper } from "./Faixa2";

const ContentContainer = styled(Container)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

const FaixaConteudo = styled.div`
  display: flex;
  padding: 0 2rem 0 5rem;
`;

const ContentTitles = styled.div`
  max-width: 45rem;
  padding-right: 3rem;
`;
const ContentInfos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
const ContentInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 180px;
  margin: 0 1.5rem;
  text-align: center;
`;

const TitleFaixa6 = styled(Title)`
  color: ${props => props.theme.client.colors.azul};
  line-height: 3rem;
`;
const TitleStrongFaixa6 = styled(TitleVerde)`
  color: ${props => props.theme.client.colors.azul};
`;

const TextSimple = styled.p`
  font-size: 18px;
  font-weight: 300;
  margin: 2rem 0;
`;

const TitleInfos = styled.p`
  font-size: 17px;
  font-weight: 800;
  color: #23c1cb;
`;
const TextInfos = styled(TextSimple)`
  font-size: 17px;
  margin: 0;
`;

const RowBlue = styled.div`
  background-color: #4994d4;
  width: 1px;
  height: 100px;
`;

const Faixa6 = ({callForm}) => (
  <FaixaWrapperSimples>
    <ContentContainer>
      <FaixaConteudo>
        <ContentTitles>
          <TitleFaixa6>Faturamento dos nossos franqueados
            <TitleStrongFaixa6>{" "}cresceu mais de 500%!</TitleStrongFaixa6>
          </TitleFaixa6>
          <TextSimple>100% dos franqueados responderam que tiveram o retorno no prazo esperado. Isso porque o mercado de estética e emagrecimento cresceu 567% no Brasil nos últimos cinco anos.</TextSimple>
        </ContentTitles>
        <ContentInfos>
          <ContentInfo>
            <TitleInfos>2 bilhões de pessoas</TitleInfos>
            <TextInfos>
              Com obesidade e sobrepeso
            </TextInfos>
          </ContentInfo>
          <RowBlue />
          <ContentInfo>
            <TitleInfos>30% do salário</TitleInfos>
            <TextInfos>
              Brasileiras gastam com estética
            </TextInfos>
          </ContentInfo>
          <RowBlue />
          <ContentInfo>
            <TitleInfos>50% de aumento</TitleInfos>
            <TextInfos>
              De procedimentos estéticos já em 2021
            </TextInfos>
          </ContentInfo>
        </ContentInfos>
      </FaixaConteudo>
        <ButtonWrapper>
          <ButtonPulse
            backColor="azul"
            fontColor="branco"
            backPulse="azul"
            onClick={() => callForm()}
          >
            FATURE ALTO NA EMAGRECENTRO!
          </ButtonPulse>
        </ButtonWrapper>
    </ContentContainer>
  </FaixaWrapperSimples>
);

Faixa6.propTypes = {
  callForm: PropTypes.func.isRequired
};

export default Faixa6;
