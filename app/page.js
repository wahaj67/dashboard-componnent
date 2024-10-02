"use client";
import store from "@/redux/store";

import { Provider } from "react-redux";
import Main from "./component/main";


export default function Home() {
  return (
    <Provider store={store}>
      <div>
      <Main/>
      </div>
    </Provider>
  );
}
