import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import PlanePage from "./pages/PlanePage/PlanePage";
import OrderPage from "./pages/OrderPage/OrderPage";
import CreatePlanePage from "./pages/CreatePlanePage/CreatePlanePage";
import { paths } from "./paths";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.home} element={<HomePage />} />
        <Route path={`${paths.plane}/:id`} element={<PlanePage />} />
        <Route path={paths.createPlane} element={<CreatePlanePage />} />
        <Route path={paths.order} element={<OrderPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
