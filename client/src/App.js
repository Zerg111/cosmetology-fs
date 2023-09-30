import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import NavBar from "./components/ui/navBar"
import PageServices from "./components/pages/pageServices"
import PagePrices from "./components/pages/pagePrices"
import PageFeedback from "./components/pages/pageFeedback"
import PageProducts from "./components/pages/pageProducts"
import PageAppointment from "./components/pages/pageAppointment"
import Banner from "./components/common/banners/main_banner/banner"
import Header from "./components/common/header/header"
import PageMain from "./components/pages/page_main/pageMain"
import Footer from "./components/common/footer/footer"

function App() {
    return (
        <div className="bg-light">
            <Header />
            <Banner />
            <NavBar />
            <Switch>
                <Route path="/services" component={PageServices}></Route>
                <Route path="/appointment" component={PageAppointment}></Route>
                <Route path="/prices" component={PagePrices}></Route>
                <Route path="/feedback" component={PageFeedback}></Route>
                <Route path="/products" component={PageProducts}></Route>
                <Route path="/" component={PageMain}></Route>
                <Redirect to="/" />
            </Switch>
            <Footer />
        </div>
    )
}

export default App
