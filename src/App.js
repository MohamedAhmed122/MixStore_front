import Button from "./commons/Button";
import Input from "./commons/Input";
import Loading from "./commons/Loading";

import Error from "./commons/Error";
import "./App.css";
import Navigation from "./navigation";
import { COLORS } from "./styles/colors";

function App() {
  return (
    <div className="App">
      <Button text='Go Next' color={COLORS.primary} width={200} />
      <Input placeholder='My input' type='email' Icon={() =><div> I love yo </div>} />
      <Loading visible={true} />
    </div>
    // <Navigation />
  );
}

export default App;
