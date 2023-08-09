import { Sidebar } from "./components/sidebar/Sidebar";
import { Home } from "./components/home/Home";

export default function App () {
  return(
    <div className="flex relative">
      <Sidebar />
      <Home />
    </div>
  );
}