import React from 'react';
import { Layout } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './modules/Home';
import { store } from './store';
import { Provider } from 'react-redux';
// import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Header className="ant-layout-header--white">Meet&Greet</Header>
          <Content className="ant-layout-content--custom">
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Content>
          <Footer>Umer Farooq @ 2022</Footer>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
