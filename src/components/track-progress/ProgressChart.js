import { Chart, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useWindowResize } from "../../hooks/useWindowResize";
import styles from "./ProgressPage.module.css";

Chart.register(ArcElement);

export const ProgressChart = ({ day }) => {
  const size = useWindowResize();
  const data = {
    labels: ["Complete", "Incomplete"],
    datasets: [
      {
        label: "Display Percentage",
        data: [day.progress, 100 - day.progress],
        backgroundColor: ["#4AF193", "#fff"],
        hoverOffset: 3,
        borderRadius: 5,
        spacing: 5,
      },
    ],
  };

  const chartConfig = {
    type: "doughnut",
    data: data,
    options: {
      cutout: size.width > 574 ? 20 : 10,
      radius: size.width > 574 ? 40 : 20,
    },
  };
  return (
    <div className={styles.chartWrapper}>
      <div className={styles.chartHeading}>
        <h5>{day.progress}%</h5>
      </div>
      <Doughnut {...chartConfig}></Doughnut>
    </div>
  );
};
