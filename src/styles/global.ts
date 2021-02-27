import { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
export default createGlobalStyle`
* {
  margin: 0;
  padding:0;
  box-sizing: border-box;
  outline: 0;
}
body {
  background: #fff;
  color: #333;
  -webkit-font-smoothing: antialiased;
}
body, input, button {
  font-family: 'Open sans', serif;
  font-size: 16px;
}
h1, h2, h3, h4, h6, strong {
  font-family: 'Open sans', serif;
  font-weight: 500;
}
button {
  cursor: pointer;
}
`;
