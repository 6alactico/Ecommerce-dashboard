import SectionHeading from "../../utilities/utilities.js";
import MyChart from "./MyChart.js";

function Customers() {
  const labels = ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const dataCurrentYear = [2500, 3200, 3000, 3010, 2700, 2900];

  // Get today's month
  const currentMonth = new Date().toLocaleDateString("default", { month: "short" });
  const currentLabel = labels.indexOf(currentMonth);

  const backgroundColors = labels.map((_, index) =>
    index === currentLabel ? "rgba(255, 99, 132, 1)" : "rgba(255, 255, 255, 1)"
  );

  const barData = {
    labels: labels,
    datasets: [
      {
        label: "Current Month",
        data: dataCurrentYear,
        backgroundColor: backgroundColors,
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        borderRadius: 50,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: {
          callback: function (value: string | number) {
            const numericValue = Number(value);
            if (Math.abs(numericValue) >= 1000) {
              return `$${(numericValue / 1000).toFixed(0)}k`;
            }
            return numericValue;
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <section>
      <SectionHeading title="Customers" />
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "600px",
          height: "400px",
        }}
      >
        <MyChart type="bar" data={barData} options={barOptions} />
      </div>
    </section>
  );
}

export default Customers;
