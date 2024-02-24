export default function Home() {
  return (
    <>
      {/* hero  */}
      <section className="flex items-center justify-center bg-hero-pattern bg-cover bg-no-repeat h-[700px] max-w-full text-white mx-auto py-16">
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
      </section>

      {/* Events and Social */}
      <section className="flex items-center justify-center bg-events-social bg-cover bg-no-repeat h-[700px] max-w-full text-white">
        <div className="flex flex-col items-center justify-center bg-gradient-to-b from-purple-light/40 to-blue-regular/80 bg-cover h-[700px] max-w-full py-16 gap-5">
          <h2 className="font-sugo text-5xl w-full text-center">
            Eventos e Social
          </h2>

          <div className="flex flex-col items-center justify-between w-full gap-14">
            <div className="flex flex-col gap-4 bg-white/70 rounded-3xl p-4">
              <h3 className="text-blue-dark font-sugo text-3xl text-center w-full">
                Sambanada
              </h3>

              {/* Carousel */}
              <div className="bg-blue-light">.</div>

              <p className="text-blue-dark font-sugo text-xl text-center leading-5">
                Evento que nasceu com o propósito de reunir amantes do samba, e
                que transcende barreiras e une pessoas em torno de uma paixão
                comum: a música brasileira. Proporcionando momentos de alegria,
                descontração e muita dança.
              </p>
            </div>

            <div className="bg-white/70">CARD 2</div>
          </div>
        </div>
      </section>
    </>
  );
}
