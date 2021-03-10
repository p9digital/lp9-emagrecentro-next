import { useEffect } from "react";
import { useRouter } from "next/router";

import styled from "styled-components";
import Head from "next/head";

import { FaixaWrapper } from "../components/ui/faixas/FaixaStyles";
import Container from "../components/ui/containers/Container";

import {
  Faixa1Wrapper,
  ContentContainer,
  Faixa1Texto,
  FaixaConteudoResponsive,
  Logo,
  TitleVerde,
  ContentBackgroundLateral,
  BackgroundLateral,
  LogoContent
} from "../components/conteudo/Faixa1";
import { ButtonWrapper } from "../components/conteudo/Faixa2";

import { FaixaConteudo, FaixaSucessoTexto, LogoSucesso } from "./sucesso";

import Icon from "../components/ui/icons/Icon";
import ButtonPulse from "../components/ui/buttons/ButtonPulse";

const FaixaWrapperSucesso = styled(FaixaWrapper)`
  background-color: ${props => props.theme.client.colors.azul};

  @media (max-width: 400px) {
    padding-bottom: 2rem;
  }
`;

const FaixaConteudoIcones = styled(FaixaConteudo)`
  padding: 0;
`;

const TitleSimple = styled.p`
  line-height: 1.4;
  font-size: 28px;
  font-weight: 600;
  padding-bottom: 1.5rem;
  color: #fff;
`;

const Text = styled.p`
  color: white;
  font-size: 16px;
`;

const Faixa2Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
`;

// const ButtonPulseDownload = styled(ButtonPulseFaixa1)`
//   &::after {
//     background-color: ${props => props.theme.client.colors.verde};
//   }
// `;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 5rem;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 1rem;
  color: ${props => props.theme.client.colors.azul};
  width: 100%;
  text-align: center;
`;

const Card = styled.div`
  width: 280px;
  margin: 0 2.5rem 4rem;
`;

const CardImg = styled.img`
  height: 230px;
  width: auto;
`;

const CardText = styled.p`
  font-size: 14px;
  color: black;

  span {
    font-weight: bold;
  }
`;

const Finalizado = () => {
  const router = useRouter();

  //   useEffect(() => {
  //     async function buscaSession() {
  //       const session = await JSON.parse(
  //         localStorage.getItem("@totalclean/session-lead")
  //       );

  //       if (!session) {
  //         router.push("/");
  //         return false;
  //       }

  //       if (!session.lead_sucesso) {
  //         router.push("/sucesso");
  //         return false;
  //       }

  //       localStorage.removeItem("@totalclean/session-lead");
  //     }
  //     buscaSession();
  //   }, ["umavez"]);

  return (
    <div>
      <Head>
        <title>
          Fature até R$ 15 mil POR MÊS com a franquia home office Total Clean!
        </title>
        <meta
          name="description"
          content="Total Clean é a microfranquia home office TOP OF MIND no setor de limpeza e impermeabilização de sofás, estofados e tapetes. Baixe nossa apresentação."
        />
        <meta
          name="keywords"
          content="microfranquia, microfranquia home office, microfranquia online barata, franquia impermeabilização, franquia limpeza de estofados, total clean franquia, higienização de sofá, franquia sofá, franquia limpeza estofados"
        />
        <meta name="robots" content="index, follow" />
        <meta name="rating" content="general" />

        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://franquiaimpermeabilizacao.com.br/static/img/og.jpg"
        />
        <meta
          property="og:title"
          content="Fature até R$ 15 mil POR MÊS com a franquia home office Total Clean!"
        />
        <meta
          property="og:description"
          content="Total Clean é a microfranquia home office TOP OF MIND no setor de limpeza e impermeabilização de sofás, estofados e tapetes. Baixe nossa apresentação."
        />
        <meta
          property="og:url"
          content="https://franquiaimpermeabilizacao.com.br/"
        />
      </Head>
      <Faixa1Wrapper>
        <ContentContainer>
          <FaixaConteudoResponsive>
            <Faixa1Texto>
              <LogoContent>
                <picture>
                  <source
                    type="image/webp"
                    srcSet="/static/img/logo_branco.webp"
                  />
                  <LogoSucesso
                    src="/static/img/logo_branco.png"
                    alt="Total Clean"
                  />
                </picture>
              </LogoContent>
              <TitleSimple>
                Dados enviados com sucesso! Você já pode fazer o download da
                apresentação Emagrecentro.
              </TitleSimple>
              <Text>
                Aguarde a ligação de um de nossos consulstores, o DDD é 11!
              </Text>
              <ButtonWrapper>
                <ButtonPulse
                  backColor="verdeClaro"
                  fontColor="azul"
                  backPulse="verdeClaro"
                  onClick={() => callForm()}
                >
                  BAIXE NOSSA APRESENTAÇÃO!
                </ButtonPulse>
              </ButtonWrapper>
            </Faixa1Texto>
          </FaixaConteudoResponsive>
        </ContentContainer>
        <ContentBackgroundLateral>
          <BackgroundLateral
            src="/static/img/faixa1/background-lateral.png"
            alt="Emagrecentro"
          />
        </ContentBackgroundLateral>
      </Faixa1Wrapper>

      <FaixaConteudo>
        <Title>TOTAL CLEAN NA MÍDIA!</Title>
      </FaixaConteudo>
      <Faixa2Wrapper>
        <CardWrapper>
          <Card>
            <a
              href="https://www.totalcleanbrasil.com.br/wp-content/uploads/2020/11/pegn.png "
              target="_blank"
            >
              <CardImg src="/static/img/finalizado/midia1.png" />
              <CardText>
                <span>Pequenas Empresas e Grandes Negócios:</span> De uma
                segunda fonte de renda até os R$ 4 milhões!
              </CardText>
            </a>
          </Card>
          <Card>
            <a
              href="https://www.totalcleanbrasil.com.br/wp-content/uploads/2020/11/terra.png"
              target="_blank"
            >
              <CardImg src="/static/img/finalizado/midia2.png" />
              <CardText>
                <span>Portal Terra:</span> Como uma franquia de baixo
                investimento pode ser a saída da crise?
              </CardText>
            </a>
          </Card>
          <Card>
            <a
              href="https://www.totalcleanbrasil.com.br/wp-content/uploads/2020/11/agenciaoglobo.png "
              target="_blank"
            >
              <CardImg src="/static/img/finalizado/midia3.png" />
              <CardText>
                <span>Agência O Globo:</span> Como a Total Clean é um negócio
                inovador e com rápido retorno de investimento!
              </CardText>
            </a>
          </Card>
        </CardWrapper>
      </Faixa2Wrapper>
      <FaixaConteudoIcones>
        <FaixaSucessoTexto>
          <div>
            <a
              href="https://www.instagram.com/totalcleanbrasil/?hl=pt-br"
              target="_blank"
            >
              <Icon
                icon="instagram"
                tipo="svg"
                cor="#2b76f2"
                tamanho="3.5rem"
                margem="0 1.5rem"
              />
            </a>
            <a
              href="https://pt-br.facebook.com/totalcleanbrasil/"
              target="_blank"
            >
              <Icon icon="facebook" tipo="svg" cor="#2b76f2" tamanho="3.5rem" />
            </a>
          </div>
        </FaixaSucessoTexto>
      </FaixaConteudoIcones>
    </div>
  );
};

export default Finalizado;
