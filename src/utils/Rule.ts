import * as yup from 'yup'

export const schema = yup
  .object({
    email: yup.string().email('Email không đúng định dạng').required('Email không được để trống'),
    password: yup.string().required('Mật khẩu không được để trống').min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
  })
  .required()

export type schemaType = yup.InferType<typeof schema>
