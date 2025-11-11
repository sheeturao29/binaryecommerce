import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import BestPicksPage from "./pages/BestPicksPage";
import TopBrandsPage from "./pages/TopBrandsPage";
import PremiumFitsPage from "./pages/PremiumFitsPage";
import Sale from "./components/Sale";
import SalePage from "./pages/SalePage";

import Sale2 from "./components/Sale2";
import TraditionalPage from "./pages/TraditionalPage";
import ClientSection from "./components/ClientSection";
import Terms from "./components/Terms";
import Footer from "./components/Footer";

import ReturnsRefunds from "./pages/ReturnsRefunds";
import FAQs from "./pages/FAQs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import WhoWeAre from "./pages/WhoWeAre";
import JoinOurTeam from "./pages/JoinOurTeam";
import TermsConditions from "./pages/TermsConditions";
import Payments from "./pages/Payments";
import PromotionsTerms from "./pages/PromotionsTerms";
import TrackOrder from "./pages/TrackOrder";
import Cancellations from "./pages/Cancellations";
import CustomerCare from "./pages/CustomerCare";
import RedeemCoupon from "./pages/RedeemCoupon";
import CartPage from "./pages/CartPage";
import ShopPage from "./pages/ShopPage";
import DropdownCategoryPage from "./pages/DropdownCategoryPage"

import { CartProvider } from "./context/Context";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import ProductDetailPage from "./pages/ProductDetailPage";



function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <Sale />
                <Sale2 />
                <ClientSection />
                <Terms />
                <Footer />
              </>
            }
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/returns-refunds" element={<ReturnsRefunds />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/join-our-team" element={<JoinOurTeam />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/promotions-terms" element={<PromotionsTerms />} />
          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/cancellations" element={<Cancellations />} />
          <Route path="/customer-care" element={<CustomerCare />} />
          <Route path="/redeem" element={<RedeemCoupon />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/sale" element={<SalePage />} />
          <Route path="/traditional" element={<TraditionalPage />} />
            <Route path="/best-picks" element={<BestPicksPage />} />
  <Route path="/top-brands" element={<TopBrandsPage />} />
  <Route path="/premium-fits" element={<PremiumFitsPage />} />
<Route path="/category/:categoryName" element={<DropdownCategoryPage />} />
<Route path="/product/:id" element={<ProductDetail />} />
<Route path="/checkout" element={<Checkout />} />
<Route path="/product/:id" element={<ProductDetailPage />} />





        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
