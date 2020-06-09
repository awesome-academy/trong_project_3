import React from 'react';
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import message from "./message";
import { color_linear1 } from "utils/variable";

const Brand = () => {
  const BrandName  = styled.a`
  position: relative;
  display:inline-block;
  p{
      font-size: 3.5rem;
      font-weight:700;
      color: ${color_linear1};
      text-transform: lowercase;
      span:nth-child(2){
          color:#444444;
      }
  }
  &>span{
      position: absolute;
      top: 0;
      right:0;
      transform: translate(100%,100%);
      font-size: 1rem;
      font-weight:900;
      color: #444444;
  }
  `
  return (
    <BrandName>
      <p>
            <FormattedMessage {...message.the}/>
          <span>
            <FormattedMessage {...message.movie}/>
          </span>
    </p>
        <span>
          &copy;
        </span>
    </BrandName>
  );
}

export default Brand;