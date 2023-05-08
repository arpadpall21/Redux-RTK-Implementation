import { useDispatch } from 'react-redux';
import styles from './Control.module.scss';
import { nextColor, prevColor } from './store/slice/color';
import { putText } from './store/slice/text';

export default function Control() {
  const dispatch = useDispatch();

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    dispatch(putText(event.target.value));
  }

  return (
    <div className={styles['control-container']}>
      <h2 className={styles['title']}> Control Component </h2>
      <div className={styles['button-container']}>
        <span onClick={() => dispatch(prevColor())}> previous color </span>
        <span onClick={() => dispatch(nextColor())}> next color </span>
      </div>
      <textarea onChange={handleTextChange} placeholder='type here...' />
    </div>
  );
}
