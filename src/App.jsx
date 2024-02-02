import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CompanyBranches from "./components/CompanyBranches";
import CompanyRegions from "./components/CompanyRegions";
import AddBranchCashier from "./pages/AddBranchCashier";
import AddBranchCourier from "./pages/AddBranchCourier";
import AddClientPage from "./pages/AddClientPage";
import AddCompanyBranches from "./pages/AddCompanyBranches";
import AddCompanyRegions from "./pages/AddCompanyRegions";
import AddMarketingBanners from "./pages/AddMarketingBanners";
import AddMarketingReviews from "./pages/AddMarketingReviews";
import AddMarketingShares from "./pages/AddMarketingShares";
import AddOrderPage from "./pages/AddOrderPage";
import AddProductPage from "./pages/AddProductPage";
import AddSettingsCompany from "./pages/AddSettingsCompany";
import BranchCatalog from "./pages/BranchCatalog";
import BranchPersonal from "./pages/BranchPersonal";
import ByKilometerTariffsPage from "./pages/ByKilometerTariffsPage";
import ClientsPage from "./pages/ClientsPage";
import Dashboard from "./pages/Dashboard";
import FilterOrderPage from "./pages/FilterOrderPage";
import FixedTariffsPage from "./pages/FixedTariffsPage";
import Login from "./pages/Login";
import MarketingBanners from "./pages/MarketingBanners";
import MarketingPage from "./pages/MarketingPage";
import MarketingReviews from "./pages/MarketingReviews";
import MarketingShares from "./pages/MarketingShares";
import MenuPage from "./pages/MenuPage";
import OrderPage from "./pages/OrderPage";
import SettingsCompany from "./pages/SettingsCompany";
import SettingsPage from "./pages/SettingsPage";
import SettingsTariffs from "./pages/SettingsTariffs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/menu/add" element={<AddProductPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/order/add-order/:id" element={<AddOrderPage />} />
        <Route path="/order/filter" element={<FilterOrderPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/clients/add" element={<AddClientPage />} />
        <Route path="/clients/add/:id" element={<AddClientPage />} />
        <Route path="/marketing" element={<MarketingPage />}>
          <Route path="" element={<Navigate to="shares" />} />
          <Route path="shares" element={<MarketingShares />} />
          <Route path="banners" element={<MarketingBanners />} />
          <Route path="reviews" element={<MarketingReviews />} />
          <Route path="shares/add" element={<AddMarketingShares />} />
          <Route path="banners/add" element={<AddMarketingBanners />} />
          <Route path="reviews/add" element={<AddMarketingReviews />} />
        </Route>
        <Route path="/settings" element={<SettingsPage />}>
          <Route path="" element={<Navigate to="company" />} />
          <Route path="company" element={<SettingsCompany />} />
          <Route path="company/add" element={<AddSettingsCompany />} />
          <Route path="company/branches" element={<CompanyBranches />} />
          <Route path="company/branches/add" element={<AddCompanyBranches />} />
          <Route path="company/branches/catalog" element={<BranchCatalog />} />
          <Route path="company/branches/personal" element={<BranchPersonal />} />
          <Route path="company/branches/personal/courier" element={<AddBranchCourier />} />
          <Route path="company/branches/personal/cashier" element={<AddBranchCashier />} />
          <Route path="company/regions" element={<CompanyRegions />} />
          <Route path="company/regions/add" element={<AddCompanyRegions />} />
          <Route path="tariffs" element={<SettingsTariffs />} />
          <Route path="tariffs/fixed" element={<FixedTariffsPage />} />
          <Route path="tariffs/byKilometer" element={<ByKilometerTariffsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
