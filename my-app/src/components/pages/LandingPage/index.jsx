import FooterSection from "../../custom-ui/footer";
import NavigationMenu from "../../custom-ui/navigation_menu";
import Banner from "./components/banner";
import Events from "./components/events";

const LandingPage = () => {
  return (
    <div className="w-[100vw] h-[100vh] overflow-y-auto overflow-x-hidden relative">
      <NavigationMenu />

      <Banner />

      <Events />

      <FooterSection />
    </div>
  )
};

export default LandingPage;