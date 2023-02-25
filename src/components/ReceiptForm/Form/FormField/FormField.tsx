import { TextField, TextFieldProps } from '@mui/material';
import { error } from 'console';
import React from 'react';

interface FormFieldProps {
  field: string;
  onChange: (e: OnChangeEvent) => void;
  value: string;
  readOnly: boolean;
  error: boolean;
  helperText: string | null;
}

export const FormField: React.FC<FormFieldProps> = ({
  field,
  onChange,
  value,
  readOnly,
  error,
  helperText,
}) => {
  const props: TextFieldProps = {
    label: field,
    onChange: onChange,
    value: value,
    variant: 'filled',
    key: field,
    required: true,
    InputProps: { ...{ readOnly } },
    error,
    helperText,
  };
  return <TextField {...props} />;
};
