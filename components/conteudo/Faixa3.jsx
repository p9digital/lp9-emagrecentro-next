import styled from "styled-components";

import Container from "../ui/containers/Container";
import { FaixaWrapperSimples } from "../ui/faixas/FaixaStyles";

import { FaixaConteudoResponsive, Faixa1Texto, Title, TitleVerde } from "./Faixa1";

const Faixa3Wrapper = styled(FaixaWrapperSimples)`
  padding: 0 !important;
`;

const ContentContainer = styled(Container)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
`;

const FaixaConteudoResponsive3 = styled(FaixaConteudoResponsive)`
  padding: 0 2rem 0 5rem;
  max-width: 40rem;
`;

const TitleFaixa3 = styled(Title)`
  color: ${props => props.theme.client.colors.azul};
  line-height: 3rem;
`;
const TitleStrongFaixa3 = styled(TitleVerde)`
  color: ${props => props.theme.client.colors.azul};
`;

const TextSimple = styled.p`
  font-size: 18px;
  font-weight: 300;
  margin: 2rem 0;
`;

const ImagensWrapper = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin: 15px auto 0;
  width: 1550px;
`;

const ColunaImagem1 = styled.div`
  flex: 1 0 100px;
  padding: 0 10px;
`;
const ColunaImagem2 = styled.div`
  flex: 1 0 150px;
`;
const ColunaImagem3 = styled.div`
  flex: 1 0 125px;
`;

const ImagemPequena = styled.img``;

const Faixa3 = () => (
  <Faixa3Wrapper>
    <ContentContainer>
      <FaixaConteudoResponsive3>
        <Faixa1Texto>
          <TitleFaixa3>Por que a Emagrecentro é a franquia de
          <TitleStrongFaixa3>{" "}emagrecimento mais lucrativa?</TitleStrongFaixa3>
          </TitleFaixa3>
          <TextSimple>
            De Norte a Sul do Brasil e nos Estados Unidos, temos franqueados de todas as profissões, você não precisa ser da área da saúde! Lucre de verdade oferecendo produtos e tratamentos especializados para gordura localizada, celulite, flacidez e emagrecimento rápido.
          </TextSimple>
        </Faixa1Texto>
      </FaixaConteudoResponsive3>
      <ImagensWrapper>
        <ColunaImagem1>
          <picture>
            <source
              type="image/webp"
              srcSet="/static/img/faixa3/foto1.webp"
            />
            <ImagemPequena src="/static/img/faixa3/foto1.png" alt="Emagrecentro" />
            </picture>
          <picture>
            <source
              type="image/webp"
              srcSet="/static/img/faixa3/foto2.webp"
            />
            <ImagemPequena src="/static/img/faixa3/foto2.png" alt="Emagrecentro" />
          </picture>
        </ColunaImagem1>
        <ColunaImagem2>
          <picture>
            <source
              type="image/webp"
              srcSet="/static/img/faixa3/foto3.webp"
            />
            <ImagemPequena src="/static/img/faixa3/foto3.png" alt="Emagrecentro" />
          </picture>
          <picture>
            <source
              type="image/webp"
              srcSet="/static/img/faixa3/foto4.webp"
            />
            <ImagemPequena src="/static/img/faixa3/foto4.png" alt="Emagrecentro" />
          </picture>
        </ColunaImagem2>
        <ColunaImagem1>
          <picture>
            <source
              type="image/webp"
              srcSet="/static/img/faixa3/foto5.webp"
            />
            <ImagemPequena src="/static/img/faixa3/foto5.png" alt="Emagrecentro" />
          </picture>
          <picture>
            <source
              type="image/webp"
              srcSet="/static/img/faixa3/foto6.webp"
            />
            <ImagemPequena src="/static/img/faixa3/foto6.png" alt="Emagrecentro" />
          </picture>
        </ColunaImagem1>
        <ColunaImagem3>
          <picture>
            <source
              type="image/webp"
              srcSet="/static/img/faixa3/foto7.webp"
            />
            <ImagemPequena src="/static/img/faixa3/foto7.png" alt="Emagrecentro" />
          </picture>
        </ColunaImagem3>
      </ImagensWrapper>
    </ContentContainer>
  </Faixa3Wrapper>
);

export default Faixa3;
