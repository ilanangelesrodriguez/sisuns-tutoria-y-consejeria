import React from 'react';
import { Button } from '@nextui-org/react';

interface SubmitButtonProps {
  onSubmit: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onSubmit }) => {
  return (
    <Button
      onClick={onSubmit}
      color="success"
      className="w-full bg-solid-41B3A4 text-white"
    >
      Enviar
    </Button>
  );
};

export default SubmitButton;
