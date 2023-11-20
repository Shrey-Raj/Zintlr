import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import Header from "./components/AppHeader";
import ConsumerOverview from "./components/ConsumerOverview";
import LowerSection from "./components/LowerSection";
import Chart from "./components/HorizontalChart";
import ColumnChart from "./components/ColumnChart";
import Table from "./components/MyTable";
import ContentRow from './components/ContentRow'
import SecondPage from "./components/SecondPage";

import {Link , Route , Routes} from 'react-router-dom' ; 

const App = () => {
  return (
    <>

    <Routes>
      <Route exact path="/page2" element={<SecondPage/>} />
    </Routes>

      <Layout />

      
      {/* <Header/> */}
      {/* <LowerSection/> */}
      {/* <Chart/> */}
      {/* <ColumnChart/> */}
      {/* <Table /> */}
      {/* <ContentRow/> */}
      {/* <ConsumerOverview/> */}
      {/* <SecondPage/> */}


    </>
  );
};

export default App;
