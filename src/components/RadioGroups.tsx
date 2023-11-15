import { FormEvent, Fragment, useState } from "react";
import styles from './radioGroups.module.css';

type GroupsList = {
  label: string;
  value: string;
}

interface IRadioProps {
  name: string;
  lists: GroupsList[];
  onSubmit: (e: FormEvent) => void;
}

const RadioGroups = ({name, lists, onSubmit}: IRadioProps) => {
  const [checkType, setCheckType] = useState<string>(lists[0].value);
  const handleCheckedValue = (type: string) => {
    setCheckType(type);
  }

  return (
    <form className={styles.groups} onSubmit={onSubmit}>
      {lists.map((list) => {
        return (
          <Fragment key={list.value}>
            <input defaultChecked={checkType === list.value} className={styles.hidden} type="radio" name={name} value={list.value} />
            <label htmlFor={list.label}>
              <button type="submit" className={[styles.btn_radio, styles.sprite_img, `${checkType === list.value ? styles.btn_check : styles.btn_uncheck}`].join(' ')} onClick={() => handleCheckedValue(list.value)}>              
                {list.label}
              </button>
            </label>
          </Fragment>
        )
      })}
    </form>
  )
}

export default RadioGroups