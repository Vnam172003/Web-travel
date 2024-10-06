import { motion } from 'framer-motion'

interface ButtonAdntProps {
  children?: React.ReactNode
  label: string
  style?: string
  onClick?: () => void
}
const Button = ({ label, style, onClick, children }: ButtonAdntProps) => {
  return (
    <motion.button
      type='submit'
      className={`w-full bg-primary text-md text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary/90 transition ${style}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      {`${label}`}
      {children}
    </motion.button>
  )
}

export default Button
