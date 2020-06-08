import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after{
    padding:0;
    margin: 0;
    box-sizing:border-box;
  }
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
    font-size:10px
  }
  button{
    border: none;
    background-color:initial;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
  a{
    text-decoration:none;

  }
  img{
    width:100%;
    height:100%;
    object-fit:cover;
  }
  [type="radio"]{
    display:none;
  }
`;

export default GlobalStyle;
