import Header from '../Components/Header/Header';
import Info from '../Components/Info/Info';
import InputField from '../Components/InputField/InputField';
import './App.css';

export default function App() {
  return (
    <div className="App-container">
      <header className='header-container'>
        <Header />
      </header>
      <div className='main-info-container'>
        <Info />
      </div>
      <div className='main-input-container'>
        <InputField />
      </div>
    </div>
  );
}


