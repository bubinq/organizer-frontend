import { Chart, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import styles from "./ProgressPage.module.css";

Chart.register(ArcElement);

export const ProgressChart = ({ day }) => {
  const data = {
    labels: ["Complete", "Incomplete"],
    datasets: [
      {
        label: "Display Percentage",
        data: [day.progress, 100 - day.progress],
        backgroundColor: ["rgb(51, 255, 141)", "rgb(255,255,255)"],
        hoverOffset: 3,
        borderRadius: 25,
        spacing: 20,
      },
    ],
  };

  const chartConfig = {
    type: "doughnut",
    data: data,
  };
  return (
    <div className={styles.chartWrapper}>
      <Doughnut {...chartConfig}></Doughnut>
    </div>
  );
};
