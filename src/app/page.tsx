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
        <div className="flex items-center justify-center bg-gradient-to-b from-purple-light/40 to-blue-regular/80 bg-cover h-[700px] max-w-full mx-auto py-16"></div>
      </section>
    </>
  );
}
