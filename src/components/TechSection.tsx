import {toast} from "react-toastify";
import TechCard from "./TechCard";
import type {TechItem} from "./TechCard";
import YourStackSidebar from "./YourStackSidebar";
import { useEffect, useState } from "react";


export function TechSection(){
    const [technologies, setTechnologies]= useState<TechItem[]>([]);
    const [stack, setStack]= useState<TechItem[]>([]);
    const [loading, setLoading]=useState<boolean>(true);

    useEffect(()=>{
        fetch("/technologies.json")
        .then((res) => res.json())
        .then((data) => {
        setTechnologies(data);
        setLoading(false);
        })
        .catch(()=>{
            toast.error("Failed to load technologies.");
            setLoading(false);

        });
    },[]);

    function handleAddToStack(tech: TechItem){
        if(stack.some((item)=>item.id===tech.id)){
            toast.warn(`${tech.name} is already in your stack!`);
            return;
        }
        setStack([...stack,tech]);
        toast.success(`Added ${tech.name} to your stack!`);
    }
    const handleRemoveFromStack = (id: string) => {
    const itemToRemove = stack.find((item) => item.id === id);
    setStack(stack.filter((item) => item.id !== id));
    if (itemToRemove) {
      toast.info(`Removed ${itemToRemove.name} from stack.`);
    }
    };

    const handleRemoveAll = () => {
    setStack([]);
    toast.error("Cleared all technologies from stack!");
    };

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-8">
                <h2 className="text-3xl font-extrabold text-slate-900">
                    Explore the{" "}
                    <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                    Technologies
                    </span>
                </h2>

                <p className="text-slate-500 text-sm mt-1">
                 Pick one technology per category to build your ideal stack.
                </p>
            </div>
            {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="w-10 h-10 border-4 border-slate-200 border-t-pink-500 rounded-full animate-spin"></div>
        </div>) : (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech) => (
              <TechCard
                key={tech.id}
                tech={tech}
                onAdd={handleAddToStack}
                isAdded={stack.some((item) => item.id === tech.id)}
              />
            ))}
          </div>

          
          <div className="lg:col-span-1">
            <YourStackSidebar
              stack={stack}
              onRemove={handleRemoveFromStack}
              onRemoveAll={handleRemoveAll}
            />
          </div>
        </div>
      )}
        </section>
    )


};
export default TechSection;