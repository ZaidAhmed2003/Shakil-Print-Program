import React from "react";
import Layout from "../../components/Layout";
import DashboardCard from "./components/DashboardCard";
import { dashboardItems } from "../../components/Content";
import { useSelector } from "react-redux";

const Dashboard = () => {

  const purchaseOrders = useSelector(
    (state) => state.purchaseOrderData.purchaseOrders,
  );

  return (
    <Layout title="Dashboard">
      <div className="flex flex-wrap gap-8">
        {dashboardItems.map((item) => (
          <DashboardCard value={purchaseOrders.length} text={item.text} icon={item.icon} />
        ))}
      </div>
    </Layout>
  );
};

export default Dashboard;
