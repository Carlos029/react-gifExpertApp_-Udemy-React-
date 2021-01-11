import React, {useState} from 'react';
import PropTypes from 'prop-types'

 const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // prevenir el comportamiento normal del formulario en donde se actualiza con cada cosa que le ponermos nueva

        if(inputValue.length > 2){
            setCategories( categories => [inputValue,...categories]);
            setInputValue('');
        }

    }


    return (
      <form onSubmit = {handleSubmit}>
        <h1>{inputValue}</h1>
        <input 
            type = "text"
            value = {inputValue}
            onChange = {handleInputChange}
        />
      </form>
    )
}

AddCategory.protoType = {
    setCategories : PropTypes.func.isRequired
}

export {
    AddCategory
}