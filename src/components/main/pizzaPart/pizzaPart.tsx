import React, { useEffect, useState } from "react";
import styles from '../mainPart.module.scss';
import { TypeData, TypeCounter } from "../../../models";
import { Pizza } from "./Pizza";
import { useDispatch } from "react-redux";
import { actions } from "../../../store/busket/basket.slice";

export const PizzaPart:React.FC<TypeData> = ({data}) => {
  const [price, setPrice] = useState<number>(0);
  const dispatch = useDispatch();
  const [counters, setCounters] = useState<TypeCounter>({
    cnt1: 0,
    cnt2: 0
  })

  if (counters.cnt1 === 8) setCounters({...counters, cnt1: 0});
  else if (counters.cnt1 === -1) setCounters({...counters, cnt1: 7});
  if (counters.cnt2 === 8) setCounters({...counters, cnt2: 0});
  else if (counters.cnt2 === -1) setCounters({...counters, cnt2: 7});

  useEffect(() => {
    setPrice(data[counters.cnt1].price + data[counters.cnt2].price);
  }, [counters, setCounters])

  return (
    <div>
      <div className={styles.allPizzas}>
        <Pizza data={data[counters.cnt1]} counters={counters} setCounters={setCounters} cnt={1}/>
        <Pizza data={data[counters.cnt2]} counters={counters} setCounters={setCounters} cnt={2}/>
      </div>
      <div className={styles.ExitPrice}>
        <button onClick={() => dispatch(actions.handleBusket([data[counters.cnt1], data[counters.cnt2]]))}>
          buy in ${price}
        </button>
      </div>
    </div>
  )
}