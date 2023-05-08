import styles from './Display.module.scss';
import { useSelector } from 'react-redux';
import { selectCurrentColor } from './store/slice/color';
import { selectText } from './store/slice/text';

export default function Display() {
  const backgroundColor = useSelector(selectCurrentColor);
  const text = useSelector(selectText);

  return (
    <div className={styles["display-container"]}>
      <h2 className={styles["title"]}> Display Component </h2>
      <div style={{backgroundColor}}>
        <p> { text } </p>
      </div>
    </div>
  );
}
