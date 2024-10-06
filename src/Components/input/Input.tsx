/* eslint-disable @typescript-eslint/no-explicit-any */
interface CustomInputProps {
  label: string
  type?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any
  errors?: any
  required?: boolean
  placeholder?: string
}

const Input: React.FC<CustomInputProps> = ({
  label,
  type = 'text', // Default type is 'text'
  register,
  errors,
  required = false,
  placeholder = ''
}) => {
  return (
    <div className='relative'>
      <input
        type={type} // Use the type prop here
        {...register(label, { required })}
        required={required}
        className='mt-3 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-sm'
        placeholder={placeholder || label} // Use placeholder if provided, otherwise use label as placeholder
      />
      {errors && errors[label.toLowerCase()] && (
        <p className='text-red-500 mt-1 text-sm'>{errors[label.toLowerCase()].message}</p>
      )}
    </div>
  )
}

export default Input
