import "./App.css";
import { HealthStatus } from "./components/HealthStatus";
import { useHealth } from "./hooks/useHealth";

function App() {
  const { health, error, loading } = useHealth();

  return (
    <div className="app">
      <HealthStatus
        health={health}
        error={error}
        loading={loading}
      />
    </div>
  );
};

export default App;