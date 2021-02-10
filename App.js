import React from "react";
import { AuthProvider } from "./app/context/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import OfflineBanner from "./app/components/OfflineBanner";
import TotalNav from "./app/navigators/TotalNav";

function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <OfflineBanner />
        <TotalNav />
      </NavigationContainer>
    </AuthProvider>
  );
}

export default App;
