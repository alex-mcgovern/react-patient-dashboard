import { StrictMode } from "react";

import { ErrorBoundary } from "@sentry/react";
import { RouterProvider, Toaster } from "boondoggle";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { navigate } from "wouter/use-browser-location";

import { ErrorMessage } from "@shared/components";
import { store } from "@shared/redux";

import App from "./app.tsx";

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ErrorBoundary fallback={ErrorMessage}>
			<RouterProvider navigate={navigate}>
				<ReduxProvider store={store}>
					<App />
					<Toaster />
				</ReduxProvider>
			</RouterProvider>
		</ErrorBoundary>
	</StrictMode>,
);
