import "./app.scss";
import HeaderNav from "./HeaderNav";
import MainRoutes from "./MainRouts";

const App = () => {
  return (
    <>
      <HeaderNav />

      <main className="page-main">
        <MainRoutes />
      </main>
    </>
  );
};

export default App;
/*  */
