import './App.css';
import Footer from './footer/Footer';
import Page from './home/Page';
import Info from './info/Info';
import Nav from './navbar/Nav';
function App() {
  return (
    <div className="App">
      <Nav/>
     <Page/>
     <Info/>
     <Footer/>
    </div>
  );
}

export default App;
