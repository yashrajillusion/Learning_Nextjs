import { useEffect, useState } from "react";

export default function Dashboard() {
  const [isLoading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);
  useEffect(() => {
    async function fetchtDashdata() {
      const response = await fetch("http://localhost:5000/dashboard");
      const data = await response.json();
      setDashboardData(data[0]);
      setLoading(false);
    }
    fetchtDashdata();
  }, []);
  if (isLoading) {
    return <h2>Loading.....</h2>;
  }
  return (
    <div>
      <h1>This is dashboard</h1>
      <h2>Posts - {dashboardData.likes}</h2>
    </div>
  );
}
