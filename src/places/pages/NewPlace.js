import React from "react";

import "./NewPlace.css";
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";
import Input from "../../shared/components/formElements/Input";

const NewPlace = () => {
  return (
    <form className="place-form">
      <Input
        element="input"
        label="title"
        type="text"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title!"
      />
    </form>
  );
};

export default NewPlace;
