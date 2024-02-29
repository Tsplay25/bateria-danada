"use client";

import SocialCard from "@/components/SocialCard";
import { Content } from "next/font/google";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const strand = useRef<HTMLDivElement>(null);
  const [strandWidth, setStrandWidth] = useState(0);

  useEffect(() => {
    setStrandWidth(
      (strand.current?.scrollWidth as number) -
        (strand.current?.offsetWidth as number)
    );
  }, []);

  return (
    <>
      {/* hero section */}
      <section className="flex flex-col items-center justify-center bg-hero-pattern bg-cover bg-no-repeat bg-center h-[700px] max-w-full text-white mx-auto py-16 overflow-hidden">
        <div className="flex items-center justify-center max-w-7xl">
          <div className="flex flex-col items-start gap-9 z-10 p-9 absolute md:static">
            <h1 className="text-blue-light font-edo text-5xl w-full">
              Bateria Danada Unifei
            </h1>

            <p className="font-sugo leading-5 max-w-96 text-lg">
              A Bateria Danada Unifei carrega no peito o nome da Universidade
              Federal de Itajubá.
            </p>
            <p className="font-sugo leading-5 max-w-96 text-lg">
              Há décadas tem encantado e animado a comunidade universitária,
              participando de eventos, torneios, shows e serviços para a
              comunidade de Itajubá. Representando o Sul de Minas Gerais
              juntamente com o coelhão, segura que a Danada vem aí!
            </p>

            <picture>
              <img
                className="-my-10 md:hidden"
                src="/img/hero/uh-que-azar.png"
                alt="Mancha de tinta roxa com o escrito UUHHH QUE AZAR!! no meio"
              />
            </picture>

            <a
              className="flex items-center justify-center gap-3 p-5 w-52 bg-blue-dark font-sugo text-xl rounded-lg shadow-lg"
              href="#contato"
              rel="noreferrer"
              target="_blank"
            >
              <picture>
                <img
                  src="/img/hero/phone-icon.svg"
                  alt="Ícone de um telefone branco"
                />
              </picture>
              Entre em contato!
            </a>
          </div>

          <div className="flex flex-col items-center justify-center max-w-[768px]">
            <picture className="w-full">
              <img
                className="opacity-80 items-center justify-center z-0 md:hidden max-h-[768px]"
                src="/img/hero/coelhao.png"
                alt="Coelhão Azul da Bateria Danada Unifei com óculos escuros e segurando um surdo de marcação na mão esquerda, e uma baqueta na mão direita"
              />
              <img
                className="hidden w-auto items-center justify-center md:block"
                src="/img/hero/hero-img.png"
                alt="Coelhão Azul da Bateria Danada Unifei com óculos escuros e segurando um surdo de marcação na mão esquerda, e uma baqueta na mão direita além da mancha de tinta roxa com o escrito UUHHH QUE AZAR!! no meio"
              />
            </picture>
          </div>
        </div>

        <picture className="flex justify-center">
          <img
            className="mt-20 smlg:-mt-6 smxl:-mt-14 md:-mt-20 animate-bounce absolute"
            src="/img/hero/seta-tinta.svg"
            alt="Seta de tinta roxa"
          />
        </picture>
      </section>

      {/* About */}
      <section className="flex flex-col items-center justify-center bg-sobre-img bg-cover bg-no-repeat bg-center bg-fixed text-white">
        <div className="flex flex-col py-10 gap-10">
          <h2 className="font-sugo mt-14 smlg:mt-0 text-5xl md:text-7xl w-full text-center">
            Sobre nós
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4 mdlg:gap-14">
            <div className="max-w-lg">
              <picture>
                <img
                  src="/img/about/about-img.png"
                  alt="Uma mancha de tinta roxa com a seguinte frase escrita por cima 'Conheça o barulho da nossa bateria!'"
                />
              </picture>
            </div>
            <div className="flex flex-col gap-4 bg-purple-regular rounded-3xl max-w-72 mdlg:max-w-96 items-center p-4 shadow-2xl">
              <p className="font-sugo leading-5 max-w-96 text-lg md:text-2xl  text-center">
                Incentivando, relações amistosas entre os nossos membros, de
                outras organizações estudantis e da comunidade local,
                possibilitamos o desenvolvimento de habilidades comportamentais,
                por meio da promoção de aulas de instrumentos de percussão,
                ensaios de música no ritmo de samba e samba-enredo, além da
                organização de eventos de cunho sociocultural relacionados à
                música.
              </p>
            </div>
          </div>
        </div>
        <div>
          <picture>
            <img
              src="/img/strands/section-change.png"
              alt="Mancha de tinta roxa"
            />
          </picture>
        </div>
      </section>

      {/* Strands */}
      <section className="flex flex-col items-center justify-center bg-rabbits bg-cover bg-center bg-no-repeat max-w-full text-white gap-6">
        <div className="flex flex-col items-center justify-center py-16 gap-10">
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-sugo text-center text-5xl lg:text-7xl">
              Vertentes Musicais
            </h2>
            <span className="font-sugo text-3xl text-center">
              Conheça nossos ritmos!
            </span>
          </div>

          <div className="flex flex-col items-center justify-center bg-strand-ink bg-contain bg-center bg-no-repeat w-full h-[300px] sm:h-[400px] max-h-[600px]">
            <div className="flex flex-col items-center justify-center gap-3 max-w-72 md:max-w-96">
              <h3 className="font-sugo text-center text-2xl lg:text-3xl sm:-mt-10">
                Escolinha e Jogos
              </h3>
              <div className="max-w-72 relative">
                <picture>
                  <img
                    src="/img/strands/school.jpg"
                    className="w-full rounded-xl"
                    alt="Foto dos ritmistas da Bateria Danada Unifei tocando a vertente de escolinha em uma festa universitária."
                  />
                </picture>
                <div className="absolute bottom-0 flex items-center justify-center w-full bg-gradient-to-b from-white/0 to-blue-regular/60 rounded-b-xl">
                  <p className="font-sugo leading-4 text-center text-sm mdlg:text-xl mdlg:leading-4  p-4">
                    Vertente de samba introdutória para o ensino de novos
                    ritmistas, com o intuito de apresentação em eventos
                    universitários e torcida em jogos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events and Social */}
      <section className="flex flex-col items-center justify-center bg-events-social bg-cover bg-center bg-no-repeat max-w-full">
        <div className="flex flex-col items-center justify-center bg-gradient-to-b from-purple-light/40 to-blue-regular/80 bg-cover">
          <div>
            <picture>
              <img
                className="rotate-180"
                src="/img/strands/section-change.png"
                alt="Mancha de tinta roxa"
              />
            </picture>
          </div>
          <div className=" w-full py-16 px-4 gap-5">
            <h2 className="font-sugo text-5xl md:text-7xl w-full text-center text-white mb-4">
              Eventos e Social
            </h2>
            <div className="flex flex-col mdlg:flex-row items-center justify-center w-full gap-20">
              <SocialCard
                title="Sambanada"
                carouselImgs={[
                  "sambanada/1.jpg",
                  "sambanada/2.jpg",
                  "sambanada/3.jpg",
                  "sambanada/4.jpg",
                  "sambanada/5.jpg",
                ]}
                content="Evento que nasceu com o propósito de reunir amantes do samba, e que transcende barreiras e une pessoas em torno de uma paixão comum: a música brasileira. Proporcionando momentos de alegria, descontração e muita dança. "
              />
              <SocialCard
                title="Danada de Lata"
                carouselImgs={[
                  "dnd-de-lata/1.jpg",
                  "dnd-de-lata/2.jpg",
                  "dnd-de-lata/3.jpg",
                  "dnd-de-lata/4.jpg",
                  "dnd-de-lata/5.jpg",
                ]}
                content="Fundado no ano de 2013 fazendo parte de sua vertente social,
                que visa o impacto ambiental e social, além de ser totalmente
                sem fins lucrativos e com público atingido de aproximadamente
                50 crianças por edição."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
