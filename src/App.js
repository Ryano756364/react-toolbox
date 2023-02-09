import Button from './Button';

function App(){
  return (
    <div>
      <div>
        <Button primary rounded>Click me</Button>
      </div>
      <div>
        <Button secondary>Buy now!</Button>
      </div>
      <div>
        <Button success rounded>Buy now!</Button>
      </div>
      <div>
        <Button warning>Buy now!</Button>
      </div>
      <div>
        <Button danger rounded outline>Buy now!</Button>
      </div>
    </div>
  )
}

export default App;
