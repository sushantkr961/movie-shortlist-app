import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import Navigation from "./src/navigation";
import store from "./src/redux/store";
import { NavigationContainer } from "@react-navigation/native";

const queryClient = new QueryClient();

const App = () => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </QueryClientProvider>
  </Provider>
);

export default App;
