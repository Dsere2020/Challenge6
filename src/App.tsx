import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Page from './components/Page';
import styled from 'styled-components';
import TodoTask from './components/TodoTask';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`
function App() {
  
  return (
    <Container>
      <Page 
      />
    </Container>
  );
}

export default App;
