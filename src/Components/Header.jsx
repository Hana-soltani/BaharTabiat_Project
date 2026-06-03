
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(null);

    const toggleSubmenu = (menu) => {
        setOpenSubmenu(openSubmenu === menu ? null : menu);
    };

    return (
        <div>
            <header className="flex items-center sticky top-0 h-16 z-50  w-full    bg-white border-[#d5e6d5] xl:w-full  justify-center px-3 xl:h-20 md:h-16 lg:h-20 border-b-2">
                <div className="flex items-center w-full lg:w-auto justify-between lg:justify-start lg:gap-3">
                    {/* Hamburger Menu */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden text-white text-3xl order-3 lg:order-1"
                        type="button"
                    >
                        <svg className="mr-1 md:mr-4" xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 24 24" fill="#111111">
                            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                        </svg>
                    </button>

                    <Link to="/" className="flex justify-center order-2 lg:hidden mr-12">
                        <img className="w-32 md:w-36" src="/Photos/-210152_temp.jpg" alt="logo" />
                    </Link>

                    <button
                        type="button"
                        className="group md:ml-5 text-white hover:bg-[#81c784] flex items-center gap-2 mr-3 xl:px-4 h-8 px-2 xl:h-10 rounded-md xl:text-sm xl:ml-2 text-xs font-bold bg-[#43A047] whitespace-nowrap transition-transform duration-300 hover:scale-105"
                    >
                        تماس با ما
                        <svg className="xl:w-5 w-3 items-center" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff">
                            <path d="M16.57 22a2 2 0 0 0 1.43-.59l2.71-2.71a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0l-1.6 1.59a7.55 7.55 0 0 1-3-1.59 7.62 7.62 0 0 1-1.59-3l1.59-1.6a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0L2.59 6A2 2 0 0 0 2 7.43 15.28 15.28 0 0 0 6.3 17.7 15.28 15.28 0 0 0 16.57 22zM6 5.41 8.59 8 7.3 9.29a1 1 0 0 0-.3.91 10.12 10.12 0 0 0 2.3 4.5 10.08 10.08 0 0 0 4.5 2.3 1 1 0 0 0 .91-.27L16 15.41 18.59 18l-2 2a13.28 13.28 0 0 1-8.87-3.71A13.28 13.28 0 0 1 4 7.41zM20 11h2a8.81 8.81 0 0 0-9-9v2a6.77 6.77 0 0 1 7 7z" />
                            <path d="M13 8c2.1 0 3 .9 3 3h2c0-3.22-1.78-5-5-5z" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                    <div className="fixed inset-0 bg-black/50 z-50 lg:hidden" onClick={() => setIsMenuOpen(false)}>
                        <div
                            className="fixed right-0 top-0 h-full w-80 bg-gradient-to-b from-[#43A047] via-[#2c4c3b] to-[#2c4c3b] shadow-xl overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-center justify-between p-6 border-b border-black">
                                <button onClick={() => setIsMenuOpen(false)} className="text-black text-3xl" type="button"></button>
                            </div>

                            <nav className="p-6 space-y-4" dir="rtl">
                                <div className="space-y-2">
                                    <div
                                        onClick={() => toggleSubmenu("services")}
                                        className="flex items-center justify-between cursor-pointer text-[#d8b88c] text-lg font-bold hover:text-white"
                                    >
                                        <span>خدمات حقوقی</span>
                                    </div>
                                </div>

                                <div className="border-t border-[#d8b88c]/30 my-4"></div>

                                <div className="space-y-2">
                                    <div
                                        onClick={() => toggleSubmenu("knowledge")}
                                        className="flex items-center justify-between cursor-pointer text-[#d8b88c] text-lg font-bold hover:text-white"
                                    >
                                        <span>دانستنی حقوقی</span>
                                    </div>
                                </div>

                                <div className="border-t border-[#d8b88c]/30 my-4"></div>

                                <div className="space-y-2">
                                    <div
                                        onClick={() => toggleSubmenu("consultation")}
                                        className="flex items-center justify-between cursor-pointer text-[#d8b88c] text-lg font-bold hover:text-white"
                                    >
                                        <span>مشاوره حقوقی</span>
                                    </div>

                                    {openSubmenu === "consultation" && (
                                        <ul className="space-y-2 pr-4 mt-2">
                                            <li><a href="#" className="block text-white hover:text-[#d8b88c] py-2">مشاوره تلفنی</a></li>
                                            <li><a href="#" className="block text-white hover:text-[#d8b88c] py-2">مشاوره حضوری</a></li>
                                            <li><a href="#" className="block text-white hover:text-[#d8b88c] py-2">ارسال درخواست و سوال</a></li>
                                            <li><a href="#" className="block text-white hover:text-[#d8b88c] py-2">آرشیو سوالات حقوقی</a></li>
                                        </ul>
                                    )}
                                </div>

                                <div className="border-t border-[#d8b88c]/30 my-4"></div>

                                <div className="space-y-3">
                                    <a href="#" className="block text-[#d8b88c] hover:text-white py-2 text-lg font-bold">همکاری و استخدام</a>
                                    <div className="border-t border-[#d8b88c]/30"></div>

                                    <Link to="/about" className="block text-[#d8b88c] hover:text-white py-2 text-lg font-bold">
                                        درباره ما
                                    </Link>
                                    <div className="border-t border-[#d8b88c]/30"></div>

                                    <a href="#" className="block text-[#d8b88c] hover:text-white py-2 text-lg font-bold">تماس با ما</a>
                                </div>
                            </nav>
                        </div>
                    </div>
                )}

                <div className="flex items-start xl:gap-14 xl:ml-[7%] whitespace-nowrap hidden lg:flex lg:gap-5">
                    <Link to="/about" className="text-black xl:text-[110%] lg:text-[80%] font-normal hover:text-[#43A047]">
                        درباره ما
                    </Link>

                    <div className="relative group">
                        <div className="flex items-center cursor-pointer text-black text-sm font-semibold hover:text-[#43A047]">
                            <svg className="w-4 mr-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#16a34a">
                                <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z" />
                            </svg>
                            <Link to="/information" className="xl:text-[120%] font-normal lg:text-[90%]">
                                دانستنی ثبت احوال
                            </Link>
                        </div>

                        <ul className="absolute mt-2 w-72 bg-[#43A047] rounded-md opacity-0 group-hover:opacity-100 group-hover:visible transition-all invisible text-right">
                            <li><Link to="/information" className="block px-2 py-2 text-sm font-medium text-[#1c3126] hover:bg-[#f7fafc]">تغییرات سن</Link></li>
                            <li><Link to="/information" className="block px-2 py-2 text-sm font-medium text-[#1c3126] hover:bg-[#f7fafc]">انحصار وراثت</Link></li>
                            <li><Link to="/information" className="block px-2 py-2 text-sm font-medium text-[#1c3126] hover:bg-[#f7fafc]">تحولات زوج ها</Link></li>
                            <li><Link to="/information"className="block px-2 py-2 text-sm font-medium text-[#1c3126] hover:bg-[#f7fafc]">ثبت فوت و ولادت</Link></li>
                            <li><Link to="/information"className="block px-2 py-2 text-sm font-medium text-[#1c3126] hover:bg-[#f7fafc]">تغییر نام و نام خانوادگی</Link></li>
                            <li><Link to="/information" className="block px-2 py-2 text-sm font-medium text-[#1c3126] hover:bg-[#f7fafc]">امور حقوقی و آرا حل اختلاف</Link></li>
                            <li><Link to="/information" className="block px-2 py-2 text-sm font-medium text-[#1c3126] hover:bg-[#f7fafc]">صدور ، تعویض والمثنی برای شناسنامه و کارت ملی</Link></li>
                        </ul>
                    </div>

                    <div className="relative group">
                        <div className="flex items-center cursor-pointer text-black text-sm font-semibold hover:text-[#43A047]">
                            <Link to="/consultationRequest" className="xl:text-[120%] font-normal lg:text-[90%]">
                                درخواست مشاوره
                            </Link>
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="flex items-center cursor-pointer text-black text-sm font-semibold hover:text-[#43A047]">
                            <svg className="w-4 mr-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#16a34a">
                                <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z" />
                            </svg>
                            <Link to="/services" className="xl:text-[120%] font-normal lg:text-[90%]">
                                خدمات ثبت احوال
                            </Link>
                        </div>

                        <ul className="absolute mt-2 w-56 bg-[#81c784] rounded-md opacity-0 group-hover:opacity-100 group-hover:visible transition-all invisible text-right">
                            <li><Link to="/services" className="block px-2 py-2 text-sm font-medium text-[#1c3126] hover:bg-[#f7fafc]">امور مربوط به شناسنامه</Link></li>
                            <li><Link to="/services" className="block px-2 py-2 text-sm font-medium text-[#1c3126] hover:bg-[#f7fafc]">سایر امور هویتی و ثبت احوال</Link></li>
                            <li><Link to="/services" className="block px-2 py-2 text-sm font-medium text-[#1c3126] hover:bg-[#f7fafc]">امور مربوط به کارت هوشمند ملی</Link></li>
                            <li><Link to="/services" className="block px-2 py-2 text-sm font-medium text-[#1c3126] hover:bg-[#f7fafc]">پرونده های مربوط به امور تابعیتی</Link></li>
                        </ul>
                    </div>
                </div>

                <Link to="/" className="lg:flex justify-end xl:ml-20 ml-8 hidden">
                    <img className="xl:w-40 w-32 md:w-36" src="/Photos/-210152_temp.jpg" alt="" />
                </Link>
            </header>
        </div>
    );
}

export default Header;
