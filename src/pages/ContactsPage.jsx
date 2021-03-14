import React, { useState } from 'react'
import { Button } from '../components/Button'
import { Form } from '../components/Form'

const frame = (
    <iframe 
        title='map'
        className='map' 
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d52126.2598940594!2d37.64460689042188!3d55.715242989487365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1612543417820!5m2!1sru!2sru">
    </iframe>
)

const ContactsPage = ({contacts}) => {
    const [formShow, setFormShow] = useState(false)

    const handlerClick = () => setFormShow(!formShow)
    return (
            <main className="main">
                <div className="contacts container columns columns--map">
                    <div className="columns__col">
                        <h1 className='h1'>КОНТАКТНАЯ<br/><span className='h1__bold'>ИНФОРМАЦИЯ</span></h1>
                        <div className="info-block">
                            <p className="info-block__title">"Digital Project"</p>
                            {
                                contacts.map(item => (
                                    <a key={item.id} href={item.link} className="info-block__link">{item.text}</a>
                                ))
                            }
                        </div>
                        <Button
                            dark
                            onClick={handlerClick}
                        >обратная связь</Button>
                    </div>
                    <div className="columns__col">
                        {frame}
                    </div>
    
                    {
                        formShow && <div  className="contacts__form">
                            <Form className="popup"/>      
                            <div 
                                onClick={handlerClick}
                                className="contacts__substraction"
                            ></div>         
                        </div>
                    }
                </div>
            </main>
    )
}

export default ContactsPage
