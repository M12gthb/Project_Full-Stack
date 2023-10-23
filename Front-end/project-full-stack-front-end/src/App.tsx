import { AuthProvider } from "./providers/AuthProvider";
import { BuyerProvider } from "./providers/BuyerProvider";
import { RegisterProvider } from "./providers/RegisterProvider";
import { RoutesMain } from "./routes";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <AuthProvider>
        <RegisterProvider>
          <BuyerProvider>
            <RoutesMain />
          </BuyerProvider>
        </RegisterProvider>
      </AuthProvider>
    </>
  );
}

export default App;
