import Container from "./components/Container";
import SayHello from "./components/SayHello";
import Welcome from "./components/Welcome";
import ProductList from "./components/ProductList";
import ProductCard from "./components/ProductCard";
import WelcomeBanner from "./components/WelcomeBanner";
import CostList from "./components/CostList";
import TaskList from "./components/TaskList";
import SalaryList from "./components/SalaryList";
import Counter from "./components/Counter";
import PasswordInput from "./components/PasswordInput";
import LightSwitch from "./components/LightSwitch";
import ContactForm from "./components/ContactForm";
import WelcomeMessage from "./components/WelcomeMessage";
import AddTwo from "./components/AddTwo";



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
      <AddTwo />
      <WelcomeBanner />
      <CostList />
      <TaskList />
      <SalaryList />
      <Counter />
      <WelcomeMessage />
      <ContactForm />
      <PasswordInput />
      <LightSwitch />

    </Container>

  </>
    
  );
}

export default App;