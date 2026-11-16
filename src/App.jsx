import Container from "./components/Container";
import SayHello from "./components/SayHello";
import Welcome from "./components/Welcome";
import ProductList from "./components/ProductList";
import ProductCard from "./components/ProductCard";
import WelcomeBanner from "./components/WelcomeBanner";
import CostList from "./components/CostList";
import TaskList from "./components/TaskList";
import SalaryList from "./components/SalaryList";



 function App() {
  return(
    <>

    <Container>
      <SayHello />
      <Welcome />
      <Welcome />
      <div className="flex flex-col items-center w-full border">
    <h2 className="font-bold text-5xl"> Our Products </h2>
    <ProductList/>
      </div>

      <div>
      <h1> Main Products </h1>
      </div>
      <ProductCard/>

      <WelcomeBanner />
      <CostList />
      <TaskList />
      <SalaryList />

    </Container>

  </>
    
  );
}

export default App;