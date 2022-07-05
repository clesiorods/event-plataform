import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react";
import '@vime/core/themes/default.css'

export function Video() {
    return (
        <div className="flex-1" >
            <div className="bg-black flex justify-center">
                <div className="h-full w-full max-w-[1100] max-h-[60vh] aspect-video">
                    <Player>
                        <Youtube videoId="Exg8YBHB02s" />
                        <DefaultUi/>
                    </Player>
                </div>
            </div>

            <div className="p-8 max-[1100px] mx-auto">

                <section className="flex items-start gap-16">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold">
                            Aula 01 - Abertura do Ignite Lab
                        </h1>
                        <p className="mt-4 text-gray-200 leading-relaxed">
                            O que temos que ter sempre em mente é que a mobilidade dos capitais internacionais agrega valor aoestabelecimento do orçamento setorial
                        </p>

                        <div className="flex items-center gap-4 mt-6">
                            <img 
                                src="https://github.com/clesiorods.png" 
                                alt=""
                                className="h-16 w-16 rounded-full border-2 border-blue-500"
                            />
                            <div className="leading-relaxed">
                                <strong className="font-bold text-2xl block" >Clesio Rodrigues</strong>
                                <span className="text-gray-200 text-sm block" >Web Developer</span>
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-col gap-4">
                        <a href="" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
                            <DiscordLogo size={24}/>
                            Comunidade do Discord
                        </a>
                        <a href="" className="p-4 text-sm border text-blue-500 border-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors">
                            <Lightning size={24}/>
                            Acesse o desafio
                        </a>
                    </div>
                </section>

                <section className="gap-8 mt-20 grid grid-cols-2">

                    <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-green-700 h-full p-6 flex items-center">
                            <FileArrowDown size={40}/>
                        </div>
                        <div className="py-6 leading-relaxed ">
                            <strong>Material Complemetar</strong>
                            <p className="text-sm text-gray-200 mt-2">Acesse o material compelmentar para acelerar seu desenvolvimento</p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24}/>
                        </div>
                    </a>


                    <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-green-700 h-full p-6 flex items-center">
                            <FileArrowDown size={40}/>
                        </div>
                        <div className="py-6 leading-relaxed ">
                            <strong>Wallpapers exclusivos</strong>
                            <p className="text-sm text-gray-200 mt-2">Baixe wallpapers exclusivos e personalize sua máquina</p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24}/>
                        </div>
                    </a>

                </section>
            </div>
        </div>
    )
}