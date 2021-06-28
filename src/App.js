import React from "react";
import InvoiceTable from "./components/InvoiceTable";
import AddInvoice from "./components/AddInvoice";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import "./assets/App.css";
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "./Authentication";

const App = (props) => (
  <AuthProvider>
    <Router>
      <PrivateRoute
        path="/Invoice"
        exact
        component={(props) => <InvoiceTable {...props} />}
      />
      <PrivateRoute
        path="/Invoice/add-invoice"
        exact
        component={(props) => <AddInvoice {...props} />}
      />
      <PrivateRoute
        path="/Invoice/edit-invoice/:id"
        exact
        component={(props) => <AddInvoice editMode={true} {...props} />}
      />
      <Route exact path="/Invoice/login" component={Login} />
      <Route exact path="/Invoice/signup" component={SignUp} />
    </Router>
  </AuthProvider>
);

export default App;
