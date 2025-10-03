import React, { useEffect, useRef } from 'react';
import {
  Chart,
  ChartType,
  ChartConfiguration,
  ChartData,
  ChartOptions,
} from 'chart.js/auto';

interface MyChartProps<T extends ChartType = ChartType> {
  type: T;
  data: ChartData<T>;
  options?: ChartOptions<T>;
}

function MyChart<T extends ChartType = ChartType>({ type, data, options }: MyChartProps<T>) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart<T> | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        if (chartRef.current) {
          chartRef.current.destroy();
        }

        const chartConfig: ChartConfiguration<T> = {
          type,
          data,
          options,
        };

        chartRef.current = new Chart(ctx, chartConfig);
      }
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [type, data, options]);

  return <canvas ref={canvasRef} />;
}

export default MyChart;