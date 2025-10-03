import CardsLayout from "../components/cards/Cards.js";
import SalesOverview from "../components/charts/LineChart.js";
import Customers from "../components/charts/BarChart.js";

function Dashboard() {
  return (
    <main>
      <CardsLayout />
      <SalesOverview />
      <Customers />
    </main>
  );
}

export default Dashboard;
