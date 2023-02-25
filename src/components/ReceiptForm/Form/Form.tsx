import React from 'react';
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
  if (!config) return <></>;

  return (
    <Spacer>
      {config?.fields.map((field) => {
        const path = appState.getPathFromHeaderAndField(
          config?.formHeading,
          field.fieldName as FormField
        );
        const onChange = (e: OnChangeEvent) => {
          const value = e?.target?.value;
          appState.update(path, value);
        };
        const value = appState.getWithPath(path);
        const fieldName = field.fieldName as FormField;
        const error = field.validator(value);
        return (
          <FormField
            {...{ onChange, value, readOnly }}
            key={`${section}-${field.fieldName}`}
            error={error}
            field={fieldName}
            helperText={error ? field.helperText : null}
          />
        );
      })}
    </Spacer>
  );
};
