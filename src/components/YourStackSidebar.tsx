import type { TechItem } from "./TechCard";

interface YourStackSidebarProps {
    stack: TechItem[];
    onRemove: (id:string)=>void;
    onRemoveAll: ()=>void;
}

export function YourStackSidebar ({stack , onRemove,onRemoveAll}: YourStackSidebarProps){
    return (
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm h-fit">
            <h2 className="text-xl font-bold text-slate-900">Your Stack</h2>
            <p className="text-sm text-slate-400 mb-6">
                {stack.length > 0 ? `${stack.length} Technology Selected` : "No technologies selected yet."}
            </p>

            {stack.length===0? (
                <div className="border-2 border-dashed border-slate-100 rounded-xl p-8 text-center">
                    <p className="text-slate-400 text-sm">Your stack is empty.</p>

                </div>
            ): (
                <div className="flex flex-col gap-3">
                    {stack.map((item)=>(
                        <div key={item.id} className="flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-white">
                            <div className="flex items-center gap-3">
                                <img src={item.icon} alt={item.name} className="w-8 h-8 object-contain" />
                                <div>
                                    <h4 className="font-semibold text-sm text-slate-900 leading-none">{item.name}</h4>
                                    <span className="text-xs text-slate-400">{item.category}</span>
                                </div>
                            </div>
                            <button
                            onClick={() => onRemove(item.id)}
                            className="p-1"
                            aria-label={`Remove ${item.name}`}
                            >
                            <i className="fa-solid fa-xmark text-red-500 hover:text-red-600 transition-colors"></i>
                            </button>
                        </div>
                    ))}
                    <button
                        onClick={onRemoveAll}
                        className="w-full mt-4 py-2.5 rounded-xl border border-red-200 text-red-500 font-semibold hover:bg-red-50 transition-colors cursor-pointer"
                    >
                        Remove All
                    </button>
                </div>
            )
            }
        </div>
    );

};

export default YourStackSidebar;