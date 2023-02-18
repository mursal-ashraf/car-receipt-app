import { TextField, TextFieldProps } from '@mui/material';
import React from 'react';

interface FormFieldProps {
  field: string;
  onChange: (e: OnChangeEvent) => void;
  value: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  field,
  onChange,
  value,
}) => {
  const props: TextFieldProps = {
    label: field,
    onChange: onChange,
    value: value,
    variant: 'filled',
    key: field,
    required: true,
  };
  return <TextField {...props} />;
};
