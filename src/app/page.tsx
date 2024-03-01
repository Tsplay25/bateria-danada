"use client";

import SocialCard from "@/components/SocialCard";
import PhoneMaskInput from "@/functions/PhoneMaskInput";
import { useState } from "react";
import {
  useForm,
  FormProvider,
  SubmitHandler,
  SubmitErrorHandler,
} from "react-hook-form";
import axios from "axios";

type FormData = {
  id: number;
  name: string;
  phone: string;
  email: string;
  message?: string;
};

export default function Home() {
  const methods = useForm<FormData>({ mode: "onBlur" });
  const [phone, setPhone] = useState("");

  const errors = methods.formState.errors;

  const handlePhoneChange = (value: string) => {
    setPhone(value);
  };

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    try {
      const response = await axios.post("http://localhost:5173/create", data);
      methods.reset({
        name: "",
        email: "",
        message: "",
      });
      setPhone("");
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
    }
  };

  const onError: SubmitErrorHandler<FormData> = (errors) => {
    console.log(errors);
  };

  return (
    <>
      {/* hero section */}
      <section
        className="flex flex-col items-center justify-center bg-hero-pattern bg-cover bg-no-repeat bg-center h-[700px] max-w-full text-white mx-auto py-16 overflow-hidden"
        id="hero"
      >
        <div className="flex items-center justify-center max-w-7xl">
          <div className="flex flex-col items-start gap-9 z-10 p-9 absolute md:static">
            <h1 className="text-blue-light font-edo text-5xl w-full">
              Bateria Danada Unifei
            </h1>

            <p className="font-sugo leading-5 max-w-96 text-lg md:text-2xl">
              A Bateria Danada Unifei carrega no peito o nome da Universidade
              Federal de Itajubá.
            </p>
            <p className="font-sugo leading-5 max-w-96 text-lg md:text-2xl">
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
      <section
        className="flex flex-col items-center justify-center bg-sobre-img bg-cover bg-no-repeat bg-center bg-fixed text-white"
        id="about"
      >
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
      <section
        className="flex items-center justify-center bg-strand-rabbits bg-cover bg-center bg-no-repeat max-w-full text-white gap-6"
        id="strands"
      >
        <div className="flex flex-col items-center justify-center py-16">
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-sugo text-center text-5xl lg:text-7xl">
              Vertentes Musicais
            </h2>
            <span className="font-sugo text-3xl text-center">
              Conheça nossos ritmos!
            </span>
          </div>

          <div className="flex flex-col flex-wrap mdlg:flex-nowrap md:gap-8 px-2">
            <div className="flex flex-wrap mdlg:flex-nowrap items-center justify-center md:gap-8 mdlg:w-[760px] lg:w-[1024px]">
              {/* School and Games */}
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
                        Introdutória para o ensino de samba a novos ritmistas,
                        visando a apresentação em eventos universitários e
                        torcida em jogos
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Competition */}
              <div className="flex flex-col items-center justify-center bg-strand-ink bg-contain bg-center bg-no-repeat w-full h-[300px] sm:h-[400px] max-h-[600px]">
                <div className="flex flex-col items-center justify-center gap-3 max-w-72 md:max-w-96">
                  <h3 className="font-sugo text-center text-2xl lg:text-3xl sm:-mt-10">
                    Competição
                  </h3>
                  <div className="max-w-72 relative">
                    <picture>
                      <img
                        src="/img/strands/competition.jpg"
                        className="max-h-44 w-full rounded-xl"
                        alt="Foto dos ritmistas da Bateria Danada Unifei tocando a vertente de escolinha em uma festa universitária."
                      />
                    </picture>
                    <div className="absolute bottom-0 flex items-center justify-center w-full bg-gradient-to-b from-white/0 to-blue-regular/60 rounded-b-xl">
                      <p className="font-sugo leading-4 text-center text-sm mdlg:text-xl mdlg:leading-4  p-4">
                        Vertente com viradas e desenhos complexos compostas para
                        competições em torneio de baterias universitárias
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Show */}
            <div className="flex flex-col items-center justify-center bg-strand-ink bg-contain bg-center bg-no-repeat w-full h-[300px] sm:h-[400px] max-h-[600px]">
              <div className="flex flex-col items-center justify-center gap-3 max-w-72 md:max-w-96">
                <h3 className="font-sugo text-center text-2xl lg:text-3xl sm:-mt-10">
                  Show
                </h3>
                <div className="max-w-72 relative">
                  <picture>
                    <img
                      src="/img/strands/show.jpeg"
                      className="w-full rounded-xl"
                      alt="Foto dos ritmistas da Bateria Danada Unifei tocando a vertente de escolinha em uma festa universitária."
                    />
                  </picture>
                  <div className="absolute bottom-0 flex items-center justify-center w-full bg-gradient-to-b from-white/0 to-blue-regular/60 rounded-b-xl">
                    <p className="font-sugo leading-4 text-center text-sm mdlg:text-xl mdlg:leading-4  p-4">
                      Preparada para shows de maior duração, com voz e
                      transformação de grandes sucessos da música brasileira
                      para a base de samba!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events and Social */}
      <section
        className="flex flex-col items-center justify-center bg-events-social bg-cover bg-center bg-no-repeat max-w-full"
        id="social"
      >
        <div className="flex flex-col items-center justify-center bg-gradient-to-b from-purple-light/40 to-blue-regular/80 bg-cover w-full">
          <div>
            <picture>
              <img
                className="rotate-180 w-full"
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
          <img
            className="rotate-180 w-full"
            src="/img/contact/blue-down-waves.svg"
            alt=""
          />
        </div>
      </section>

      {/* Photos */}
      <section
        className="bg-blue-regular flex flex-col items-center px-5 md:px-28 py-5 gap-9"
        id="photos"
      >
        <h2 className="font-sugo text-center text-5xl lg:text-7xl text-white">
          Seção de Fotos
        </h2>
        <div className="flex flex-col mdlg:flex-row mdlg:gap-14">
          {/* Mural 1 */}
          <div className="bg-white w-fit rounded-t-[20px] mdlg:rounded-[20px] ">
            <div className="grid grid-rows-3 grid-cols-3 items-center pb-2 pt-4 px-4 mdlg:p-4 gap-x-2 gap-y-1 h-full">
              <img
                className=" rounded-[20px] h-full max-h-[160px] w-full object-cover col-span-3"
                src="/img/photos/p1.jpg"
                alt=""
              />
              <img
                className=" rounded-[20px] h-full max-h-[160px] w-full object-cover col-span-2"
                src="/img/photos/p2.jpg"
                alt=""
              />
              <img
                className=" rounded-[20px] h-full max-h-[160px] w-full object-cover"
                src="/img/photos/p3.jpg"
                alt=""
              />
              <img
                className=" rounded-[20px] h-full max-h-[160px] w-full object-cover col-span-3"
                src="/img/photos/p4.jpeg"
                alt=""
              />
              <img
                className=" rounded-[20px] h-full max-h-[160px] w-full object-cover col-span-2"
                src="/img/photos/p5.jpeg"
                alt=""
              />
              <img
                className=" rounded-[20px] h-full max-h-[160px] w-full object-cover"
                src="/img/photos/p6.jpg"
                alt=""
              />
            </div>
          </div>
          {/* Mural 2 */}
          <div className="bg-white w-fit rounded-b-[20px] mdlg:rounded-[20px] ">
            <div className="grid grid-rows-3 grid-cols-3 items-center pb-4 pt-2 px-4 mdlg:p-4 gap-x-2 gap-y-1">
              <img
                className=" rounded-[20px] h-full max-h-[160px] w-full object-cover col-span-3"
                src="/img/photos/p7.jpg"
                alt=""
              />
              <img
                className=" rounded-[20px] h-full max-h-[160px] w-full object-cover col-span-2"
                src="/img/photos/p8.jpg"
                alt=""
              />
              <img
                className=" rounded-[20px] h-full max-h-[160px] w-full object-cover"
                src="/img/photos/p9.jpg"
                alt=""
              />
              <img
                className=" rounded-[20px] h-full max-h-[160px] w-full object-cover col-span-3"
                src="/img/photos/p10.jpg"
                alt=""
              />
              <img
                className=" rounded-[20px] h-full max-h-[160px] w-full object-cover col-span-2"
                src="/img/photos/p11.jpg"
                alt=""
              />
              <img
                className=" rounded-[20px] h-full max-h-[160px] w-full object-cover"
                src="/img/photos/p12.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="bg-drums font-sugo overflow-hidden" id="contact">
        <img
          className="h-16 top-0 object-cover w-full"
          src="/img/contact/blue-down-waves.svg"
          alt=""
        />
        <div className="bg-repeat max-w-7xl mx-auto">
          <h2 className="text-5xl w-full text-center text-white relative z-20">
            Entre em Contato!
          </h2>

          {/* desktop content */}
          <div className="mdlg:grid grid-cols-2">
            {/* call to action desktop */}
            <div className=" hidden mdlg:flex flex-col justify-evenly items-center">
              <span className="text-blue-light font-edo text-[50px] rotate-12 text-center">
                AGENDE SEU SHOW!!
              </span>
              <img
                className="-rotate-[24deg]"
                src="/img/hero/uh-que-azar.png"
                alt=""
              />
            </div>

            {/* Form */}
            <div className="max-w-[760px] mx-5 bg-white rounded-[20px] py-6 px-6 z-10 my-8 flex-1">
              <FormProvider {...methods}>
                <form
                  onSubmit={methods.handleSubmit(onSubmit, onError)}
                  className="flex flex-col relative "
                >
                  <img
                    className="absolute z-10 -top-14 -right-20"
                    src="/img/contact/splash-ink.svg"
                    alt=""
                  />
                  {/* Name */}
                  <div className="flex flex-col z-30">
                    <label
                      className="text-blue-dark md:text-[28px]"
                      htmlFor="name"
                    >
                      Nome:
                    </label>
                    <input
                      {...methods.register("name", {
                        required: "Você precisa digitar seu nome",
                      })}
                      className="text-[14px] font-roboto font-medium bg-gray rounded-[20px] px-3 py-2"
                      type="text"
                      id="name"
                      placeholder="Digite seu nome..."
                    />
                    {errors?.name ? (
                      <span className="text-purple-regular">
                        {errors.name.message}
                      </span>
                    ) : (
                      <span className="invisible">error span</span>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col z-30">
                    <label
                      className="text-blue-dark md:text-[28px]"
                      htmlFor="phone"
                    >
                      Telefone:
                    </label>
                    <PhoneMaskInput
                      value={phone}
                      onChange={handlePhoneChange}
                    />
                    {errors?.phone ? (
                      <span className="text-purple-regular">
                        {errors.phone.message}
                      </span>
                    ) : (
                      <span className="invisible">error span</span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col z-30">
                    <label
                      className="text-blue-dark md:text-[28px]"
                      htmlFor="email"
                    >
                      Email:
                    </label>
                    <input
                      {...methods.register("email", {
                        required: "Você precisa digitar seu email",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Endereço de email inválido",
                        },
                      })}
                      className="text-[14px] font-roboto font-medium bg-gray rounded-[20px] px-3 py-2"
                      type="text"
                      id="email"
                      placeholder="Digite seu email..."
                    />
                    {errors?.email ? (
                      <span className="text-purple-regular">
                        {errors.email.message}
                      </span>
                    ) : (
                      <span className="invisible">error span</span>
                    )}
                  </div>

                  {/* Message */}
                  <div className="flex flex-col z-30">
                    <label
                      className="text-blue-dark md:text-[28px]"
                      htmlFor="message"
                    >
                      Mensagem:
                    </label>
                    <textarea
                      {...methods.register("message")}
                      className="text-[14px] font-roboto font-medium bg-gray rounded-[20px] px-3 py-2"
                      id="message"
                      placeholder="Como podemos ajudar?"
                      cols={30}
                      rows={10}
                    />
                  </div>

                  <button
                    type="submit"
                    className="self-center rounded-lg text-white bg-blue-dark w-3/6 my-4 py-2.5 text-[24px] hover:bg-purple-light hover:scale-105 transition-all"
                  >
                    Enviar
                  </button>
                </form>
              </FormProvider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
