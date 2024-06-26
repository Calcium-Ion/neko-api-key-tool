import React from 'react';
import ReactDOM from 'react-dom/client';
import { Layout } from '@douyinfe/semi-ui';
import App from './App';
import HeaderBar from './components/HeaderBar';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import { ThemeProvider } from './context/Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
const { Sider, Content, Header } = Layout;
root.render(
  <ThemeProvider>
    <Layout>
      <Header>
        <HeaderBar />
      </Header>
      <Layout>
        <Content style={{ padding: 24 }}>
          <App />
        </Content>
      </Layout>
    </Layout>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
