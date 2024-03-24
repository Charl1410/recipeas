import React from 'react'
import { TextInput } from "@mantine/core";

interface Input {
    label: string;
    placeholder: string;
}

const ContactInput: React.FC<Input> = ({label, placeholder}) => {
  return (
    <TextInput
      className="w-5/12 rounded-lg"
      label={label}
      withAsterisk
      placeholder={placeholder}
    />
  );
}

export default ContactInput