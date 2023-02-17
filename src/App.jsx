import "./App.css";
import { Route, RouterProvider } from "navigation-router";
import { useNavigate, useRouterState } from "navigation-router";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <RouterProvider>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/test-url">
          <TU />
        </Route>
        <Route path="/messages">Messages</Route>
        <Route path="/projects">Projects</Route>
        <Route path="/notifications">Notificatons</Route>
        <Route path="/settings">Settings</Route>
      </RouterProvider>
    </div>
  );
}

export default App;

function Home() {
  const state = useRouterState();
  const navigate = useNavigate();

  return (
    <div>
      HOME
      <button onClick={() => navigate("/test-url")}>Navigate</button>
    </div>
  );
}

function TU() {
  const navigate = useNavigate();
  const state = useRouterState();
  return (
    <div>
      TEST-URL
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
}
