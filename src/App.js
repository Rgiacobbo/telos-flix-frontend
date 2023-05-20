import "./App.css";
import Header from "./components/header";
import UserProvider from "./contexts/UserProvider";
import AppRoutes from "./routes";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Header />
        <div style={{ marginLeft: "170px" }}>
          <AppRoutes />
        </div>
      </UserProvider>
    </div>
  );
}

export default App;
