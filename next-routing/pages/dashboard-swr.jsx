import useSWR from "swr";
async function fetchtDashdata() {
  const response = await fetch("http://localhost:5000/dashboard");
  const data = await response.json();
  return data[0];
}

export default function DashboardSWR() {
  const y = useSWR("/dashboard", fetchtDashdata);
  console.log(useSWR);
  if (error) return "An error has occured";
  if (!data) return "loading";
  return (
    <div>
      <h1>This is dashboard</h1>
      <h2>Posts - {dashboardData.likes}</h2>
    </div>
  );
}
