import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ApartmentList } from "./apartment/ApartmentList";
import { ApartmentCreate } from "./apartment/ApartmentCreate";
import { ApartmentEdit } from "./apartment/ApartmentEdit";
import { ApartmentShow } from "./apartment/ApartmentShow";
import { ReservationList } from "./reservation/ReservationList";
import { ReservationCreate } from "./reservation/ReservationCreate";
import { ReservationEdit } from "./reservation/ReservationEdit";
import { ReservationShow } from "./reservation/ReservationShow";
import { CheckList } from "./check/CheckList";
import { CheckCreate } from "./check/CheckCreate";
import { CheckEdit } from "./check/CheckEdit";
import { CheckShow } from "./check/CheckShow";
import { RenterList } from "./renter/RenterList";
import { RenterCreate } from "./renter/RenterCreate";
import { RenterEdit } from "./renter/RenterEdit";
import { RenterShow } from "./renter/RenterShow";
import { NestoList } from "./nesto/NestoList";
import { NestoCreate } from "./nesto/NestoCreate";
import { NestoEdit } from "./nesto/NestoEdit";
import { NestoShow } from "./nesto/NestoShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Tourist agency"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Apartment"
          list={ApartmentList}
          edit={ApartmentEdit}
          create={ApartmentCreate}
          show={ApartmentShow}
        />
        <Resource
          name="Reservation"
          list={ReservationList}
          edit={ReservationEdit}
          create={ReservationCreate}
          show={ReservationShow}
        />
        <Resource
          name="Check"
          list={CheckList}
          edit={CheckEdit}
          create={CheckCreate}
          show={CheckShow}
        />
        <Resource
          name="Renter"
          list={RenterList}
          edit={RenterEdit}
          create={RenterCreate}
          show={RenterShow}
        />
        <Resource
          name="Nesto"
          list={NestoList}
          edit={NestoEdit}
          create={NestoCreate}
          show={NestoShow}
        />
      </Admin>
    </div>
  );
};

export default App;
