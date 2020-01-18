import styled from "styled-components";

export default styled.div.attrs({
  className: "flex-auto p-4 w-1/5 mb-1 mr-1 "
})`
  border: 1px solid #222;
  background: ${props => (props.selected ? "#aaabbb" : "inherit")};
  height: 200px;
`;
