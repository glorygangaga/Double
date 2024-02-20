import './myModal.scss';
import { useAllSelector } from '../../../hooks/useAllSelectors';
import { X } from 'lucide-react';
import { BasketItems } from './BasketItems';
import { useDispatch } from 'react-redux';
import { actions as BoughtReducer } from '../../../store/bought/bought.slice';
import { actions as BusketReducer } from '../../../store/busket/basket.slice';
import { IModal } from '../../../models';

export const MyModal: React.FC<IModal> = ({ isModal, setIsModal }) => {
  const basket = useAllSelector((state) => state.basket);
  const styleModal: string[] = ['Modal'];
  const dispatch = useDispatch();

  const AddingInbasket = (): void => {
    dispatch(BoughtReducer.Bought(basket));
    dispatch(BusketReducer.deleteAll());
  }

  if (isModal) styleModal.push('active'); 
  return (
    <div className={styleModal.join(' ')} onClick={() => setIsModal(false)}>
      <div className='main-part-modal' onClick={e => e.stopPropagation()}>
        <div className='modal-header'>
          <p>Your Basket:</p>
          <X onClick={() => setIsModal(false)}/>
        </div>
        {basket.length ? 
          <div>
            <div className='modal-in-basket'>
              {basket.map(item => {
                return (
                  <BasketItems key={`${item[0].id}${item[1].id}`} items={item}/>
                )}
              )} 
            </div>
            <div className='Modal-Btns'>
              <button className='Modal-Delete-btn' onClick={() => dispatch(BusketReducer.deleteAll())}>delete all</button>
              <button className='Modal-Bought-btn' onClick={AddingInbasket}>Buy all</button>
            </div>
          </div>
          :
          <p className='NoInBasket'>There`s no in basket</p>
        }
      </div>
    </div>
  )
}