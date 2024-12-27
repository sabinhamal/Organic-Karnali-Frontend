import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";

const SearchModal = ({ isSearchOpen, toggleSearch }) => {

    useEffect(() => {
        document.body.style.overflow = isSearchOpen ? "hidden" : "auto";
    }, [isSearchOpen])

    return (
        <AnimatePresence>
            {isSearchOpen && (
                <div
                    className="fixed w-screen h-screen inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]"
                    onClick={toggleSearch}
                >
                    <motion.div
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: -500,
                            },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.5,
                                    ease: "easeInOut",
                                },
                            },
                            exit: {
                                opacity: 0,
                                y: -200,
                                transition: {
                                    duration: 0.5,
                                    ease: "easeInOut",
                                },
                            },
                        }}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="bg-[#37160b]/90 text-white relative p-12 shadow-lg w-full h-full flex flex-col items-center justify-center gap-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="md:text-xl absolute bottom-12 cursor-pointer" onClick={toggleSearch} >
                            Close
                        </button>

                        {/* Search Box  */}
                        <form action="/" className="w-full flex items-center justify-center">
                            <div className="flex items-start md:gap-4 gap-2 border-b-[#d4ccca] border-b-[1px] md:w-[65%] w-full">
                                <button type="submit"><Search className="text-[#d4ccca] mt-0.5 md:size-[22px] size-[16px]" /></button>
                                <input type="text" name="search" placeholder="Search Products..." className="pb-2 text-[0.85rem] md:text-[1.1rem] placeholder-[#d4ccca] outline-none bg-transparent text-[#d4ccca]">
                                </input>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}

export default SearchModal