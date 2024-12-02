import React from 'react';
import { Button } from '@nextui-org/react';
import { ArrowRightIcon } from '@/components/icons';
interface SubmitButtonProps {
  onSubmit: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onSubmit }) => {
  return (
    <Button
      onClick={onSubmit}
      size='md'
      color="success"
      className="w-full bg-solid-41B3A4 text-white rounded-sm"
    >
      Continuar <ArrowRightIcon />
    </Button>
  );
};

export default SubmitButton;
