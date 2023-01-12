// ----------- import external dependencies -----------
import styled from "styled-components";

// ---------- import internal dependencies ------------
import { sizes } from "../../utils/screenSizes";

function LayoutHeader({ heading, subheading, children }) {
  return (
    <HeaderWrapper className="mt-4">
      <div className=" xs:mb-4">
        {heading && (
          <h1 className="text-3xl font-medium text-grey-900">{heading}</h1>
        )}
        {subheading && (
          <span className="block text-grey-500 font-light">{subheading}</span>
        )}
      </div>
      {children}
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  @media screen and (max-width: ${sizes.mobileL}) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    margin-top: 2rem;
  }
`;

export default LayoutHeader;
