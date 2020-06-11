import React from 'react';
import Wrapper from "./Wrapper";
const index = ( {children,action} ) => {
  return (
    <Wrapper onSubmit={action}>
      {
        children
      }
    </Wrapper>
  );
}

export default index;
