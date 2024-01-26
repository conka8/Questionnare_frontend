import Header from "./components/Header";
import GlobalStyle from "./GlobalStyle";
import { Switch, Route, Redirect } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Bridge from "components/Views/Bridge";
import { TopLight } from "AppStyles";
import useViewport from "hooks/useViewport";
import Comingsoon from "components/Views/ComingSoon/Comingsoon";

const App: React.FC = () => {
  const { width } = useViewport();
  const isMobile = width < 1140;
  return (
    <>
      <GlobalStyle />
      {isMobile ? (
        <>
          <TopLight />
          <Comingsoon />
        </>
      ) : (
        <>
          <Header />
          <TopLight />
          <Switch>
            <Route path={["/", "/bridge"]} exact>
              <Bridge />
            </Route>
            <Redirect from="*" to="/" />
          </Switch>
          <ToastContainer newestOnTop={true} />
        </>
      )}
    </>
  );
};

export default App;
