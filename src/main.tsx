import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {App} from "./App";
import {store} from "./store"; // Імпортуйте ваш store
import ErrorBoundary from "./ErrorBoundary.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <ErrorBoundary>
                <App/>
            </ErrorBoundary>
        </Provider>
    </React.StrictMode>
);
