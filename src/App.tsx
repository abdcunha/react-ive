import "./App.css";
import HealthStatus from "./components/HealthStatus/HealthStatus";
import { useHealth } from "./hooks/useHealth";
import Greeting from "./components/Greeting/Greeting";
import Counter from "./components/Counter/Counter";
import Timer from "./components/Timer/Timer";
import { ThemeProvider } from "./context/ThemeProvider";
import { useTheme } from "./context/useTheme";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import ExpensiveCalculation from "./components/ExpensiveCalculation/ExpensiveCalculation";
import WindowWidth from "./components/WindowWidth/WindowWidth";

const ThemedApp: React.FC = () => {
  const { theme } = useTheme();
  const { health, error, loading } = useHealth();

  return (

    <div className={theme === "dark" ? "dark-theme" : "light-theme"}>
      <Greeting name="World" />
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
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}

export default App;