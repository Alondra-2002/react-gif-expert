//import React from 'react'

import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One punch']);
  
  const onAddCategory = ( newCategory) => {

    if( categories.includes ( newCategory ) ) return;
    //console.log(newCategory);
    //categories.push(newCategory);
    setCategories([ newCategory, ...categories ]);

  }
  return (
    <>
    
    <h1>GifExpertApp</h1>
   
    <AddCategory 
    //setCategories={ setCategories}
    onNewCategory = {( value ) => onAddCategory( value )}
    //currentCategories={ categories }
    />
    
      {categories.map(( category ) => (
          <GifGrid 
          key={ category} 
          category = { category } />
        ))
       
    }
      
      
    

    
    </>
  )
}
