export const validate = (values) =>{ 
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
      } else if (!/(?:\+|\d)[\d\-() ]{9,}\d/gi.test(values.phone)) {
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