import SocialCard from "@/components/SocialCard";
import { Content } from "next/font/google";

export default function Home() {
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
      <section className="flex flex-col items-center justify-center bg-sobre-img bg-cover bg-no-repeat bg-center bg-fixed text-white gap-6">
        <div className="py-10">
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
        <div className="">
          <picture>
            <img
              src="/img/strands/section-change.png"
              alt="Mancha de tinta roxa"
            />
          </picture>
        </div>
      </section>

      {/* Strands */}
      <section className="flex flex-col items-center justify-center bg-strands bg-cover bg-no-repeat bg-center text-white py-16 gap-6">
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-sugo text-center text-5xl lg:text-7xl">
            Vertentes Musicais
          </h2>
        </div>
      </section>

      {/* Events and Social */}
      <section className="flex items-center justify-center bg-events-social bg-cover bg-center bg-no-repeat max-w-full">
        <div className="flex flex-col items-center justify-center bg-gradient-to-b from-purple-light/40 to-blue-regular/80 bg-cover w-full py-16 px-4 gap-5">
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
      </section>
    </>
  );
}
