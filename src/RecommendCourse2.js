import { useState, useEffect} from "react";

import axios from "axios";
import 'react-notion/src/styles.css';
import { NotionRenderer } from "react-notion";

export default function RecommendCourse2() {
  const [response, setResponse] = useState({});

  useEffect(() => {
    const NOTION_PAGE_ID = process.env.REACT_APP_NOTION_RECOMMENDED_2;
    axios
      .get(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then(({ data }) => {
        console.log(data);
        setResponse(data);
      });
  }, []);

  return (
    Object.keys(response).length ? (
        <NotionRenderer blockMap={response} fullPage={true} />
    ) : null
  );
}