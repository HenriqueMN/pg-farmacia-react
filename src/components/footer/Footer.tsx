import { FacebookLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react"

function Footer(){
    return (
        <>
        <div className="bg-slate-200 h-24"></div>
        <div className="flex justify-center bg-slate-800 text-white">
            <div className="container flex flex-col items-center py-4">
                <p className="text-xl font-bold">
                    Farmácia Virtual | &copy; 2024
                </p>
                <p className="text-lg">Acesse nossas redes sociais:</p>
                <div className="flex gap-2">
                    <LinkedinLogo size={48} weight="bold" />
                    <InstagramLogo size={48} weight="bold" />
                    <FacebookLogo size={48} weight="bold" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer