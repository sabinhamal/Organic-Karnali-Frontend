//This file is to store pre built animations for use

export const dropIn = {
    hidden: {
        opacity: 0,
        y: -50,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            ease: "easeInOut",
        },
    },
    exit: {
        opacity: 0,
        y: -50,
        transition: {
            duration: 0.3,
            ease: "easeInOut",
        },
    },
}

export const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 100, y: 0 },
    transition: {
        duration: 0.8,
        ease: "easeInOut"
    },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.5 },
}

export const fadeInDown = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 100, y: 0 },
    transition: {
        duration: 0.8,
        ease: "easeInOut"
    },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.5 },
}