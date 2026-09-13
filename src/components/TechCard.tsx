export interface TechItem{
    id: string;
    name:string;
    category:string;
    description:string;
    icon: string;
    rating:number;
    difficulty:string;
    badge:string;
}

interface TechCardProps{
    tech: TechItem;
    onAdd: (tech:TechItem) => void;
    isAdded: boolean;

}

const TechCard: React.FC<TechCardProps> = ({ tech, onAdd, isAdded}) =>{
    return (
        <div className ="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative">
            <div className="flex justify-end mb-2">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-sky-50 text-sky-500 border border-sky-100">
                    {tech.badge}
                </span>
            </div>

            <div>
                <div className="w-12 h-12 mb-4 flex items-center justify-center">
                    <img src={tech.icon} alt={tech.name} className="max-w-full max-h-full object-contain"/>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{tech.name}</h3>
                <p className="text-slate-500 text-sm mb-6">{tech.description}</p>
            </div>

            <div>
                <div className="flex items-center justify-between text-xs font-medium text-slate-500 mb-4 pt-4 border-t border-slate-50">
                    <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">{tech.category}</span>
                    <span>{tech.difficulty}</span>
                    <span className="flex items-center gap-1 text-amber-500 font-semibold">
                        <i className="fa-notdog-duo fa-solid fa-star"></i> {tech.rating}
                    </span>
                </div>

                <button onClick={()=>onAdd(tech)} disabled={isAdded} className="w-full py-2.5 rounded-xl font-semibold transition-all cursor-pointer">
                    {isAdded? "Added to Stack" : "Add to Stack"}

                </button>
            </div>
        </div>
    )
}

export default TechCard;