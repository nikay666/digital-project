import React from 'react'
import { useFormik } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Button} from '../Button'
import { TextField } from '../Input'


import './Form.scss'
const validate = (values) =>{ 
    const errors = {}

    if(values.name.length  > 30) {
        errors.name = 'Максимальное количество символов 30'
    }

    if (!values.email) {
        errors.email = 'Обязательное поле';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Некорректный email';
    }
    if (!values.phone) {
        errors.phone = 'Обязательное поле';
      } else if (!/(?:\+|\d)[\d\-\(\) ]{9,}\d/gi.test(values.phone)) {
        errors.phone = 'Некорректный  телефон';
    }
    if (!values.textarea) {
        errors.textarea = 'Обязательное поле';
    } else if (values.textarea.length > 1000) {
        errors.textarea = 'Максимальное количество символов 1000';
    } else if (values.textarea.length < 8) {
        errors.textarea = ' Текст слишком короткий';
    }

    return errors;
}

const Form = () => {
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
          console.log(JSON.stringify(values, null, 2));
        },
      });

    return (
 
            <form className='form'  onSubmit={formik.handleSubmit}>
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
                        type='select'
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
                        type='textarea'
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
    )
}

export default Form
