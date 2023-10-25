import { AdvertiserProvider } from "./providers/AdvertiserProvider";
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
          <AdvertiserProvider>
            <BuyerProvider>
              <RoutesMain />
            </BuyerProvider>
          </AdvertiserProvider>
        </RegisterProvider>
      </AuthProvider>
    </>
  );
}

export default App;
