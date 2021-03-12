import React, {useState} from 'react'
import {PropTypes} from 'prop-types';

export const AddCategory = ({setCategories}) => {

const [inputValue, setInputValue] = useState('');

const handleInputChange = (event) => {
    setInputValue(event.target.value);
}

const handleSubmit = (event) => {
event.preventDefault();

(inputValue.trim().length > 2 ) &&
setCategories(cats => [inputValue,...cats])
setInputValue('');


}
    return (

        <form onSubmit={ handleSubmit }>

        <input
        type='text'
        placeholder='Busca busca'
        value= { inputValue }
        onChange={ handleInputChange } 
        />
        </form>

    )
}

AddCategory.propTypes = {
 setCategories: PropTypes.func.isRequired   
}