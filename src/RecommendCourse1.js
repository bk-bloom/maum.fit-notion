import { useState, useEffect} from "react";

import axios from "axios";
import 'react-notion/src/styles.css';
import { NotionRenderer } from "react-notion";

export default function RecommendCourse1() {
  const [response, setResponse] = useState({});

  useEffect(() => {
    const NOTION_PAGE_ID = '3b1d264eb83741cead6ae25d50f1b3f7';
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