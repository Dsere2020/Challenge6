import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Page from './components/Page';

const Container  = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0;

`

function App() {
  return (
    <Container>
       <Page/>
    </Container>
  );
}

export default App;
