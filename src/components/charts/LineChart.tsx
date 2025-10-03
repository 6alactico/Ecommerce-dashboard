
import MyChart from "./MyChart.js";
import SectionHeading from "@/utilities/utilities.js";

function SalesOverview() {
  const labels = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
  const today = new Date().getDay();
  const dataCurrentWeek = [33000, 18000, 39000, 41000, 38000, 35000, 31000];
  const dataPreviousWeek = [11000, 12000, 21000, 20000, 32000, 12000, 29000];

  // Highlight today's point
  const pointRadiusCurrentWeek = dataCurrentWeek.map((_, index) => index === today ? 5 : 0);
  const pointBackgroundColorCurrentWeek = dataCurrentWeek.map((_, index) => index === today ? 'rgba(255, 99, 132, 1)' : 'rgba(0, 0, 0, 0)');
  const pointRadiusPreviousWeek = dataPreviousWeek.map((_, index) => index === today ? 5 : 0);
  const pointBackgroundColorPreviousWeek = dataPreviousWeek.map((_, index) => index === today ? 'rgba(255, 99, 132, 1)' : 'rgba(0, 0, 0, 0)');

  const lineData = {
    labels: labels,
    datasets: [
        {
          label: "Current Week",
          data: dataCurrentWeek,
          backgroundColor: "rgba(54, 162, 235, 0.5)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
          pointRadius: pointRadiusCurrentWeek,
          pointBackgroundColor: pointBackgroundColorCurrentWeek,
          hitRadius: 10,
        },
        {
          label: "Previous Week",
          data: dataPreviousWeek,
          backgroundColor: "rgba(54, 162, 235, 0.5)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
          pointRadius: pointRadiusPreviousWeek,
          pointBackgroundColor: pointBackgroundColorPreviousWeek,
          hitRadius: 10,
        },
      ],
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: {
          callback: function (value: string | number) {
            const numericValue = Number(value);
            if (Math.abs(numericValue) >= 1000) {
              return `${(numericValue / 1000).toFixed(0)}k`;
            }
            return numericValue;
          },
        },
      },
    },
  };
  
  return (
    <section>
      <SectionHeading title="Sales Overview" />
      <div style={{ position: "relative", width: "100%", maxWidth: "600px", height: "400px" }}>
        <MyChart type="line" data={lineData} options={lineOptions} />
      </div>
    </section>
  );
}

export default SalesOverview;