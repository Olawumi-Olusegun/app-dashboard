
import Dashboard from "./components/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";

export default function Home() {


  return (
    <main className="grid gap-4 p-4 grid-cols-1 md:grid-cols-[auto,_1fr]">
      <Sidebar />
      <Dashboard />
    </main>
  );
}
