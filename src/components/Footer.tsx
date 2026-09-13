
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

                    <div>
                        <h4 className="font-bold text-slate-900 text-xs mb-4">PRODUCT</h4>
                        <ul className="space-y-2.5 text-sm text-slate-500">
                            <li><a href="#home" className="hover:text-slate-900">HOME</a></li>
                            <li><a href="#technologies" className="hover:text-slate-900">TECHNOLOGIES</a></li>
                            <li><a href="#projects" className="hover:text-slate-900">PROJECTS</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 text-xs mb-4">COMPANY</h4>
                        <ul className="space-y-2.5 text-sm text-slate-500">
                            <li><a href="#" className="hover:text-slate-900">ABOUT</a></li>
                            <li><a href="#" className="hover:text-slate-900">CONTACT</a></li>
                            <li><a href="#" className="hover:text-slate-900">CAREERS</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 text-xs mb-4">LEGAL</h4>
                        <ul className="space-y-2.5 text-sm text-slate-500">
                            <li><a href="#" className="hover:text-slate-900">PRIVACY POLICY</a></li>
                            <li><a href="#" className="hover:text-slate-900">TERMS OF SERVICES</a></li>
                            
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
                    <p>© 2026 DevStack. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-slate-600">Privacy</a>
                        <a href="#" className="hover:text-slate-600">Terms</a>
                    </div>
                    
                </div>
            </div>
        </footer>
    )
}

export default Footer;