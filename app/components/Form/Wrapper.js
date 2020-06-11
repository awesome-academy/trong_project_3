import styled from "styled-components";
import { color_darkgrey, color_border,color_linear1,color_linear2 } from "utils/variable";

export default styled.form`
  display:flex;
  flex-direction:column;
  input,select{
    padding: 5px;
    color:${color_darkgrey};
    font-size:1.3rem;
    border: 2px solid ${color_border};
    &:nth-child(n+2){
      margin-top: 15px;
    }
  }
  p{
    text-align:center;
    margin-top:10px;
    color:red;
    font-style:italic;
    font-size:1.3rem;
  }
  input[type="submit"]{
    background-color:${color_linear2};
    color:white;
    border: none;
    text-transform:uppercase;
    font-weight:bold;
    padding:11px;
    transition: all .2s linear;
    cursor: pointer;
    &:hover{
      background-color:${color_linear1}
    }
  }
`
