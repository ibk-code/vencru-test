// ----------- import external deopendencies ------------
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

// ------------- import internal dependencies -------------
import SkipToContent from "../Ally";

function Seo({
  page,
  children,
  content = "Skip to content",
  section = "main",
  allowSkip,
}) {
  return (
    <>
      <Helmet>
        <title>{`Untitled UI - ${page || "Home"}`}</title>
      </Helmet>
      {allowSkip && <SkipToContent content={content} section={section} />}
      {children}
    </>
  );
}

Seo.propTypes = {
  page: PropTypes.string,
  children: PropTypes.node,
  content: PropTypes.string,
  section: PropTypes.string,
  allowSkip: PropTypes.bool,
};

export default Seo;
