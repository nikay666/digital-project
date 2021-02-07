import Select from "./Select"

export const getTypeTemplate = (type, required, placeholder, name, onChange, options) => {
    let res
     if(type === 'select'){
        res = <Select  
            name={name} 
            placeholder={placeholder}
            options={options}
            onChange={onChange}
            required={required}
        />
     }else if(type === 'textarea'){
        res = <textarea 
            name={name} 
            id={name} 
            placeholder={placeholder}
            className="textField__input"
            onChange={onChange}
            required={required}
        ></textarea>
     }else{
        res = <input 
            id={name}
            name={name}
            type={type}
            className="textField__input"
            placeholder={placeholder}
            required={required}
            onChange={onChange}
        />
     }
     return res
 }