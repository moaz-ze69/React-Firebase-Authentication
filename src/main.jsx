import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

import ScreenLoader from "./components/ScreenLoader.jsx";
import Loader from "./components/Loader.jsx";
import store, { Persistor } from "./stores/rootStore.js";

import App from "./App.jsx";
import "./index.css";

if (process.env.NODE_ENV === "production") disableReactDevTools();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={Persistor}>
        <Suspense fallback={<ScreenLoader />}>
          <App />
        </Suspense>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
