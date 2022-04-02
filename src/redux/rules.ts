import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { controls } from "../controls"


interface RulesState {
  selectedRule: {
    label: string,
    value: string
  }
  boxShadow: {
    xOffset: number
    yOffset: number
    blur: number
    spread: number
    color: string,
    opacity: number
  }
}

interface SetRuleState {
  label: string,
  value: string
}

interface EditRuleState {
    propertyToEdit: string,
    value: object
}

const { boxShadow } = controls

const initialState: RulesState = {
  selectedRule: {
    label: "Box Shadow",
    value: 'boxShadow'
  },
  boxShadow: {
    xOffset: boxShadow.inputs.xOffset.defaultValue,
    yOffset: boxShadow.inputs.yOffset.defaultValue,
    blur: boxShadow.inputs.blur.defaultValue,
    spread: boxShadow.inputs.spread.defaultValue,
    color: boxShadow.inputs.color.defaultValue,
    opacity: boxShadow.inputs.opacity.defaultValue
  },
}

// ========================================

const Rules = createSlice({
  name: "rules",
  initialState,
  reducers: {
    setRule: (state, action: PayloadAction<SetRuleState>) => {
      if (state.selectedRule === action.payload) return
      state.selectedRule = action.payload
    },
    editRule: (state, action: PayloadAction<EditRuleState>) => {
      const { propertyToEdit, value } = action.payload

      return {
        ...state,
        [propertyToEdit]: value,
      }
    },
  },
})

export default Rules.reducer
export const { setRule, editRule } = Rules.actions
