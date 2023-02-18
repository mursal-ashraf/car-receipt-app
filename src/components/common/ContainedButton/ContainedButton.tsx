import { Button } from '@mui/material';
import React from 'react';

interface ContainedButtonProps {
  onClick: () => void;
  text: string;
}
export const ContainedButton: React.FC<ContainedButtonProps> = ({
  onClick,
  text,
}) => {
  return <Button {...{ variant: 'contained', onClick }}>{text}</Button>;
};
