import styles from './App.module.scss'
import Control from './Control';
import Display from './Display';
import Request from './Request';

export default function App() {
  return (
    <div>
      <div className={styles['control-display-box']}>
        <Control />
        <Display />
      </div>
      <Request />
    </div>
  );
}
