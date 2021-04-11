import {Button, Container, Input, InputGroup, InputGroupAddon} from "reactstrap";


function App() {
  return (
      <Container>
        <InputGroup>
          <Input placeholder="Название дела"/>
          <InputGroupAddon addonType={"append"}>
            <Button style={{
              backgroundColor: "#3a62fb"
            }}>+</Button>
          </InputGroupAddon>
        </InputGroup>
        <div style={{
          marginTop: "10px"
        }}>
          <div style={{
            display: "grid",
            justifyItems: "center",
            alignItems: "center",
            gridTemplateColumns: "50px auto",
            width: "100%",
            minHeight: "80px",
            borderBottom: "1px solid black",
            borderTop: "1px solid black"
          }}>
            <div className={"round"} style={{justifySelf: "flex-start"}}>
              <input id="checkbox" type={"checkbox"}/>
              <label htmlFor="checkbox"></label>
            </div>
            <div >Hello</div>
          </div>
          <div style={{
            display: "grid",
            justifyItems: "center",
            alignItems: "center",
            gridTemplateColumns: "50px auto",
            width: "100%",
            minHeight: "80px",
            borderBottom: "1px solid black",
            borderTop: "1px solid black"
          }}>
            <div className={"round"} style={{justifySelf: "flex-start"}}>
              <input id="checkbox1" type={"checkbox"}/>
              <label htmlFor="checkbox1"></label>
            </div>
            <div >Hello</div>
          </div>
        </div>
      </Container>
  );
}

export default App;
