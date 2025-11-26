import { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, GlobeAltIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import RosdevLogo from '../assets/ROSDEV.svg'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'
import { translations } from '../data/translations'

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { language, toggleLanguage } = useLanguage()
    const { theme, setTheme } = useTheme()
    const navItems = translations[language].nav.items

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur dark:bg-gray-900/90">
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
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300"
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
                            className="text-sm font-semibold leading-6 text-gray-800 hover:text-[#7C3AED] dark:text-gray-200 dark:hover:text-[#A78BFA]"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="flex items-center gap-2 rounded-full bg-gray-50 px-3 py-2 text-sm font-semibold text-gray-800 shadow-sm ring-1 ring-gray-200 transition hover:bg-white dark:bg-white/10 dark:text-white dark:ring-white/20 dark:hover:bg-white/20"
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? (
                            <SunIcon className="size-5" />
                        ) : (
                            <MoonIcon className="size-5" />
                        )}
                    </button>
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 rounded-full bg-gray-50 px-3 py-2 text-sm font-semibold text-gray-800 shadow-sm ring-1 ring-gray-200 transition hover:bg-white dark:bg-white/10 dark:text-white dark:ring-white/20 dark:hover:bg-white/20"
                    >
                        <GlobeAltIcon aria-hidden="true" className="size-5 text-gray-700 dark:text-gray-300" />
                        <span className="uppercase">{language}</span>
                    </button>
                </div>
            </nav>
            <Transition show={mobileMenuOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50 lg:hidden" onClose={setMobileMenuOpen}>
                    <TransitionChild
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </TransitionChild>

                    <div className="fixed inset-0 z-50 flex">
                        <TransitionChild
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <DialogPanel className="relative ml-auto flex h-full w-full max-w-sm flex-col overflow-y-auto bg-white py-6 shadow-xl dark:bg-gray-900">
                                <div className="px-6 flex items-center justify-between">
                                    <Link to="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                                        <span className="sr-only">ROSDEV GROUP</span>
                                        <img src={RosdevLogo} alt="ROSDEV GROUP" className="h-8 w-auto" />
                                    </Link>
                                    <button
                                        type="button"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300"
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon aria-hidden="true" className="size-6" />
                                    </button>
                                </div>
                                <div className="mt-6 flow-root px-6">
                                    <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-700">
                                        <div className="space-y-2 py-6">
                                            {navItems.map((item) => (
                                                <Link
                                                    key={item.id}
                                                    to={`/#${item.id}`}
                                                    className="-mx-3 block rounded-lg px-3 py-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    {item.label}
                                                </Link>
                                            ))}
                                        </div>
                                        <div className="py-6 flex gap-4">
                                            <button
                                                onClick={() => {
                                                    setTheme(theme === 'dark' ? 'light' : 'dark')
                                                    setMobileMenuOpen(false)
                                                }}
                                                className="-mx-3 flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/10"
                                            >
                                                {theme === 'dark' ? (
                                                    <>
                                                        <SunIcon className="size-5" />
                                                        <span>Light Mode</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <MoonIcon className="size-5" />
                                                        <span>Dark Mode</span>
                                                    </>
                                                )}
                                            </button>
                                            <button
                                                onClick={() => {
                                                    toggleLanguage()
                                                    setMobileMenuOpen(false)
                                                }}
                                                className="-mx-3 flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/10"
                                            >
                                                <GlobeAltIcon aria-hidden="true" className="size-5 text-gray-700 dark:text-gray-300" />
                                                <span className="uppercase">{language}</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </Dialog>
            </Transition>
        </header>
    )
}
