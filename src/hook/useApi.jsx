import axios from "axios";
import React, { useState } from "react";
import store from '../stores/store';

function useApi() {
  const { loader, setLoader } = store();
  const [data, setdata] = useState([]);

  async function getApi(url) {
    setLoader(true)
    try {
      let { data } = await axios({
        method: "GET",
        url: import.meta.env.VITE_API_DUMMYJOSON + url,
      });
      if (data.results) {
        setdata(data.results);
        setLoader(false)
      } else {
        setdata(data);
        setLoader(false)
      }
    } catch (error) {
      throw error;
    }
  }
  return { data, getApi };
}

export default useApi;
