import React from 'react'
import PropTypes from 'prop-types'
import {Button} from '../Button'
import { TextField } from '../Input'
import { useFetch } from '../../hooks'
import './Form.scss'

const url = '/data/formData.json' 

const Form = () => {
const formContent = useFetch(url)

    return (
        <form className='form'>
            <fieldset className='form__fieldset'>
            {
                formContent.map(item => (
                    <TextField
                        key={item.name}
                        type={item.type}
                        placeholder={item.placeholder}
                        name={item.name}
                        required={item.required}
                        value={item.value}
                    />
                ))
            }
            </fieldset>

            <div className="form__agree">
                <p className="form__text">Отправляя заявку Вы соглашаетесь
                с политикой конфиденциальности</p>

                <label className='checkbox' htmlFor="agree">
                    <input type='checkbox' className='checkbox__input' defaultChecked name="agree" id="agree"/>
                    
                </label>
            </div>

            <Button icon='arrow-right' dark >Отправить</Button>
        </form>
    )
}

Form.propTypes = {

}

export default Form
