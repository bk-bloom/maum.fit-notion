import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Announecement from './Announcement';
import App from './App';
import RecommendCourse1 from './RecommendCourse1';
import RecommendCourse2 from './RecommendCourse2';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/fcec50ca96c5414c9348622112f3208d" element={<App />} />
        <Route path={`/${process.env.REACT_APP_NOTION_ANNOUNCEMENT}`} element={<Announecement />} />
        <Route path="/3b1d264eb83741cead6ae25d50f1b3f7" element={<RecommendCourse1 />} />
        <Route path={`/${process.env.REACT_APP_NOTION_RECOMMENDED_2}`} element={<RecommendCourse2 />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

