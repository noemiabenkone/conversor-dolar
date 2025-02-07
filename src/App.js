import { Container, Title, Converter, Input, Button} from "./styles.js";

function App() {
  return (
    <Container>
      <Title>Conversor Dólar</Title>
      <Converter>
        <Input type="number" placeholder="Valor em real" />
        <Button>Converter</Button>
      </Converter>
    </Container>
  );
}

export default App;
