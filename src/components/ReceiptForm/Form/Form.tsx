import React from 'react';
import { Navigate } from 'react-router-dom';
import { Spacer } from 'components/common';
import { useAppStateContext } from 'Context/context';
import { getFormConfig } from './formConfig';
import FormField from './FormField';

interface FormProps {
  section: FormSection;
  readOnly?: boolean;
}

export const FormComponent: React.FC<FormProps> = ({
  section,
  readOnly = false,
}) => {
  const appState = useAppStateContext();
  const config = getFormConfig(section);

  if (!config) return <Navigate to={'/'} />;

  return (
    <Spacer>
      {config?.fields.map((fieldObject) => {
        const { fieldName, validator, helperText, beautifier } = fieldObject;
        const path = appState.getPathFromHeaderAndField(
          config?.formHeading,
          fieldName
        );
        const onChange = (e: OnChangeEvent) => {
          const newValue = e?.target?.value;
          appState.update(path, newValue.replace('$ ', ''));
        };
        const value = beautifier(appState.getWithPath(path));
        const error = validator(appState.getWithPath(path));
        return (
          <FormField
            key={`${section}-${fieldName}`}
            {...{ onChange, value, readOnly, error, fieldName }}
            helperText={error ? helperText : null}
          />
        );
      })}
    </Spacer>
  );
};
