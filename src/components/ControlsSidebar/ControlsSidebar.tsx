import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { editRule } from "../../redux/rules"

import { controls } from "../../controls"
import "./ControlsSidebar.css"
import ControlInput from "../ControlInput/ControlInput"

export const ControlsSidebar = () => {
  const rules = useAppSelector((state) => state.rules)
  const dispatch = useAppDispatch()

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    let key = e.target.dataset.parameter

    dispatch(
      editRule({
        propertyToEdit: rules.selectedRule.value,
        value: {
          ...rules[rules.selectedRule.value],
          [key]: e.target.value,
        },
      })
    )
  }

  const currentControls = controls[rules.selectedRule.value]
  let inputs
  if (currentControls) {
    inputs = Object.keys(currentControls.inputs).map(
      (key) => currentControls.inputs[key]
    )
  }

  return (
    <aside className="controls-sidebar">
      {inputs ? (
        <form>
          {inputs.map((input) => (
            <div className="input-container">
              <label htmlFor={input.parameter}>
                {input.label} {" "}
                ({rules[rules.selectedRule.value][input.parameter]}
                {input.unitType})
              </label>
              <ControlInput
                min={input.min}
                max={input.max}
                step={input.step}
                type={input.type}
                defaultValue={input.defaultValue}
                onChange={handleChange}
                parameter={input.parameter}
                id={input.parameter}
                title={input.parameter}
              />
            </div>
          ))}
        </form>
      ) : (
        <p>No controls found</p>
      )}
    </aside>
  )
}
