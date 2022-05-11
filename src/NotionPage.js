import { useState, useEffect} from "react";

import axios from "axios";
import 'react-notion/src/styles.css';
import { NotionRenderer } from "react-notion";

export default function NotionPage({id}) {
  const [response, setResponse] = useState({});

  useEffect(() => {
    axios
      .get(`https://notion-api.splitbee.io/v1/page/${id}`)
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