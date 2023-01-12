// ----------- import external dependencies ------------
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

// ---------- import internal dependencies ----------
import SearchInput from "../../../components/SearchInput";
// ------ import assets -------
import brandLogo from "../../../assets/img/logo.png";
import { ReactComponent as HomeIcon } from "../../../assets/img/svgs/home.svg";
import { ReactComponent as TaskIcon } from "../../../assets/img/svgs/order.svg";
import { ReactComponent as DashboardIcon } from "../../../assets/img/svgs/report.svg";
import { ReactComponent as ProjectIcon } from "../../../assets/img/svgs/products.svg";
import { ReactComponent as ReportingIcon } from "../../../assets/img/svgs/reporting.svg";
import { ReactComponent as UsersIcon } from "../../../assets/img/svgs/users.svg";
import { ReactComponent as SupportIcon } from "../../../assets/img/svgs/support.svg";
import { ReactComponent as LogoutIcon } from "../../../assets/img/svgs/logout.svg";
import { ReactComponent as SettingsIcon } from "../../../assets/img/svgs/settings.svg";
import AvatarPng from "../../../assets/img/avatar.png";
import Feature from "../../../assets/img/feature.png";
// ------ import utils ------
import { sizes } from "../../../utils/screenSizes";

function Sidebar({ close }) {
  // ------- routes config ------
  const routes = [
    {
      path: "/home",
      icon: HomeIcon,
      title: "Home",
    },
    {
      path: "/dashboard",
      icon: DashboardIcon,
      title: "Dashboard",
      info: 10,
    },
    {
      path: "/projects",
      icon: ProjectIcon,
      title: "Projects",
    },

    {
      path: "/tasks",
      icon: TaskIcon,
      title: "Tasks",
    },
    {
      path: "/reporting",
      icon: ReportingIcon,
      title: "Reporting",
    },
    {
      path: "/users",
      icon: UsersIcon,
      title: "Users",
    },
  ];

  const secondRoutes = [
    {
      path: "/support",
      icon: SupportIcon,
      title: "Support",
    },
    {
      path: "/settings",
      icon: SettingsIcon,
      title: "Settings",
    },
  ];
  return (
    <>
      <SidebarWrapper>
        <div
          className="flex justify-end cursor-pointer close-menu"
          onClick={close}
        >
          <span className="text-grey-700 text-2xl">&times;</span>
        </div>
        <div>
          <img src={brandLogo} alt="Mudala brand logo" />
          <div className="mt-4">
            <SearchInput />
          </div>
        </div>
        <nav>
          <ul>
            {routes.map((route, ind) => (
              <li key={ind}>
                <NavLink
                  to={route.path}
                  className={({ isActive }) =>
                    isActive ? "menu-active" : "menu-link"
                  }
                >
                  <div className=" flex gap-3">
                    <route.icon />
                    <span>{route.title}</span>
                  </div>
                </NavLink>
                {route?.info && <span className="menu-info">{route.info}</span>}
              </li>
            ))}
          </ul>

          {/* ------ second route ------ */}
          <ul className="mt-4">
            {secondRoutes.map((route, ind) => (
              <li key={ind}>
                <NavLink
                  to={route.path}
                  className={({ isActive }) =>
                    isActive ? "menu-active" : "menu-link"
                  }
                >
                  <div className=" flex gap-3">
                    <route.icon />
                    <span>{route.title}</span>
                  </div>
                  {route?.info && (
                    <span className="menu-info">{route.info}</span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* ------- new featue  alert ------- */}
          <FeatureBox>
            <div>
              <span className=" text-grey-900 block text-sm">
                New features available!
              </span>
              <span className="text-grey-500 block text-xs">
                Check out the new dashboard view. Pages now load faster.
              </span>
            </div>
            <img src={Feature} alt="Feature alert" />
            <div className="flex pt-4 gap-3">
              <Link to="#" className="text-grey-500 text-sm">
                Dismiss
              </Link>
              <Link to="#" className="text-purple-700 text-sm">
                What’s new?
              </Link>
            </div>
          </FeatureBox>
        </nav>
        <div className="nav-bottom">
          <ThinLine className="mt-6" />
          <div className="flex gap-4 items-center mt-4">
            <img src={AvatarPng} alt="User profile" />
            <div>
              <div className="flex justify-between w-full items-center">
                <span className="text-sm block text-grey-900">Olivia Rhye</span>

                <span className="block cursor-pointer" role="button">
                  <LogoutIcon />
                </span>
              </div>
              <span className="text-sm block text-grey-500">
                olivia@mudala.com
              </span>
            </div>
          </div>
        </div>
      </SidebarWrapper>
    </>
  );
}

export default Sidebar;

const SidebarWrapper = styled.aside`
  height: 100vh;
  width: 250px;
  position: fixed;
  top: 0;
  background: var(--white100);
  padding: 2rem 1.25rem;
  overflow-y: auto;
  padding-bottom: 0;
  border-right: 1px solid var(--grey200);
  transition: all 0.3s ease-in-out;
  z-index: 1;
  overscroll-behavior: contain;

  & ul {
    list-style: none;
    padding: 0;

    & li {
      margin-bottom: 0.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  & .nav-bottom {
    position: absolute;
    bottom: -6rem;
    padding-bottom: 1rem;
  }

  & .close-menu {
    display: none;
  }

  @media screen and (max-width: ${sizes.tablet}) {
    & .nav-bottom {
      bottom: 0rem;
    }

    & .close-menu {
      display: flex;
    }
  }

  @media screen and (max-width: ${sizes.mobileL}) {
    & .nav-bottom {
      bottom: -3rem;
    }
  }
`;

const ThinLine = styled.div`
  background: var(--grey200);
  height: 1px;
  width: 100%;
`;

const FeatureBox = styled.div`
  background: var(--grey50);
  padding: 1rem 0.5rem;
  border-radius: 8px;

  img {
    border-radius: 8px;
    display: block;
    margin-top: 0.8rem;
`;
