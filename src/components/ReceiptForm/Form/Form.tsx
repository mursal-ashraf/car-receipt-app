import React from 'react';
import { Spacer } from '../../common';
import { useAppStateContext } from '../../../Context/context';
import { getFormConfig } from './formConfig';
import { generateFormHeading } from './utils';
import { H2 } from '../../common/Typography';
import FormField from './FormField';

interface FormProps {
  section: FormSection;
}

export const FormComponent: React.FC<FormProps> = ({ section }) => {
  const appState = useAppStateContext();
  const config = getFormConfig(section);
  if (!config) return <></>;

  return (
    <>
      <H2>{generateFormHeading(config?.formHeading)}</H2>
      <Spacer>
        {config?.fields.map((field) => {
          const path = appState.getPathFromHeaderAndField(
            config?.formHeading,
            field
          );
          const onChange = (e: OnChangeEvent) => {
            const value = e?.target?.value;
            appState.update(path, value);
          };
          const value = appState.getWithPath(path);
          return <FormField {...{ field, onChange, value }} />;
        })}
      </Spacer>
    </>
  );
};
