"use client";
import store from "@/redux/store";
import { Provider } from "react-redux";
import OrderOverview from "./component/card";
import SideBar from "./component/sidebar";
import NavbarComponent from "./component/navbar";
import Overview from "./component/overview";
import InventoryOverview from "./component/inventryoverivew";
import  Tickets  from  "./component/tickets";
export default function Home() {
  return (
    <Provider store={store}>
      < >
        <div className="flex flex-row w-full  " >
         <div>
          <SideBar/>
          </div>
           <div className="flex flex-col w-full">
            <NavbarComponent/>
            <div className="flex lg:flex-row flex-col ">
              <div className="flex-1 p-6 bg-gray-100  ">
              <OrderOverview/>
              <Overview/>
              </div>
              <div className="bg-gray-100">
                <InventoryOverview/>
                <Tickets/>
              </div>
            </div>
            </div>
                  
        </div>
        
       
       
      </>
    </Provider>
  );
}
