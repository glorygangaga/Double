import { IPizza } from "../../../models";
import { ChevronDown, ChevronUp } from "lucide-react";
import styles from '../mainPart.module.scss';
import React from "react";

export const Pizza: React.FC<IPizza> = ({data, setCounters, counters, cnt}) => {
  
  return (
    <div className={styles.pizzaPart}>
      <h2 className={`main-text-${cnt}`}>{data.title}</h2>
      <p>{data.desc}</p>
      <div className={styles.mainPart}>
        <div className={`main-box-${cnt}`}>
          <img className={`main-img-${cnt}`} src={data.photo} alt={data.title} />
        </div>
        {cnt === 1 ? 
          <div className={styles.buttons}>
            <button onClick={() => setCounters({...counters, cnt1: counters.cnt1 + 1})} className={styles.Upper}><ChevronUp/></button>
            <button onClick={() => setCounters({...counters, cnt1: counters.cnt1 - 1})} className={styles.Down}><ChevronDown/></button>
          </div>
          :
          <div className={styles.buttons}>
              <button onClick={() => setCounters({...counters, cnt2: counters.cnt2 + 1})} className={styles.Upper}><ChevronUp/></button>
            <button onClick={() => setCounters({...counters, cnt2: counters.cnt2 - 1})} className={styles.Down}><ChevronDown/></button>
          </div>
        }
      </div>
    </div>
  )
}