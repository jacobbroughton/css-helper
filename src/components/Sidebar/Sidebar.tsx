import { useAppDispatch } from "../../redux/hooks"
import { setRule } from "../../redux/rules"
import "./Sidebar.css"

export const Sidebar = () => {

  const dispatch = useAppDispatch()

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    const label = (e.target as HTMLButtonElement).innerText
    const value = (e.target as HTMLButtonElement).value
    dispatch(setRule({
      value: value,
      label: label
    }))
  }

  return (
    <aside className='sidebar'>
      <h1>CSS Helper</h1>

      <ul>
        <li>
          <button value='boxShadow' onClick={handleClick}>Box Shadow</button>
        </li>

        <li>
          <button value='linearGradient' onClick={handleClick}>Linear Gradient</button>
        </li>
      </ul>
    </aside>
  )
}