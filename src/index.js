// index.js
import React from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query"; // Import from "react-query"

import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

const queryClient = new QueryClient();

const root = createRoot(document.getElementById("root"));

root.render(
  <QueryClientProvider client={queryClient}>
    <Router>
      <App />
    </Router>
  </QueryClientProvider>,
);
