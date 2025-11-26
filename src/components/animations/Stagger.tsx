import { motion } from 'framer-motion'

interface Props {
    children: React.ReactNode
    className?: string
    delay?: number
}

export const StaggerContainer = ({ children, className, delay = 0 }: Props) => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: delay,
            },
        },
    }

    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export const StaggerItem = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    }

    return (
        <motion.div variants={item} className={className}>
            {children}
        </motion.div>
    )
}
