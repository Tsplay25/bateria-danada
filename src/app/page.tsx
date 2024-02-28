"use client"

import SocialCard from "@/components/SocialCard";
import PhoneMaskInput from "@/functions/PhoneMaskInput";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";

type FormData = {
  name: string,
  phone: string,
  email: string,
  message: string,
}

export default function Home() {
  const methods = useForm<FormData>();
  const [phone, setPhone] = useState('');

  const handlePhoneChange = (value: string) => {
    setPhone(value)
  }

  const onSubmit = (data : FormData) => {
    console.log(data);
  }

  return (
    <>
      {/* hero section */}
      <section className="flex items-center justify-center bg-hero-pattern bg-cover bg-no-repeat h-[700px] max-w-full text-white mx-auto py-16 overflow-hidden">
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
      <section className="flex items-center justify-center bg-events-social bg-cover bg-no-repeat max-w-full">
        <div className="flex flex-col items-center justify-center bg-gradient-to-b from-purple-light/40 to-blue-regular/80 bg-cover w-full py-16 px-4 gap-5">
          <h2 className="font-sugo text-5xl w-full text-center  text-white">
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

      {/* Contact form */}
      <section className="bg-drums font-sugo overflow-hidden">
        <img className="h-16 top-0 object-cover w-full" src="/img/contact/blue-down-waves.svg" alt="" />
        <div className="bg-repeat max-w-7xl mx-auto">
          <h2 className="text-5xl w-full text-center text-white relative z-20">
            Entre em Contato!
          </h2>

          {/* desktop content */}
          <div className="mdlg:grid grid-cols-2">
            {/* call to action desktop */}
            <div className=" hidden mdlg:flex flex-col justify-evenly items-center">
              <span className="text-blue-light font-edo text-[50px] rotate-12 text-center">AGENDE SEU SHOW!!</span>
              <img className="-rotate-[24deg]" src="/img/hero/uh-que-azar.png" alt="" />
            </div>
            
            {/* Form */}
            <div className="max-w-[760px] mx-5 bg-white rounded-[20px] py-6 px-6 z-10 my-8 flex-1">
              <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col gap-3 relative ">
                  <img className="absolute z-10 -top-14 -right-20" src="/img/contact/splash-ink.svg" alt="" />
                  {/* Name */}
                  <div className="flex flex-col gap-1.5 z-30">
                      <label className="text-blue-dark md:text-[28px]" htmlFor="name">Nome:</label>
                      <input 
                        {...methods.register("name")}
                        className="text-[14px] font-roboto font-medium bg-gray rounded-[20px] px-3 py-2" 
                        type="text" 
                        id="name" 
                        placeholder="Digite seu nome..." 
                      />
                  </div>
    
                  {/* Phone */}
                  <div className="flex flex-col gap-1.5 z-30">
                      <label className="text-blue-dark md:text-[28px]" htmlFor="phone">Telefone:</label>
                      <PhoneMaskInput  value={phone} onChange={handlePhoneChange}/>
                      {/* <input className="text-[14px] font-roboto font-medium bg-gray rounded-[20px] px-3 py-2" type="text" id="phone" autoComplete="tel" placeholder="(XX) XXXXX-XXXX" onChange={handlePhoneChange} value={phone}/> */}
                  </div>
    
                  {/* Email */}
                  <div className="flex flex-col gap-1.5 z-30">
                      <label className="text-blue-dark md:text-[28px]" htmlFor="email">Email:</label>
                      <input
                        {...methods.register("email")} 
                        className="text-[14px] font-roboto font-medium bg-gray rounded-[20px] px-3 py-2" 
                        type="text" 
                        id="email" 
                        placeholder="Digite seu email..." 
                      />
                  </div>
                  
                  {/* Message */}
                  <div className="flex flex-col gap-1.5 z-30">
                      <label className="text-blue-dark md:text-[28px]" htmlFor="message">Mensagem:</label>
                      <textarea
                        {...methods.register("message")} 
                        className="text-[14px] font-roboto font-medium bg-gray rounded-[20px] px-3 py-2" 
                        id="message" 
                        placeholder="Como podemos ajudar?" 
                        cols={30} 
                        rows={10}
                      />
                  </div>
    
                  <button className="self-center rounded-lg text-white bg-blue-dark w-3/6 my-4 py-2.5 text-[24px] hover:bg-purple-light hover:scale-105 transition-all">
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
