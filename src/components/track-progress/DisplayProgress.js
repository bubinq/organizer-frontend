import styles from "./ProgressPage.module.css";
import { ProgressChart } from "./ProgressChart";

export const DisplayProgress = ({ day }) => {
  return (
    <div className={styles.circle}>
      <ProgressChart day={day}></ProgressChart>
    </div>
  );
};
