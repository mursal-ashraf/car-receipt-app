import { TextField, TextFieldProps } from '@mui/material';
import React from 'react';

interface FormFieldProps {
  field: string;
  onChange: (e: OnChangeEvent) => void;
  value: string;
  readOnly: boolean;
}

export const FormField: React.FC<FormFieldProps> = ({
  field,
  onChange,
  value,
  readOnly,
}) => {
  const props: TextFieldProps = {
    label: field,
    onChange: onChange,
    value: value,
    variant: 'filled',
    key: field,
    required: true,
    InputProps: { ...{ readOnly } },
  };
  return <TextField {...props} />;
};
