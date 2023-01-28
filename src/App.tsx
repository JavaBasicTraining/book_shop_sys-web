import { ConfigProvider } from "antd";
import "./App.css";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#00b96b",
          colorBorderBg: "#00b96b",
        },
      }}
    >
      <MainLayout />
    </ConfigProvider>
  );
}

export default App;
