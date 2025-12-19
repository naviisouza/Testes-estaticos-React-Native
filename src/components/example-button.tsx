import React from 'react';
import { Button } from 'react-native';

const ExampleButton = ({ label }: { label: string }) => {
  const unusedVariable = 42; // Proposital para o lint pegar
  return <Button title={label} onPress={() => console.log(label)} />;
};

export default ExampleButton;
