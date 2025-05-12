
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import PopularGroups from "@/components/PopularGroups";
import UpcomingEvents from "@/components/UpcomingEvents";
import CreateGroupBanner from "@/components/CreateGroupBanner";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <PopularGroups />
        <UpcomingEvents />
        <CreateGroupBanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
