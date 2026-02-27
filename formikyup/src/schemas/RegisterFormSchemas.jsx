import * as yup from 'yup';
import { messages } from '../Messages/Messages';

export const RegisterFormSchemas = yup.object().shape({
    email: yup.string().email("Email adresi geçersiz").required(messages.required),
    age: yup.number().positive("Yaş sıfırdan büyük olmalıdır.").integer("Tam sayı giriniz").required(messages.required),
    password: yup.string().required(messages.required),
    rePassword: yup.string().required(messages.required).oneOf([yup.ref('password')], 'Parolalar eşleşmiyor'),
    term: yup.boolean().required(messages.required)
})