import './App.css';
import StyledButton, {
  FancyButton,
  SubmitButton,
} from './components/Button/Button';

function App() {
  return (
    <div className="App">
      {/* <button>Button</button> */}
      <StyledButton type="submit">Styled Button</StyledButton>
      <div>
        <br />
      </div>
      <StyledButton variant="outline">Styled Button</StyledButton>
      <div>
        <br />
      </div>
      <FancyButton as="a">Fancy Button</FancyButton>{' '}
      {/* as =a gare pachi fancy button as <a> tag display huncha*/}
      <div>
        <br />
      </div>
      <SubmitButton>Submit</SubmitButton>
    </div>
  );
}

export default App;

// VIDEO SOURCE: https://www.youtube.com/watch?v=6KBhBt_8EFo&list=PLC3y8-rFHvwgu-G08-7ovbN9EyhF_cltM&index=5
