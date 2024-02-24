export default function Footer() {
    return (
        <div className="bg-blue-dark w-screen px-5 text-white font-sugo">
            <footer className="flex flex-col mx-auto max-w-7xl">
                <div className="flex flex-col md:flex-row md:justify-evenly items-center py-3">
                    {/* Unifei */}
                    <div className="space-y-4">
                        <picture className="flex justify-around">
                            <img className="w-20" src="/img/footer/unifei-logo.svg" alt="Logotipo da Universidade Federal de Itajubá" />
                            <img className="w-20" src="/img/footer/danada-logo.svg" alt="Logotipo da bateria danada com um coelho de óculos segurando um surdo de marcação na mão direita" />
                        </picture>
                        <div className="flex flex-col items-center leading-4">
                            <span className="text-[20px]">Universidade Federal De Itajubá</span>
                            <span>Avenida BPS, Bairro Pinheirinho</span>
                            <span>Itajubá - MG</span>
                        </div>
                    </div>

                    <div className="bg-white w-[1px] h-32 hidden mdlg:block" />
                    {/* social media */}
                    <div className="mt-5 mb-8 space-y-4">
                        <span className="text-[24px] md:text-[36px]">Siga-nos nas redes sociais!</span>
                        <div className="flex flex-col lg:flex-row justify-evenly items-center md:items-start lg:items-center gap-x-8 gap-y-4">
                            <a className="flex gap-2 items-center" href="mailto:bateriadanadaunifei@gmail.com">
                                <span>bateriadanadaunifei<span className="font-mono">@</span>gmail.com</span>
                                <img className="hover:scale-105 transition-all md:-order-1 md:w-6 lg:w-9" src="/img/footer/email-icon.svg" alt="" />
                            </a>
                            <a className="flex gap-2 items-center" href="https://www.instagram.com/bateriadanadaunifei/">
                                <span><span className="font-mono">@</span>bateriadanadaunifei</span>
                                <img className="hover:scale-105 transition-all md:-order-1 md:w-6 lg:w-auto" src="/img/footer/instagram-icon.svg" alt="" />
                            </a>
                            <a className="flex gap-2 items-center" href="https://www.facebook.com/bateriadanada.unifei/">
                                <span>Bateria Danada Unifei</span>
                                <img className="hover:scale-105 transition-all md:-order-1 md:w-6 lg:w-auto" src="/img/footer/facebook-icon.svg" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* bottom byron */}
                <div className="">
                    <hr />
                    <img className="px-14 pt-2 mx-auto" src="/img/footer/devbsol.svg" alt="Logotipo por extenso da empresa byron solutions" />
                </div>
            </footer>

        </div>
    )
};
