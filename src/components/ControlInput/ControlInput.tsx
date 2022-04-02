import React from "react"

interface ControlInputTypes {
  type: string
  defaultValue: string | number
  min: number | undefined
  max: number | undefined
  step: number | undefined
  onChange: React.ChangeEventHandler<HTMLInputElement>
  parameter: string | null
  id: string
  title: string
}

const ControlInput: React.FC<ControlInputTypes> = ({
  type,
  defaultValue,
  min,
  max,
  step,
  onChange,
  parameter,
  id,
  title,
}) => {
  return (
    <input
      min={min}
      max={max}
      step={step}
      type={type}
      defaultValue={defaultValue}
      onChange={onChange}
      data-parameter={parameter}
      id={id}
      title={title}
    />
  )
}

export default ControlInput
