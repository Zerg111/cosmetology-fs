import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import PageAboutUs from "./components/pageAboutUs"
import NavBar from "./components/navBar"
import PageServices from "./components/pageServices"
import PageRecord from "./components/pageRecord"
import PagePrices from "./components/pagePrices"
import PageFeedback from "./components/pageFeedback"
import PageProducts from "./components/pageProducts"

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/aboutUs" component={PageAboutUs}></Route>
                <Route path="/services" component={PageServices}></Route>
                <Route path="/record" component={PageRecord}></Route>
                <Route path="/prices" component={PagePrices}></Route>
                <Route path="/feedback" component={PageFeedback}></Route>
                <Route path="/products" component={PageProducts}></Route>
                <Redirect to="/" />
            </Switch>
        </div>
    )
}

export default App
