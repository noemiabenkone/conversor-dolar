import { useState } from "react";
import { Container, Title, Converter, Input, Button} from "./styles.js";

function App() {
  const [valueReal, setValueReal] = useState(0)

  const handleConverte = () => {
    console.log(valueReal/5.79)
  }
  const handleValueReal = (evento) =>{
    setValueReal(evento.target.value)
  }
  return (
    <Container>
      <Title>Conversor Dólar</Title>
      <Converter>
        <Input value={valueReal} onChange={handleValueReal} type="number" placeholder="Valor em real" />
        <Button onClick={handleConverte}>Converter</Button>
      </Converter>
      {valueReal}
    </Container>
  );
}

export default App;
