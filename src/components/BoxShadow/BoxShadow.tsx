import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { editRule } from "../../redux/rules"
import { getHexOpacity } from "../../utils/getHexOpacity"
import { CopyToClipboard } from "../CopyToClipboard/CopyToClipboard"
import { controls } from "../../controls"
import "./BoxShadow.css"

export const BoxShadow = () => {
  const dispatch = useAppDispatch()
  const rules = useAppSelector((state) => state.rules)
  const { xOffset, yOffset, blur, spread, color, opacity } = rules.boxShadow

  return (
    <div className="content">
      <div
        className="box"
        style={{
          boxShadow: `${xOffset}px ${yOffset}px ${blur}px ${spread}px ${color}${getHexOpacity(
            opacity
          )} `,
        }}
      ></div>
      <CopyToClipboard
        textToCopy={`box-shadow: ${xOffset}px ${yOffset}px ${blur}px ${spread}px ${color}${getHexOpacity(
          opacity
        )};`}
      />
    </div>
  )
}
