import React, { Component } from "react";
import Home from "./Home";
import Header from "./Header";
import Catalog from "./Catalog";
import { Flowers, Veggies, Herbs, Trees } from "./PlantCategories";
import ShoppingBasket from "./ShoppingBasket";
import Social from "./Social";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";
import Covid19Announcement from "./COVID-19";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

class Main extends Component {
  render() {
    const HomePage = () => {
      return <Home />;
    };

    return (
      <div>
        <Header />
        <Social />
        {/* Subpages */}
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/about_us" component={About} />
          <Route exact path="/contact_us" component={Contact} />
          <Route exact path="/catalog" component={Catalog} />

          {/* Separate Plant Categories */}
          <Route exact path="/flowers" component={Flowers} />
          <Route exact path="/veggies" component={Veggies} />
          <Route exact path="/herbs" component={Herbs} />
          <Route exact path="/trees" component={Trees} />

          <Route exact path="/shopping_basket" component={ShoppingBasket} />
          <Route exact path="/covid-19" component={Covid19Announcement} />
          <Redirect to="/home" />
        </Switch>

        <Footer />
      </div>
    );
  } // End of render()
} // End of the Main Component

export default withRouter(Main);
