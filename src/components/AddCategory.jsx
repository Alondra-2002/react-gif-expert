//import React from 'react'
import { useState } from 'react';


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')
  
    const onInputChange = ( {target} ) => {
        //console.log( target.value );
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        //console.log(inputValue);
        if(inputValue.trim().length <= 1) return; 

        //setCategories(categories => [ inputValue, ...categories ]);
      
        setInputValue('');
        onNewCategory(inputValue.trim());
    }

    return (
        <form onSubmit={ (event) => onSubmit(event)}>
    <input
        type="text"
        placeholder="Buscar gifts"
        value={ inputValue }
        onChange={ onInputChange }

    />
        </form>
  )
}
