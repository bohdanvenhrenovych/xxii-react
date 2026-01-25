import {
  Control,
  Controller,
  FieldPath,
  FieldValues,
  RegisterOptions,
} from 'react-hook-form'
import { Textarea } from '../ui/textarea'
import type { ComponentProps } from 'react'

type TextareaProps = ComponentProps<typeof Textarea>

interface TextareaFieldProps<T extends FieldValues> extends Omit<
  TextareaProps,
  'value' | 'onChange' | 'onBlur' | 'ref'
> {
  id?: string
  control: Control<T>
  name: FieldPath<T>
  rules?: RegisterOptions<T, FieldPath<T>>
  className?: string
}

export function TextareaField<T extends FieldValues>({
  id,
  control,
  name,
  rules,
  className,
  ...textareaProps
}: TextareaFieldProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => (
        <div className="flex flex-col gap-1">
          <Textarea
            id={id}
            ref={field.ref}
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            {...textareaProps}
            className={className}
          />
          {fieldState.error?.message && (
            <span className="text-status-dnd text-xs">
              {fieldState.error.message}
            </span>
          )}
        </div>
      )}
    />
  )
}
