import React, { useRef, useState } from 'react'
import { useFormik } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { validate } from './validate'
import {Button} from '../Button'
import { TextField } from '../Input'
import './Form.scss'


const Form = () => {
    const [result, setResult] = useState(false)
    const [resultData, setResultData] =  useState()
    const formRef = useRef(null)

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            select: 0,
            textarea: '',
            checkbox: true
        },
        validate,
        onSubmit: values => {
            const res = Object.values(values);
            setResult(true)
            setResultData(res)
            formRef.current.reset()
        },
      });


    return (
        <>
            {
                result  && <div className="popup">
                    <div className="popup__substrate" onClick={() =>  setResult(false)}></div>
                    <div className="popup__data">
                        <p className="popup__title">Данные формы</p>
                    {
                        resultData && resultData.map((item, index) => (
                            item && <p key={index} className="popup__text">
                                {item}
                            </p>
                        ) )
                    }
                    </div>
                </div>
            }
        
            <form className='form' ref={formRef} onSubmit={formik.handleSubmit}>
                <fieldset className='form__fieldset'>
                    <TextField
                        type='text'
                        placeholder='Имя'
                        name='name'
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        errors={formik.errors.name}
                    />
            
                    <TextField
                        type='tel'
                        placeholder='Номер'
                        name='phone'
                        required
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                        errors={formik.errors.phone}
                    />

                    <TextField
                        type='email'
                        placeholder='E-mail'
                        name='email'
                        required
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        errors={formik.errors.email}
                    />
                
                    <TextField
                        typeField='select'
                        name="select"
                        placeholder='Интересующий товар/услуга'
                        onChange={formik.handleChange}
                        value={formik.values.textarea}
                        options={[
                            {
                                id: 0,
                                value: "architecture", 
                                text: "Архитектурный план"
                            },
                            {
                                id: 1,
                                value: "construction_works", 
                                text: "Строительные работы"
                            },
                            {
                                id: 3,
                                value: "construction_works", 
                                text: "Проектирование зданий"
                            }
                        ]}
                    />

                    <TextField
                        typeField='textarea'
                        placeholder='Сообщение'
                        name='textarea'
                        className="textField__input"
                        required
                        onChange={formik.handleChange}
                        value={formik.values.textarea}
                        errors={formik.errors.textarea}
                    ></TextField>
                
                </fieldset>

                <div className="form__agree">
                    <p className="form__text">Отправляя заявку Вы соглашаетесь
                    с политикой конфиденциальности</p>

                    <label className='checkbox' htmlFor="agree">
                        <input 
                            type='checkbox' 
                            className='checkbox__input' 
                            name="agree" 
                            id="agree"
                            defaultChecked 
                            required 
                            onChange={formik.handleChange}
                            value={formik.values.checkbox}
                        />
                        <FontAwesomeIcon className='checkbox__check' icon='check'/>
                    </label>
                </div>

                <Button icon='arrow-right' type='submit' dark >Отправить</Button>
            </form>
        </>
    )
}

export default Form
