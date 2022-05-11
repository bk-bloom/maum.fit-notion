import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotionPage from './NotionPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<NotionPage id={process.env.REACT_APP_NOTION_TODAY} />} />
        <Route exact path="/fcec50ca96c5414c9348622112f3208d" element={<NotionPage id={process.env.REACT_APP_NOTION_TODAY} />} />
        <Route path={`/${process.env.REACT_APP_NOTION_ANNOUNCEMENT}`} element={<NotionPage id={process.env.REACT_APP_NOTION_ANNOUNCEMENT}  />} />
        <Route path={`/${process.env.REACT_APP_NOTION_RECOMMENDED_1}`} element={<NotionPage id={process.env.REACT_APP_NOTION_RECOMMENDED_1} />} />
        <Route path={`/${process.env.REACT_APP_NOTION_RECOMMENDED_2}`} element={<NotionPage id={process.env.REACT_APP_NOTION_RECOMMENDED_2} />} />
        <Route path={`/${process.env.REACT_APP_NOTION_RECOMMENDED_3}`} element={<NotionPage id={process.env.REACT_APP_NOTION_RECOMMENDED_3} />} />
        <Route path={`/${process.env.REACT_APP_NOTION_RECOMMENDED_4}`} element={<NotionPage id={process.env.REACT_APP_NOTION_RECOMMENDED_4} />} />
        <Route path={`/${process.env.REACT_APP_NOTION_RECOMMENDED_5}`} element={<NotionPage id={process.env.REACT_APP_NOTION_RECOMMENDED_5} />} />
        <Route path={`/${process.env.REACT_APP_NOTION_RECOMMENDED_6}`} element={<NotionPage id={process.env.REACT_APP_NOTION_RECOMMENDED_6} />} />
        <Route path={`/${process.env.REACT_APP_NOTION_RECOMMENDED_7}`} element={<NotionPage id={process.env.REACT_APP_NOTION_RECOMMENDED_7} />} />
        <Route path={`/${process.env.REACT_APP_NOTION_RECOMMENDED_8}`} element={<NotionPage id={process.env.REACT_APP_NOTION_RECOMMENDED_8} />} />
        <Route path={`/${process.env.REACT_APP_NOTION_RECOMMENDED_9}`} element={<NotionPage id={process.env.REACT_APP_NOTION_RECOMMENDED_9} />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

