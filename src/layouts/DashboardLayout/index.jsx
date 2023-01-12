// -------------- import external dependencies -------------
import { useState, useEffect } from "react";
import styled from "styled-components";

// ----------- import internal dependencies -----------
import Seo from "../../shared/Seo";
import Sidebar from "./components/Sidebar";
// ----- import assets ------
import brandLogo from "../../assets/img/logo.png";
import { ReactComponent as HamburgerIcon } from "../../assets/img/svgs/hamburger.svg";
// ----- import utils ------
import { sizes } from "../../utils/screenSizes";

function DashboardLayout({ children }) {
  // ------ component state managers ------
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setOpen(false);
    }
  }, []);

  return (
    <>
      <Seo allowSkip={false}>
        <main>
          {open && <Sidebar close={() => setOpen(false)} />}
          <ContentWrapper>
            <MobileWrapper className="mobile-heading">
              <img src={brandLogo} alt="Mudala brand logo" />
              <div className="cursor-pointer" onClick={() => setOpen(true)}>
                <HamburgerIcon />
              </div>
            </MobileWrapper>
            {children}
          </ContentWrapper>
        </main>
      </Seo>
    </>
  );
}

const ContentWrapper = styled.div`
  margin-left: 250px;
  padding: 1.5rem;

  @media screen and (max-width: ${sizes.tablet}) {
    margin-left: 0;
  }

  @media screen and (max-width: ${sizes.mobileL}) {
    padding: 0;
  }
`;

const MobileWrapper = styled.div`
  display: none;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--grey200);
  // padding: 1.5rem 1rem;
  background: var(--white100);
  padding: 1rem;
  margin-bottom: 1rem;

  @media screen and (max-width: ${sizes.tablet}) {
    display: flex;
  }
`;

export default DashboardLayout;
