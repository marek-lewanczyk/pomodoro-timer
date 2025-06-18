import React, { type ChangeEvent, type ReactNode } from 'react';

export interface IconButtonProps {
  onClick?: () => void;
  children: ReactNode;
  to?: string;
  type?: 'button' | 'submit' | 'reset';
  isActive?: boolean;
  className?: string;
  title?: string;
}

export interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
  className?: string;
}

export interface ErrorBoundaryProps {
  children?: React.ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export interface FormiInputFieldProps {
  label?: string;
  name: string;
  fieldType?: string;
  min?: number;
  max?: number;
}

export interface TextareaFieldProps {
  label?: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  placeholder?: string;
}
