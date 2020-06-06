import React from "react";

import "./NewPlace.css";
import Input from "../../shared/components/formElements/Input";

const NewPlace = () => {
  return (
    <form className="place-form">
      <Input
        element="input"
        label="title"
        type="text"
        validators={[]}
        errorText="Please enter a valid title!"
      />
    </form>
  );
};

export default NewPlace;
