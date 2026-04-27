import Image from "next/image";


export default function GameCard({game}) {
    const {id, name, background_image}= game; 
    return (
        <div className="card bg-base-100 shadow-sm flex flex-col h-full">
                <Image
                    src={background_image}
                    width= {250}
                    height={150}
                    alt="game"
                    className="w-full h-auto mx-auto"
                     />
            <div className="card-body flex flex-col justify-end mt-auto">
                <h2 className="card-title">
                    {name}                    
                </h2>                
                <div className="card-actions justify-between">                    
                    <div>Platform</div>
                    <div className="badge badge-secondary">NEW</div>
                </div>
            </div>
        </div>
    )
}