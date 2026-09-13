
function Footer(){
    return (
        <footer className="bg-white border-t border-slate-100 pt-16 pb-8 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
                    <div className="md:col-span-2 space-y-4">
                        <div className="flex items-center gap-2">
                            <img src="./logo-text.png" alt="logo" />
                        </div>
                        <p className="text-slate-400 text-sm max-w-sm">
                            Curated tools, technologies, and resources for developers building modern software.
                        </p>
                        <div className="flex fap-4 text-xs font-semibold text-slate=400 gap-4">
                            <a href="github.com" className="hover:text-slate-600">Github</a>
                            <a href="x.com" className="hover:text-slate-600">Twitter</a>
                            <a href="linkedin.com" className="hover:text-slate-600">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;