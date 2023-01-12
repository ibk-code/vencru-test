// ----------- import external dependencies ------------
import styled from "styled-components";

// ------------ import internal dependencies -----------
import { ReactComponent as SearchIcon } from "../../assets/img/svgs/search.svg";

function SearchInput() {
  return (
    <>
      <span id="search" className="hidden">
        Search
      </span>
      <SearchWrapper>
        <SearchIcon />
        <input
          type="search"
          aria-labelledby="search"
          className="input-control"
          placeholder="Search"
        />
      </SearchWrapper>
    </>
  );
}

export default SearchInput;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid var(--grey300);
  padding: 0 0.5rem;
  border-radius: 8px;

  & input {
    border: none;
    outline: 0;
    margin: 0;
  }
`;
