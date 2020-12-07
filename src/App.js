import React from "react";
import { Route, Switch } from "react-router-dom";
import './App.css';
import OrderSummary from './pages/orderSummary/orderSummary';
import Profile from './pages/profile/profile'

function App() {
  return (
		<div className="app">
			<Switch>
				<Route exact path="/" component={OrderSummary} />
				<Route exact path="/profile" component={Profile} />
			</Switch>
		</div>
	);
}

export default App;
