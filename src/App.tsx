import Homepage from "./pages/Homepage";
import { ConfigProvider, theme } from "antd";

function App() {
    return (
        <ConfigProvider
            theme={{
                algorithm: theme.darkAlgorithm,
            }}
        >
            <Homepage />
        </ConfigProvider>
    );
}

export default App;
