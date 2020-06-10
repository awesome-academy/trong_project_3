import styled from "styled-components";
import { color_linear1,color_linear2 } from "utils/variable";

export default styled.div`
  .movie-img{
    position:relative;
    height:500px;
    &:hover > p{
      display:block;
    }
    img{
      object-position: top;
    }
    p{
      display:none;
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
      font-size:1.5rem;
      text-transform:uppercase;
      background-color: rgba(0,0,0,0.7);
      cursor: pointer;
      a{
        position:absolute;
        color:white;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        border: 1px solid  white;
        padding: 5px 10px;
        &:hover{
          background: linear-gradient(to right, ${color_linear1}, ${color_linear2});
          border: none;
          cursor: pointer;
        }
      }
    }
  }
  &>h2{
    display:block;
    margin-top:5px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
  }

`
