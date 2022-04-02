import "./MainView.css"
import { useAppSelector } from "../../redux/hooks"
import { BoxShadow } from "../BoxShadow/BoxShadow"

export const MainView = () => {

  const { selectedRule } = useAppSelector(state => state.rules)
 
  return (
    <section className='main-view'>
      <h1>{selectedRule.label}</h1>
      {selectedRule.label === 'Box Shadow' && <BoxShadow/>} 
    </section>
  )
}