// -------------- import external dependencies ------------
import PropTypes from "prop-types";

// ------------ import internal dependencies -------------
import { SkipToContentStyle } from "./style";

const SkipToContent = ({ section, content }) => {
  return (
    <>
      <SkipToContentStyle
        className="skip text-white"
        href={`#${section}`}
        aria-label={content}
      >
        {content}
      </SkipToContentStyle>
    </>
  );
};

SkipToContent.propTypes = {
  section: PropTypes.string,
  content: PropTypes.string,
};

export default SkipToContent;
