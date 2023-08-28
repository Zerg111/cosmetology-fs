import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import PageAboutUs from "./components/pages/pageAboutUs"
import NavBar from "./components/navBar"
import PageServices from "./components/pages/pageServices"
import PageRecord from "./components/pages/pageRecord"
import PagePrices from "./components/pages/pagePrices"
import PageFeedback from "./components/pages/pageFeedback"
import PageProducts from "./components/pages/pageProducts"
import Banner from "./components/banner/banner"
import Header from "./components/header/header"
import PromotionBanner from "./components/promotion_banner/promotionBanner"
import PageMain from "./components/pages/page_main/pageMain"
import Footer from "./components/footer/footer"

function App() {
    return (
        <div>
            <Header />
            <Banner />
            <NavBar />
            <Switch>
                <Route path="/aboutUs" component={PageAboutUs}></Route>
                <Route path="/services" component={PageServices}></Route>
                <Route path="/record" component={PageRecord}></Route>
                <Route path="/prices" component={PagePrices}></Route>
                <Route path="/feedback" component={PageFeedback}></Route>
                <Route path="/products" component={PageProducts}></Route>
                <Route path="/" component={PageMain}></Route>
                <Redirect to="/" />
            </Switch>
            <PromotionBanner />
            <Footer />
        </div>
    )
}

export default App
