"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

interface Props {
  history: {
    date: string;
    close: number;
  }[];
}

export default function StockChart({ history }: Props) {
  const data = {
    labels: history.map((h) => h.date),

    datasets: [
      {
        label: "Closing Price",

        data: history.map((h) => h.close),

        borderWidth: 2,

        tension: 0.3,
      },
    ],
  };

  return <Line data={data} />;
}