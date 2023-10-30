import Navbar from "./components/Navbar";
import ProductState from "./context/product/state";
import Allroutes from "./routes/allroutes";

function App() {
  return (
    <>
      <ProductState>
        <Navbar />
        <div>
          <Allroutes />
        </div>
      </ProductState>
    </>
  );
}

export default App;
