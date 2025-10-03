import "./App.css";
import { HealthStatus } from "./components/HealthStatus";
import { useHealth } from "./hooks/useHealth";

function App() {
  const { health, error, loading } = useHealth();

  return (
    <>
      <HealthStatus
        health={health}
        error={error}
        loading={loading}
      />
    </>
  );
}

export default App;