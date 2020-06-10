import React from 'react';
import Wrapper from "./Wrapper";
import ItemMovie from "./ItemMovie";

const index = ({listMovie}) => {
  return (
    <Wrapper>
        {
          listMovie ? listMovie.map( item => <ItemMovie key={item.id} movie={item} /> ):""
        }
    </Wrapper>
  );
}

export default index;
