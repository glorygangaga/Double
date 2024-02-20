import { TypeState } from '../../../models'
import './myModal.scss'

export const BasketItems = ({items}: {items: TypeState[]}) => {
  return (
    <div >
      <div className="Item-in-modal">
        <div>
          <p>{items[0].title}</p>
          <p>{items[1].title}</p>
        </div>
        <p>${items[0].price + items[1].price}</p>
      </div>
    </div>
  )
}