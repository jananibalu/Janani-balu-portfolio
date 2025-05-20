export const fadeIn = (delay: number = 0) => ({
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay,
            duration: 0.6,
            ease: 'easeInOut'
        }
    }
});

export const slideUp = (delay: number = 0) => ({
    hidden: {
        y: 30,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay,
            duration: 0.6,
            ease: 'easeOut'
        }
    }
});

export const slideDown = (delay: number = 0) => ({
    hidden: {
        y: -30,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay,
            duration: 0.6,
            ease: 'easeOut'
        }
    }
});

export const slideRight = (delay: number = 0) => ({
    hidden: {
        x: -30,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay,
            duration: 0.6,
            ease: 'easeOut'
        }
    }
});

export const slideLeft = (delay: number = 0) => ({
    hidden: {
        x: 30,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay,
            duration: 0.6,
            ease: 'easeOut'
        }
    }
});

export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

export const staggerItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: 'easeOut'
        }
    }
};

export const scaleUp = (delay: number = 0) => ({
    hidden: {
        scale: 0.8,
        opacity: 0
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            delay,
            duration: 0.6,
            ease: 'easeOut'
        }
    }
});