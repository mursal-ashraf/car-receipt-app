import { TextField } from '@mui/material';
import { Stack as Spacer } from '@mui/system';
import React from 'react';
import { useAppStateContext } from '../../../Context/context';
import { getFormConfig } from './formConfig';
import { generateFormHeading } from './utils';

interface FormProps {
  section: FormSection;
}

export const FormComponent: React.FC<FormProps> = ({ section }) => {
  const appState = useAppStateContext();
  const config = getFormConfig(section);
  if (!config) return <></>;

  return (
    <Spacer spacing={2}>
      <h2>{generateFormHeading(config?.formHeading)}</h2>
      {config?.fields.map((field) => {
        const path = appState.getCorrectOnChangeFunction(
          config?.formHeading,
          field
        );
        const onChange = (onChangeEvent: OnChangeEvent) => {
          const value = onChangeEvent?.target?.value;
          appState.update(path, value);
        };
        return (
          <TextField
            label={field}
            onChange={onChange}
            value={appState.getWithPath(path)}
            key={field}
          />
        );
      })}
    </Spacer>
  );
};
