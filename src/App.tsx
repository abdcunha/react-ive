import "./App.css";
import { HealthStatus } from "./components/HealthStatus";
import { useHealth } from "./hooks/useHealth";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import Timer from "./components/Timer";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";
import ExpensiveCalculation from "./components/ExpensiveCalculation";
import WindowWidth from "./components/WindowWidth";

function App() {
  const { health, error, loading } = useHealth();

  return (
    <ThemeProvider>
      <div>
        <Greeting name="World!" />
        <Counter />
        <Timer />
        <ThemeSwitcher />
        <ExpensiveCalculation />
        <WindowWidth />
        <HealthStatus
          health={health}
          error={error}
          loading={loading}
        />
      </div>
    </ThemeProvider>

  );
};

export default App;