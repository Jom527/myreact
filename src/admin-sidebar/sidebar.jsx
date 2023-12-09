import { Layout, theme } from 'antd';
import TableComponent from '../table/table-component';
const { Header, Content, Footer} = Layout;
import { data } from "../data/data"
const SiderComponent = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
      <Layout style={{padding:3}}>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <div
            style={{
              margin: '16px 0',
            }}
          >
            <small>User </small>
            <small> / Bills</small>
          </div>
          <div
            style={{
              padding: 24,
              height: '60vh',
              position:'relative',
              background: colorBgContainer,
            }}
          >
            <TableComponent data={data}/>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
            position:'relative',
            width:'100%'
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
  );
};
export default SiderComponent;