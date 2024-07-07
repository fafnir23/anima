import { Layout, Typography } from "antd";

const { Header: AntHeader } = Layout;

const Header = () => {
    return (
        <AntHeader
            style={{
                display: "flex",
                alignItems: "center",
            }}
        >
            <Typography.Title>Anima </Typography.Title>
        </AntHeader>
    );
};

export default Header;
