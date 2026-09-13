function Hero(){
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2  gap-8 lg:gap-12 items-center">
                <div className="flex flex-col items-start space-y-6 text-left">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900">
                        Build Your Ideal <br className="hidden sm:inline"/>
                        <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h1>
                        <p className="text-slate-600 text-base sm:text-lg max-w-xl">
                        Explore frontend, backend, database, and tooling options, compare
                        them side by side, and put together the stack that fits your next
                         project.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-2">
                            <button className="px-6 py-3 rounded-lg text-white font-medium shadow-md hover:shadow-lg transition-all transform hover:- translate-y-0.5 bg-linear-to-r from-orange-500 to-pink-600">
                                Explore Technologies
                            </button>

                            <button className="px-6 py-3 rounded-lg font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-all shadow-sm">Learn More</button>
                        </div>
                        
                </div>
                <div className="flex justify-center md:justify-end">
                    <img src="/banner-stack.png" alt="Banner" className="w-full max-w-md lg:max-w-lg object-contain"/>
                </div>
            </div>
        </section>
    )
}

export default Hero;