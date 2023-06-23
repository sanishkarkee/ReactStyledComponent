import './App.css';
import StyledButton, {
  FancyButton,
  SubmitButton,
} from './components/Button/Button';
// import logo from './logo.svg';
import './styles.css';
import { AnimatedLogo } from './components/Button/Button';

function App() {
  return (
    <div className="App">
      {/* <img src="{logo}" className="App-logo" alt="logo" /> */}
      <AnimatedLogo src="https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
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
      <SubmitButton>Submit Button</SubmitButton>
    </div>
  );
}

export default App;

// VIDEO SOURCE: https://www.youtube.com/watch?v=6KBhBt_8EFo&list=PLC3y8-rFHvwgu-G08-7ovbN9EyhF_cltM&index=5
