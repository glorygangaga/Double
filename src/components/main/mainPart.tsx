import styles from './mainPart.module.scss';
import { useGetPizzaQuery } from '../../store/api/pizza.api';
import { PizzaPart } from './pizzaPart/pizzaPart';
import { RefreshCcw } from 'lucide-react';

export const MainPart = () => {
  const {isLoading, isError, data} = useGetPizzaQuery('undefined');
  return (
    <main>
      <div className='container'>
        <div className={styles.main__inner}>
          {isLoading ? 
            <RefreshCcw className={styles.Loading}/>
            : 
            data ? 
            <PizzaPart data={data}/>
            :
            isError ?
            <h1 className={styles.Error}>Something went wrong...</h1>
            :
            '...'
          }
        </div>
      </div>
    </main>
  );
};
