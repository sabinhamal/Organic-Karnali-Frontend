import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { dropIn } from "../utils/animations";

const SignupModal = ({ isSignupModalOpen, toggleSignupModal, openLoginModal }) => {

    //Storing form values
    const [isPasswordMatch, setIsPasswordMatch] = useState(true);
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: "",
        phoneNumber: ""
    })

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues, [name]: value    //store values to their own field
        }))
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (formValues.password != formValues.passwordConfirm) {
            return setIsPasswordMatch(false);
        }
        toggleSignupModal();
        setIsPasswordMatch(true)
        console.log(formValues)
    }

    //Disable scroll when modal is open
    useEffect(() => {
        if (isSignupModalOpen) {
            document.body.style.overflow = "hidden"; // Disable scroll
        } else {
            document.body.style.overflow = "auto"; // Re-enable scroll
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isSignupModalOpen]);

    return (
        <AnimatePresence>
            {isSignupModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]"
                    onClick={toggleSignupModal}
                >
                    <motion.div
                        variants={dropIn}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="bg-[#37160b] text-white relative p-12 shadow-lg lg:w-[40rem] md:w-[35rem] w-[25rem] flex flex-col items-center justify-center gap-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <X className="absolute top-6 right-6 cursor-pointer" onClick={toggleSignupModal} />
                        <h2 className="text-2xl uppercase tracking-widest font-semibold mb-16">Signup</h2>

                        {/* Input form  */}
                        <form action="/" onSubmit={handleFormSubmit} className="w-full flex flex-col items-center gap-12">

                            {/* First Name */}
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    placeholder=" "
                                    className="w-full text-[0.9rem] peer bg-transparent border-b-[1px] border-[#c5c5c54a] outline-none"
                                    name="firstName"
                                    onChange={handleFormChange}
                                    value={formValues.firstName}
                                    required
                                />
                                <motion.label
                                    htmlFor="firstName"
                                    className="pointer-events-none absolute left-0 origin-[0] text-zinc-300 text-[0.85rem]"
                                    initial={{ bottom: "0.5rem", scale: 1 }}
                                    animate={{
                                        bottom: formValues.firstName ? "1.5rem" : "0.5rem", // Moves up when there is a value
                                        scale: formValues.firstName ? 0.75 : 1, // Shrinks when there is a value
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeInOut"
                                    }}
                                >
                                    First Name*
                                </motion.label>
                            </div>

                            {/* Last Name */}
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    placeholder=" "
                                    className="w-full text-[0.9rem] peer bg-transparent border-b-[1px] border-[#c5c5c54a] outline-none"
                                    name="lastName"
                                    onChange={handleFormChange}
                                    value={formValues.lastName}
                                    required
                                />
                                <motion.label
                                    htmlFor="lastName"
                                    className="pointer-events-none absolute left-0 origin-[0] text-zinc-300 text-[0.85rem]"
                                    initial={{ bottom: "0.5rem", scale: 1 }}
                                    animate={{
                                        bottom: formValues.lastName ? "1.5rem" : "0.5rem", // Moves up when there is a value
                                        scale: formValues.lastName ? 0.75 : 1, // Shrinks when there is a value
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeInOut"
                                    }}
                                >
                                    Last Name*
                                </motion.label>
                            </div>

                            {/* Email */}
                            <div className="relative w-full">
                                <input
                                    type="email"
                                    placeholder=" "
                                    className="w-full text-[0.9rem] peer bg-transparent border-b-[1px] border-[#c5c5c54a] outline-none"
                                    name="email"
                                    onChange={handleFormChange}
                                    value={formValues.email}
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
                                    E-Mail*
                                </motion.label>
                            </div>

                            {/* Phone Number */}
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    placeholder=" "
                                    className="w-full text-[0.9rem] peer bg-transparent border-b-[1px] border-[#c5c5c54a] outline-none"
                                    name="phoneNumber"
                                    onChange={handleFormChange}
                                    value={formValues.phoneNumber}
                                    required
                                />
                                <motion.label
                                    htmlFor="phoneNumber"
                                    className="pointer-events-none absolute left-0 origin-[0] text-zinc-300 text-[0.85rem]"
                                    initial={{ bottom: "0.5rem", scale: 1 }}
                                    animate={{
                                        bottom: formValues.phoneNumber ? "1.5rem" : "0.5rem", // Moves up when there is a value
                                        scale: formValues.phoneNumber ? 0.75 : 1, // Shrinks when there is a value
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeInOut"
                                    }}
                                >
                                    Phone Number*
                                </motion.label>
                            </div>

                            {/* Password */}
                            <div className="relative w-full">
                                <input
                                    type="password"
                                    placeholder=" "
                                    className="w-full text-[0.9rem] peer bg-transparent border-b-[1px] border-[#c5c5c54a] outline-none"
                                    name="password"
                                    onChange={handleFormChange}
                                    value={formValues.password}
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

                            {/* Password Confirm */}
                            <div className="relative w-full">
                                <input
                                    type="password"
                                    placeholder=" "
                                    className="w-full text-[0.9rem] peer bg-transparent border-b-[1px] border-[#c5c5c54a] outline-none"
                                    name="passwordConfirm"
                                    onChange={handleFormChange}
                                    value={formValues.passwordConfirm}
                                    required
                                />
                                <motion.label
                                    htmlFor="passwordConfirm"
                                    className="pointer-events-none absolute left-0 origin-[0] text-zinc-300 text-[0.85rem]"
                                    initial={{ bottom: "0.5rem", scale: 1 }}
                                    animate={{
                                        bottom: formValues.passwordConfirm ? "1.5rem" : "0.5rem", // Moves up when there is a value
                                        scale: formValues.passwordConfirm ? 0.75 : 1, // Shrinks when there is a value
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeInOut"
                                    }}
                                >
                                    Confirm Password*
                                </motion.label>
                            </div>

                            <button type="submit" className="mt-6 w-full py-4 bg-white text-zinc-600 hover:bg-zinc-200 transition-all tracking-widest">SIGN UP</button>
                        </form>

                        {/* LogIn Button */}
                        <h3
                            onClick={() => {
                                toggleSignupModal();
                                openLoginModal();
                            }}
                            className="text-zinc-300 text-[0.9rem] cursor-pointer">Already have an account? <span className="text-white font-medium">Log In</span></h3>

                        {/* Toast  */}
                        <>
                            <div className={`border border-zinc-400  rounded-lg min-w-80 fixed bottom-4 right-4 ${isPasswordMatch ? "invisible opacity-0 translate-y-4" : "visible opacity-100 translate-y-0"} flex items-center justify-between transition-all transform px-4 py-3 bg-zinc-950 text-white`}>
                                <h1 className="text-[0.8rem]">Passwords do not match.</h1>
                                <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setIsPasswordMatch(true)} width="18" height="18" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x stroke-zinc-400 cursor-pointer"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                            </div>
                        </>
                    </motion.div>
                </div>
            )}

        </AnimatePresence>
    )
}

export default SignupModal