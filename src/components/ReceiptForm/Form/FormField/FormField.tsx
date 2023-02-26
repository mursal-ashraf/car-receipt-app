import { TextField, TextFieldProps } from '@mui/material';
import React from 'react';

interface FormFieldProps {
  fieldName: string;
  onChange: (e: OnChangeEvent) => void;
  value: string;
  readOnly: boolean;
  error: boolean;
  helperText: string | null;
}

export const FormField: React.FC<FormFieldProps> = ({
  fieldName,
  onChange,
  value,
  readOnly,
  error,
  helperText,
}) => {
  const props: TextFieldProps = {
    label: fieldName,
    onChange: onChange,
    value: value,
    variant: 'filled',
    key: fieldName,
    required: true,
    InputProps: { ...{ readOnly } },
    error,
    helperText,
  };
  return <TextField {...props} />;
};
