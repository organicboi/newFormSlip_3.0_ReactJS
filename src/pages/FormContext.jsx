// FormContext.js
import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const useFormContext = () => {
  return useContext(FormContext);
};

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    totalPlay: "",
    oldBalance: "",
    selectedOption: "",
    ankValue: "",
    spValue: "",
    dpValue: "",
    jodiValue: "",
    selectedDate: "",
  });

  const updateFormData = (newData) => {
    setFormData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  const resetFormData = () => {
    setFormData({
      firstName: "",
      totalPlay: "",
      oldBalance: "",
      selectedOption: "",
      ankValue: "",
      spValue: "",
      dpValue: "",
      jodiValue: "",
      selectedDate: "",
    });
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData, resetFormData }}>
      {children}
    </FormContext.Provider>
  );
};
