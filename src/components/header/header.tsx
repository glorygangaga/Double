import { ShoppingCart } from "lucide-react";
import { useAllSelector } from "../../hooks/useAllSelectors";
import styles from './header.module.scss';

export const Header = ({ setIsModal }: {setIsModal: (value: boolean) => void}) => {
  const basket = useAllSelector((state) => state.basket);

  return (
    <header className="header">
      <div className="container">
        <div className={styles.header__inner}>
          <p>Double pizza</p>
          <div className={styles.basket}>
            <p>{basket.length}</p>
            <button className={styles.openModal} onClick={() => setIsModal(true)}>
              <ShoppingCart width={35} height={35} color="white"/>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}