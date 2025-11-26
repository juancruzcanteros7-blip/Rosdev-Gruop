import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, GlobeAltIcon } from '@heroicons/react/24/outline'
import RosdevLogo from '../assets/ROSDEV.svg'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../data/translations'

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { language, toggleLanguage } = useLanguage()
    const navItems = translations[language].nav.items

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">ROSDEV GROUP</span>
                        <img src={RosdevLogo} alt="ROSDEV GROUP" className="h-8 w-auto" />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-10">
                    {navItems.map((item) => (
                        <Link
                            key={item.id}
                            to={`/#${item.id}`}
                            className="text-sm font-semibold leading-6 text-gray-800 hover:text-[#7C3AED]"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 rounded-full bg-gray-50 px-3 py-2 text-sm font-semibold text-gray-800 shadow-sm ring-1 ring-gray-200 transition hover:bg-white"
                    >
                        <GlobeAltIcon aria-hidden="true" className="size-5 text-gray-700" />
                        <span className="uppercase">{language}</span>
                    </button>
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-40" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                            <span className="sr-only">ROSDEV GROUP</span>
                            <img src={RosdevLogo} alt="ROSDEV GROUP" className="h-8 w-auto" />
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.id}
                                        to={`/#${item.id}`}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                            <div className="py-6">
                                <button
                                    onClick={() => {
                                        toggleLanguage()
                                        setMobileMenuOpen(false)
                                    }}
                                    className="-mx-3 flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    <GlobeAltIcon aria-hidden="true" className="size-5 text-gray-700" />
                                    <span className="uppercase">{language}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}
