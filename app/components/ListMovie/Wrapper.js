import styled from "styled-components";
import { breakpoint_sm, breakpoint_md } from "utils/variable";

export default styled.div`
  display:grid;
  grid-template-columns:repeat(1,1fr);
  grid-gap:20px;
  @media all  and (min-width:${breakpoint_sm}) {
    grid-template-columns:repeat(2,1fr);
  }
  @media all  and (min-width:${breakpoint_md}) {
    grid-template-columns:repeat(3,1fr);
  }
`
