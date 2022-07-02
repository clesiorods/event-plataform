import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface LessonProps {
    title: string;
    slug: string;
    avalaableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {

    const isLessonAvaiable = isPast(props.avalaableAt);
    const avaliableDataFormated = format(props.avalaableAt, "EEEE' • 'd ' de 'MMMM' • 'k'h'mm", {
        locale: ptBR
    });

    return (
        <a href="#">
            <span className="text-gray-300">
                {avaliableDataFormated}
            </span>

            <div className="rounded border border-gray-500 p-4 mt-2">
                <header className="flex items-center justify-between">

                    {isLessonAvaiable ?
                        (<span className="text-sm text-blue-500 font-medium flex items-center gap-2">
                            <CheckCircle size={20} />
                            <span className='mt-1'>
                                Conteúdo liberado
                            </span>
                        </span>) :
                        (<span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                            <Lock size={20} />
                            <span className='mt-1'>
                                Em breve
                            </span>
                        </span>)
                    }

                    <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
                        {props.type == 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>

                <strong className="text-gray-200 mt-4 block">
                    {props.title}
                </strong>
            </div>
        </a>
    )
}