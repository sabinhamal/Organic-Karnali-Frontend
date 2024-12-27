import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { dropIn } from "../utils/animations";

const LoginModal = ({ isLoginModalOpen, toggleLoginModal, openSignupModal }) => {

    //Storing form values
    const [formValues, setFormValues] = useState({
        email: "",
        password: ""
    })

    const handleFormChange = (e) => {
        const { name, value } = e.target; //gets name and values of input
        setFormValues((prevValues) => ({
            ...prevValues, [name]: value //update values
        }))
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(formValues)
    }

    //Disable scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = isLoginModalOpen ? "hidden" : "auto";
    }, [isLoginModalOpen]);

    return (
        <AnimatePresence>
            {isLoginModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]"
                    onClick={toggleLoginModal}
                >
                    <motion.div
                        variants={dropIn}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="bg-[#37160b] text-white relative p-12 shadow-lg lg:w-[40rem] md:w-[35rem] w-[25rem] flex flex-col items-center justify-center gap-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <X className="absolute top-6 right-6 cursor-pointer" onClick={toggleLoginModal} />
                        <h2 className="text-2xl uppercase tracking-widest font-semibold mb-16">Login</h2>

                        {/* Input form  */}
                        <form action="/" onSubmit={handleFormSubmit} className="w-full flex flex-col items-center gap-12">

                            {/* Email  */}
                            <div className="relative w-full">
                                <input
                                    type="email"
                                    placeholder=" "
                                    className="w-full text-[0.9rem] peer bg-transparent border-b-[1px] border-[#c5c5c54a] outline-none"
                                    name="email"
                                    value={formValues.email}
                                    onChange={handleFormChange}
                                    required
                                />
                                <motion.label
                                    htmlFor="email"
                                    className="pointer-events-none absolute left-0 origin-[0] text-zinc-300 text-[0.85rem]"
                                    initial={{ bottom: "0.5rem", scale: 1 }}
                                    animate={{
                                        bottom: formValues.email ? "1.5rem" : "0.5rem", // Moves up when there is a value
                                        scale: formValues.email ? 0.75 : 1, // Shrinks when there is a value
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeInOut"
                                    }}
                                >
                                    Email Address*
                                </motion.label>
                            </div>

                            {/* Password  */}
                            <div className="flex flex-col items-end gap-4 w-full">
                                <div className="relative w-full">
                                    <input
                                        type="password"
                                        placeholder=" "
                                        className="w-full text-[0.9rem] peer bg-transparent border-b-[1px] border-[#c5c5c54a] outline-none"
                                        name="password"
                                        value={formValues.password}
                                        onChange={handleFormChange}
                                        required
                                    />
                                    <motion.label
                                        htmlFor="password"
                                        className="pointer-events-none absolute left-0 origin-[0] text-zinc-300 text-[0.85rem]"
                                        initial={{ bottom: "0.5rem", scale: 1 }}
                                        animate={{
                                            bottom: formValues.password ? "1.5rem" : "0.5rem", // Moves up when there is a value
                                            scale: formValues.password ? 0.75 : 1, // Shrinks when there is a value
                                        }}
                                        transition={{
                                            duration: 0.3,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        Password*
                                    </motion.label>
                                </div>
                                <Link to={'/forgotten'} className="text-zinc-300 text-[0.9rem]">Forgot Password?</Link>
                            </div>

                            <button type="submit" className="mt-6 w-full py-4 bg-white text-zinc-600 hover:bg-zinc-200 transition-all tracking-widest">LOGIN</button>
                        </form>

                        {/* SignUp Button*/}
                        <h3
                            onClick={() => {
                                toggleLoginModal();
                                openSignupModal();
                            }}
                            className="text-zinc-300 text-[0.9rem] cursor-pointer">Don't have an account? <span className="text-white font-medium">Sign Up</span></h3>

                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default LoginModal;
