import React from 'react'

function RadioButton({category}) {
  return (
    
          <label className="flex items-center">
            <input type="radio" className="form-radio text-indigo-600" />
            <span className="ml-2">{category.title}</span>
          </label>
          
          
        
  )
}

export default RadioButton