// ------------ import external dependencies ------------
import { Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";

// ----------- import internal dependencies -----------
import DashboardLayout from "../layouts/DashboardLayout";

function DashboardRoutes({ routes }) {
  return (
    <>
      <DashboardLayout>
        <Routes>
          {routes.map((route, ind) => (
            <Route path={route.path} key={ind} element={<route.component />} />
          ))}
        </Routes>
      </DashboardLayout>
    </>
  );
}

DashboardRoutes.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object),
};

export default DashboardRoutes;
