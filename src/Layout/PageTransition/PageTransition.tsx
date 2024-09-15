import { AnimatePresence, motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation()
  const currentPathname = location.pathname
  return (
    <AnimatePresence>
      <div key={currentPathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: 'easeInOut' }
          }}
          className='h-screen w-screen fixed bg-black top-0 pointer-events-none'
        />
      </div>
      {children}
    </AnimatePresence>
  )
}

export default PageTransition
