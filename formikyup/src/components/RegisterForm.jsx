import React from 'react'
import { useFormik } from 'formik';
import { RegisterFormSchemas } from '../schemas/RegisterFormSchemas';



//formdan submit edilen degerler bu sekilde yakalanabilir. 
const submit = (values, action) => {
    console.log(values);
    console.log(action);

    //işlem yapılmıs gibi. İşlemler bitince de formu temizle
    setTimeout(() => {
        alert(values.email + ' kişinin verileri kaydedildi.');
        action.resetForm();

    }, 3000)
}

function RegisterForm() {
    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            age: '',
            password: '',
            rePassword: '',
            term: ''
        },
        validationSchema: RegisterFormSchemas,
        onSubmit: submit
    });

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='inputDiv'>
                    <label>Email</label>
                    <input type='text' id='email' placeholder='Email Adresi' value={values.email} onChange={handleChange} />
                    {errors && errors.email ? <p style={{ color: "red" }}>{errors.email}</p> : ''}
                </div>
                <div className='inputDiv'>
                    <label>Yaş</label>
                    <input type='number' id='age' placeholder='Yaş giriniz' value={values.age} onChange={handleChange} />
                    {errors && errors.age ? <p style={{ color: "red" }}>{errors.age}</p> : ''}
                </div>
                <div className='inputDiv'>
                    <label>Şifre</label>
                    <input type='password' id='password' placeholder='Parolanızı giriniz' value={values.password} onChange={handleChange} />
                    {errors && errors.password ? <p style={{ color: "red" }}>{errors.password}</p> : ''}
                </div>
                <div className='inputDiv'>
                    <label>Şifre Tekrarı</label>
                    <input type='password' id='rePassword' placeholder='Parolanızı tekrar giriniz' value={values.rePassword} onChange={handleChange} />
                    {errors && errors.rePassword ? <p style={{ color: "red" }}>{errors.rePassword}</p> : ''}
                </div>
                <div className='inputDiv'>
                    <input type='checkbox' id='term' value={values.term} onChange={handleChange} />
                    {errors && errors.term ? <p style={{ color: "red" }}>{errors.term}</p> : ''}
                    <label>Kullanıcı sözleşmesini kabul ediyorum</label>
                </div>
                <button type='submit' className='submitButton'>Gönder</button>
            </form>
        </div>
    )
}

export default RegisterForm