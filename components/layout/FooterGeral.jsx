import styled from "styled-components";

import Container from "../ui/containers/Container";

import { FaixaConteudoResponsive } from "../conteudo/Faixa1";

import { FaixaWrapperSimples } from "../ui/faixas/FaixaStyles";

const FooterWrapperSimples = styled(FaixaWrapperSimples)`
  background-color: #f6f6f6;
  @media (max-width: 900px) {
    padding: 0 1rem;
  }
`;

const FooterWrapper = styled.footer`
  position: relative;
  padding: 4rem 0;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  max-width: 60rem;

  @media (max-width: 900px) {
    width: 100%;
    justify-content: center;
    margin-bottom: 2rem;
  }

  p {
    font-size: 15px;
    @media (max-width: 500px) {
      font-size: 13px;
    }

    strong {
      a {
        color: #000;
      }
    }
  }
`;

const FooterP9 = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.client.colors.azul};

  @media (max-width: 900px) {
    width: 100%;
  }

  p {
    font-size: 15px;
    color: #fff;

    strong {
      a {
        color: #fff;
      }
    }
  }
`;

const FooterGeral = () => (
  <FooterWrapperSimples>
    <Container>
      <FaixaConteudoResponsive>
        <FooterContent>
        <div>
          <p>
            <strong>CNPJ: </strong>
            71.532.337/00001-98
          </p>
          <p>
            <strong>Razão Social: </strong>
            MULTIFRANQUIAS FRANCHISING LTDA
          </p>
          <p>
            <strong>Endereço: </strong>
            Rua Apotribu, 139, Conj 71, Parque Imperial, São Paulo (SP), CEP: 04.302-000
          </p>
          <p>
            <strong>E-mail: </strong>
            administrativo@grupomultifranquias.com.br
          </p>
          <p>
            <strong>Telefone: </strong>
            (11) 5585 2700
          </p>
        </div>
        </FooterContent>
      </FaixaConteudoResponsive>
      <FooterP9>
        <p>
          Com ♥ por{" "}
          <strong>
            <a
              href="https://p9.digital"
              title="Marketing Digital"
              target="_blank"
              rel="noopener noreferrer"
            >
              P9 Digital
            </a>
          </strong>
        </p>
      </FooterP9>
    </Container>
  </FooterWrapperSimples>
);

export default FooterGeral;
