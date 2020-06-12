import React from 'react'
import styled from "styled-components";

export default function index({children}) {
  const Wrapper = styled.div`
    padding: 0 20px;
    @media all and (min-width:1000px ) {
      padding: 0 200px;

    }
  `
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}
