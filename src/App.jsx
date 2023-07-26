// IMPORT
import './App.css'
import Container from './components/Container';
import XmasStage from './components/XmasStage';
import Panel from './components/Panel';
import XmasTree from './components/XmasTree';
// ________________________

// COMPONENTI
function App() {
  return (
    <Container>
      <XmasStage>
        <Panel />
        <XmasTree />
      </XmasStage>
    </Container>
  );
}

export default App
// ____________________________
