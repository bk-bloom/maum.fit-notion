import { useState, useEffect} from "react";

import axios from "axios";
import 'react-notion/src/styles.css';
import { NotionRenderer } from "react-notion";

export default function App() {
  const [response, setResponse] = useState({});

  useEffect(() => {
    const NOTION_PAGE_ID = 'fcec50ca96c5414c9348622112f3208d';
    axios
      .get(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then(({ data }) => {
        console.log(data);
        setResponse(data);
      });
  }, []);

  return (
    Object.keys(response).length ? (
      <NotionRenderer blockMap={response} fullPage={true} customDecoratorComponents={{
        a: ({ decoratorValue, children }) => {
            console.log(decoratorValue);
            return (
          <a href={`${process.env.REACT_APP_BASENAME}${decoratorValue}`} style={{color: "#37352F"}}>
            {children}
          </a>
        )}
      }} />
    ) : null
  );
}