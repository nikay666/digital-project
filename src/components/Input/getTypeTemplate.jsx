import Select from "./Select"

export const getTypeTemplate = (type, required, placeholder, name, value) => {
    let res
     if(type === 'select'){
        res = <Select name={name} required placeholder={placeholder} value={value} />
     }else if(type === 'textarea'){
        res = <textarea 
            name={name} 
            id={name} 
            placeholder={placeholder}
            className="textField__input"
        ></textarea>
     }else{
        res = <input 
            id={name}
            name={name}
            type={type}
            className="textField__input"
            placeholder={placeholder}
            required={required}
        />
     }
     return res
 }