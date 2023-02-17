import "./App.css";
import { Route, RouterProvider } from "navigation-router";
import { useNavigate, useRouterState } from "navigation-router";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <section className="view__section">
        <RouterProvider>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/messages">
            <h1 className="text">Messages</h1>
          </Route>
          <Route path="/projects">
            <h1 className="text">Projects</h1>
          </Route>
          <Route path="/notifications">
            <h1 className="text">Notificatons</h1>
          </Route>
          <Route path="/settings">
            <h1 className="text">Settings</h1>
          </Route>
          <Route path="/project-1">
            <h1 className="text">Project 1</h1>
          </Route>
          <Route path="/project-2">
            <h1 className="text">Project 2</h1>
          </Route>
          <Route path="/progress">
            <h1 className="text">Progress</h1>
          </Route>
          <Route path="/goals">
            <h1 className="text">Goals</h1>
          </Route>
        </RouterProvider>
      </section>
    </div>
  );
}

export default App;

function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems:'center',
        justifyContent: "center",
      }}
    >
      <h1 className="text">HOME</h1>
      <button onClick={() => navigate("/settings")}>Navigate-to-Setting</button>
    </div>
  );
}
