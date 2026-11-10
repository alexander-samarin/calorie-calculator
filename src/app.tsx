import { MetaProvider } from "@solidjs/meta";
import { Router, useLocation } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense, createEffect, on } from "solid-js";
import "./app.css";

declare global {
  interface Window {
    goatcounter?: { count?: (vars?: { path?: string }) => void };
  }
}

/**
 * GoatCounter counts the initial page load itself; this reports
 * client-side navigations (language switch, links) as pageviews.
 */
function PageviewTracker() {
  const location = useLocation();
  createEffect(
    on(
      () => location.pathname,
      (path) => window.goatcounter?.count?.({ path }),
      { defer: true },
    ),
  );
  return null;
}

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <PageviewTracker />
          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
