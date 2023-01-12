// ---------- import external dependencies -----------
import { useState } from "react";
import styled from "styled-components";

// ----------- import internal dependencies -----------
import LayoutHeader from "../../../components/LayoutHeader";
import Billing from "./billing";
// ------ import utils ------
import { sizes } from "../../../utils/screenSizes";

function Settings() {
  // ----- component state managers -------
  const [active, setActive] = useState("Billing");

  const tabList = [
    "My details",
    "Profile",
    "Password",
    "Team",
    "Plan",
    "Billing",
    "Notifications",
    "integrations",
    "API",
  ];

  let activeTab;

  switch (active) {
    case "Billing":
      activeTab = <Billing />;
      break;

    default:
      activeTab = <Billing />;
      break;
  }

  return (
    <>
      <LayoutHeader
        heading="Settings"
        subheading="Manage your team and preferences here."
      />

      {/* ------ settings tab ----- */}
      <TabContainer className="w-full overflow-auto">
        <TabWrapper className="mt-2 flex items-center">
          {tabList.map((ele, ind) => (
            <Tabs
              key={ind}
              active={ele === active ? true : false}
              onClick={() => setActive(ele)}
            >
              {" "}
              {ele}
            </Tabs>
          ))}
        </TabWrapper>
      </TabContainer>

      <div>{activeTab}</div>
    </>
  );
}

export default Settings;

const TabContainer = styled.div`
  @media screen and (max-width: ${sizes.mobileL}) {
    & ~ div {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }
`;

const TabWrapper = styled.div`
  border: 1px solid var(--grey300);
  border-radius: 8px;
  width: max-content;
  & > span:not(:last-child) {
    border-right: 1px solid var(--grey300);
  }
`;

const Tabs = styled.span`
  display: block;
  background-color: ${(props) =>
    props.active ? "var(--grey50)" : "var(--white100)"};
  color: ${(props) => (props.active ? "var(--grey800)" : "var(--grey700)")};
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  &:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;
