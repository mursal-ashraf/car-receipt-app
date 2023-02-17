import { TextField } from '@mui/material';
import { Stack as Spacer } from '@mui/system';
import { toUpper } from 'lodash';
import React from 'react';
import { FormSection, getFormConfig } from './formConfig';

interface FormProps {
  section: FormSection;
}

const generateFormHeading = (header: string) => toUpper(`${header} Details`);

export const Form: React.FC<FormProps> = ({ section }) => {
  const config = getFormConfig(section);
  if (!config) return <></>;
  return (
    <Spacer spacing={2}>
      <h2>{generateFormHeading(config?.formHeading)}</h2>
      {config?.fields.map((field) => {
        return <TextField label={field} />;
      })}
    </Spacer>
  );
};
