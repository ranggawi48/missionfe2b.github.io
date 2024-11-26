import React, { useState, useEffect } from "react";

const InputEmail = (props) => {
  const { type, name } = props;
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user"); 
    if (storedUser) {
      const userObj = JSON.parse(storedUser);
      setValue(userObj.email || ""); 
    }
  }, []);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    if (!value) setIsFocused(false);

    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const userObj = JSON.parse(storedUser);
      userObj.email = value; 
      localStorage.setItem("user", JSON.stringify(userObj)); 
    }
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue); 
  };

  return (
    <div className="relative w-full">
      <label
        htmlFor={name}
        className={`absolute left-3 px-1 transition-all duration-200 ease-in-out 
        ${
          isFocused || value
            ? "top-1 text-xs text-gray-400"
            : "top-1/2 transform -translate-y-1/2 text-white"
        }`}
      >
        {props.label || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder=""
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        className="w-full h-12 bg-gray-800 text-white border border-gray-700 rounded px-4 pt-4 pb-1 focus:outline-none"
      />
    </div>
  );
};

export default InputEmail;
