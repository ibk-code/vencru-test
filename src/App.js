// ------------- import external dependencies ----------
import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// -------------- import internal dependencies --------------
import DashboardRoutes from "./routes/DashboardRoutes";
// ------- import routes config --------
import { routes } from "./routes/routes";

import "./css/main.css";

function App() {
  return (
    <>
      <Suspense>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/settings" />} />
            <Route path="/*" element={<DashboardRoutes routes={routes} />} />
          </Routes>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
