import "./App.css";
import Banner from "./Components/Banner/Banner";
import ItemList from "./Components/ItemList/ItemList";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <section>
        <Navbar></Navbar>
        <Banner></Banner>
        <ItemList></ItemList>
      </section>
    </>
  );
}

export default App;
