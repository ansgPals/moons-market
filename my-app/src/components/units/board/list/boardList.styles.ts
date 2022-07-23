import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
  width: 120rem;
`;
export const Title = styled.div`
  font-size: 3.5rem;
  font-family: "SUIT700";
`;
export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 2px solid gray;
  width: 60rem;
  margin-top: 2rem;
  padding: 0px 1rem;
  border-radius: 1rem;
  :focus-within {
    border: 2px solid #b181f9;
  }
`;
export const SearchInput = styled.input`
  width: 53rem;
  font-size: 2rem;
  border: none;
  :focus {
    border: none;
    outline: none;
  }
`;
export const SearchInputIcon = styled(SearchIcon)`
  font-size: 4rem;
  color: black;
`;
export const Contents = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 120rem;
  justify-content: center;
  align-items: center;
`;
