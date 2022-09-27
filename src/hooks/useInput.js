import React, { useState } from 'react';
const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === 'function') {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const Input = () => {
  const maxLength = (value) => !value.includes('#');
  const name = useInput('Mr.', maxLength);
  return (
    <div>
      <h1>USE INPUT :)</h1>
      {/* <input placeholder="name" value={name.value} onChange={name.onChange}></input> */}
      <input placeholder="name" {...name}></input>
    </div>
  );
};

export default Input;
