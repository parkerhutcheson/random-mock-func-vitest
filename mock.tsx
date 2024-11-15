import { vi } from 'vitest';
import { UseFormReturn, FieldValues, UseFormProps, Path, RegisterOptions } from 'react-hook-form';

const mockUseForm = <
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
>(): UseFormReturn<TFieldValues, TContext> => ({
  register: vi.fn((
    name: Path<TFieldValues>, 
    options?: RegisterOptions<TFieldValues>
  ) => ({
    name,
    onChange: vi.fn(),
    onBlur: vi.fn(),
    ref: vi.fn(),
  })),
  handleSubmit: vi.fn((onValid, onInvalid) => vi.fn()),
  watch: vi.fn(),
  setValue: vi.fn(),
  getValues: vi.fn(),
  reset: vi.fn(),
  formState: {
    isDirty: false,
    isSubmitting: false,
    isSubmitted: false,
    isSubmitSuccessful: false,
    isValid: false,
    isValidating: false,
    submitCount: 0,
    errors: {},
    dirtyFields: {},
    touchedFields: {},
  },
  clearErrors: vi.fn(),
  setError: vi.fn(),
  trigger: vi.fn(),
  control: {
    register: vi.fn(),
    unregister: vi.fn(),
    _names: {
      array: new Set(),
      mount: new Set(),
      unMount: new Set(),
      watch: new Set(),
      focus: new Set(),
      watchAll: false,
    },
    _subjects: {
      watch: vi.fn(),
      array: vi.fn(),
      state: vi.fn(),
    },
    _getWatch: vi.fn(),
    _formState: vi.fn(),
    _defaultValues: {},
  },
  unregister: vi.fn(),
  resetField: vi.fn(),
  setFocus: vi.fn(),
  getFieldState: vi.fn(),
});

export default mockUseForm;
