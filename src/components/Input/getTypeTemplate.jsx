import Input from "./Input"
import Select from "./Select"
import Textarea from "./Textarea"

const selectTemplates = {
    select: Select,
    textarea: Textarea,
    input: Input
}

export const getTypeTemplate = (typeField, type, required, placeholder, name, onChange, options) => {
    return selectTemplates[typeField]({
        type: type,
        name: name,
        placeholder: placeholder,
        options: options,
        onChange: onChange,
        required: required,
    })
}