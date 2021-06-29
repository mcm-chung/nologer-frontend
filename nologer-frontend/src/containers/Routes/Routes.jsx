import React from "react";
import { Route, Switch } from "react-router-dom";
import StudentDetails from "../StudentDetails/StudentDetails";
import StudentList from "../StudentList/StudentList";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <StudentList />
        </Route>

        <Route path="/StudentDetails">
          <StudentDetails />
        </Route>
      </Switch>
      ;
    </>
  );
};

export default Routes;
