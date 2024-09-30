import { motion } from 'framer-motion'

const svgVariants = {
  hidden: { x: -500 },
  visible: {
    x: 0,
    transition: {
      duration: 1,
      delay: 0.5
    }
  }
}

const Logo = () => {
  return (
    <div>
      <motion.svg
        variants={svgVariants}
        initial='hidden'
        animate='visible'
        width='87'
        height='19'
        viewBox='0 0 87 19'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M4.684 18.5C3.468 18.5 2.524 18.18 1.852 17.54C1.18 16.9 0.844 16.004 0.844 14.852V5.252C0.844 4.132 1.164 3.26 1.804 2.636C2.46 2.012 3.364 1.7 4.516 1.7H10.06C11.916 1.7 13.348 2.092 14.356 2.876C15.364 3.66 15.868 4.796 15.868 6.284C15.868 7.02 15.652 7.708 15.22 8.348C14.788 8.972 14.228 9.444 13.54 9.764V9.788C14.308 10.092 14.932 10.58 15.412 11.252C15.908 11.908 16.156 12.62 16.156 13.388C16.156 14.988 15.636 16.244 14.596 17.156C13.572 18.052 12.156 18.5 10.348 18.5H4.684ZM10.06 8.636C10.876 8.636 11.508 8.436 11.956 8.036C12.42 7.636 12.652 7.06 12.652 6.308C12.652 5.572 12.436 5.028 12.004 4.676C11.572 4.324 10.924 4.148 10.06 4.148H5.02C4.7 4.148 4.444 4.252 4.252 4.46C4.076 4.668 3.988 4.956 3.988 5.324V8.636H10.06ZM10.06 16.052C11.98 16.052 12.94 15.18 12.94 13.436C12.94 12.684 12.684 12.1 12.172 11.684C11.676 11.268 10.972 11.06 10.06 11.06H3.988V14.876C3.988 15.244 4.076 15.532 4.252 15.74C4.444 15.948 4.7 16.052 5.02 16.052H10.06ZM24.5155 18.74C24.0355 18.74 23.6515 18.612 23.3635 18.356C23.0755 18.1 22.9315 17.748 22.9315 17.3V4.172H18.2995C17.8355 4.172 17.4675 4.068 17.1955 3.86C16.9395 3.636 16.8115 3.332 16.8115 2.948C16.8115 2.548 16.9395 2.244 17.1955 2.036C17.4515 1.812 17.8195 1.7 18.2995 1.7H30.7555C31.2355 1.7 31.6035 1.812 31.8595 2.036C32.1155 2.244 32.2435 2.548 32.2435 2.948C32.2435 3.332 32.1075 3.636 31.8355 3.86C31.5795 4.068 31.2195 4.172 30.7555 4.172H26.1235V17.3C26.1235 17.732 25.9715 18.084 25.6675 18.356C25.3795 18.612 24.9955 18.74 24.5155 18.74ZM32.6562 18.74C32.1602 18.74 31.7762 18.612 31.5042 18.356C31.2322 18.1 31.0962 17.748 31.0962 17.3V7.94C31.0962 7.476 31.2242 7.124 31.4802 6.884C31.7522 6.628 32.1282 6.5 32.6082 6.5C33.0882 6.5 33.4642 6.628 33.7362 6.884C34.0082 7.14 34.1442 7.492 34.1442 7.94V8.732C34.6402 8.092 35.2162 7.604 35.8722 7.268C36.5442 6.916 37.2642 6.74 38.0322 6.74H38.5602C39.0722 6.74 39.4642 6.852 39.7362 7.076C40.0242 7.284 40.1682 7.588 40.1682 7.988C40.1682 8.388 40.0242 8.7 39.7362 8.924C39.4642 9.132 39.0722 9.236 38.5602 9.236H37.7442C36.6722 9.236 35.8162 9.58 35.1762 10.268C34.5522 10.94 34.2402 11.868 34.2402 13.052V17.3C34.2402 17.748 34.0962 18.1 33.8082 18.356C33.5202 18.612 33.1362 18.74 32.6562 18.74ZM45.3884 18.74C44.3964 18.74 43.5164 18.572 42.7484 18.236C41.9964 17.9 41.4044 17.436 40.9724 16.844C40.5564 16.236 40.3484 15.54 40.3484 14.756C40.3484 13.572 40.8364 12.628 41.8124 11.924C42.8044 11.22 44.1404 10.868 45.8204 10.868C47.2764 10.868 48.4444 11.18 49.3244 11.804V11.228C49.3244 10.476 49.0924 9.9 48.6284 9.5C48.1644 9.1 47.4924 8.9 46.6124 8.9C45.3004 8.9 44.1724 9.18 43.2284 9.74C42.8284 9.964 42.4844 10.076 42.1964 10.076C41.8444 10.076 41.5324 9.916 41.2604 9.596C41.0844 9.372 40.9964 9.14 40.9964 8.9C40.9964 8.5 41.2044 8.148 41.6204 7.844C42.1964 7.428 42.9244 7.1 43.8044 6.86C44.6844 6.62 45.6124 6.5 46.5884 6.5C48.4444 6.5 49.9004 6.924 50.9564 7.772C52.0284 8.604 52.5644 9.756 52.5644 11.228V17.396C52.5644 17.812 52.4204 18.14 52.1324 18.38C51.8604 18.62 51.4844 18.74 51.0044 18.74C50.5084 18.74 50.1244 18.628 49.8524 18.404C49.5804 18.18 49.4444 17.86 49.4444 17.444V17.18C48.5324 18.22 47.1804 18.74 45.3884 18.74ZM46.1324 16.532C47.1404 16.532 47.9244 16.38 48.4844 16.076C49.0604 15.756 49.3484 15.316 49.3484 14.756C49.3484 14.228 49.0604 13.804 48.4844 13.484C47.9084 13.164 47.1404 13.004 46.1804 13.004C45.3164 13.004 44.6444 13.156 44.1644 13.46C43.7004 13.764 43.4684 14.196 43.4684 14.756C43.4684 15.316 43.7004 15.756 44.1644 16.076C44.6284 16.38 45.2844 16.532 46.1324 16.532ZM60.3775 18.74C58.4735 18.74 57.1535 17.676 56.4175 15.548L53.8735 8.252C53.8255 8.108 53.8015 7.972 53.8015 7.844C53.8015 7.476 53.9615 7.164 54.2815 6.908C54.6175 6.652 55.0495 6.524 55.5775 6.524C55.8975 6.524 56.1695 6.596 56.3935 6.74C56.6175 6.884 56.7775 7.084 56.8735 7.34L59.5615 15.14C59.6895 15.54 59.8175 15.828 59.9455 16.004C60.0735 16.164 60.2175 16.244 60.3775 16.244C60.5375 16.244 60.6815 16.164 60.8095 16.004C60.9375 15.828 61.0655 15.54 61.1935 15.14L63.8815 7.34C63.9775 7.084 64.1375 6.884 64.3615 6.74C64.5855 6.596 64.8575 6.524 65.1775 6.524C65.7215 6.524 66.1535 6.652 66.4735 6.908C66.7935 7.148 66.9535 7.46 66.9535 7.844C66.9535 7.972 66.9295 8.108 66.8815 8.252L64.3375 15.548C63.6015 17.676 62.2815 18.74 60.3775 18.74ZM74.3982 18.74C73.0222 18.74 71.8222 18.492 70.7982 17.996C69.7742 17.5 68.9822 16.804 68.4222 15.908C67.8782 14.996 67.6062 13.932 67.6062 12.716C67.6062 10.748 68.1742 9.22 69.3102 8.132C70.4622 7.044 72.0782 6.5 74.1582 6.5C75.4382 6.5 76.5662 6.7 77.5422 7.1C78.5342 7.5 79.3022 8.06 79.8462 8.78C80.4062 9.484 80.6862 10.292 80.6862 11.204C80.6862 11.972 80.4382 12.564 79.9422 12.98C79.4622 13.396 78.7742 13.604 77.8782 13.604H70.6542C70.6542 14.5 70.9662 15.18 71.5902 15.644C72.2302 16.092 73.1662 16.316 74.3982 16.316C75.6942 16.316 76.7982 16.028 77.7102 15.452C78.2222 15.132 78.6222 14.972 78.9102 14.972C79.1822 14.972 79.4462 15.1 79.7022 15.356C79.9742 15.628 80.1102 15.924 80.1102 16.244C80.1102 16.628 79.9502 16.932 79.6302 17.156C78.9582 17.668 78.1742 18.06 77.2782 18.332C76.3822 18.604 75.4222 18.74 74.3982 18.74ZM76.9182 11.396C77.1902 11.396 77.3822 11.348 77.4942 11.252C77.6062 11.14 77.6622 10.964 77.6622 10.724C77.6622 10.164 77.3422 9.724 76.7022 9.404C76.0782 9.084 75.2302 8.924 74.1582 8.924C73.0862 8.924 72.2382 9.148 71.6142 9.596C71.0062 10.044 70.7022 10.644 70.7022 11.396H76.9182ZM84.6987 18.74C84.2027 18.74 83.8187 18.612 83.5467 18.356C83.2747 18.1 83.1387 17.748 83.1387 17.3V1.724C83.1387 1.276 83.2747 0.923999 83.5467 0.667999C83.8187 0.411999 84.2027 0.283998 84.6987 0.283998C85.1787 0.283998 85.5627 0.411999 85.8507 0.667999C86.1387 0.923999 86.2827 1.276 86.2827 1.724V17.3C86.2827 17.748 86.1387 18.1 85.8507 18.356C85.5627 18.612 85.1787 18.74 84.6987 18.74Z'
          fill='black'
        />
      </motion.svg>
    </div>
  )
}

export default Logo
