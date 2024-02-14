import Hero from "@/components/home/Hero";
import WebHostingPlan from "@/components/home/WebHostingPlan";

const HomePage = () => {
  return (
    <section>
      <Hero />
      <h2 className="text-center mt-10 text-3xl font-bold">
        Choose Your Web Hosting Plan
      </h2>
      <div className="container m-auto flex justify-center items-center my-7 flex-wrap md:gap-7">
        <WebHostingPlan />
        <WebHostingPlan />
        <WebHostingPlan />
      </div>
    </section>
  )
}

export default HomePage;

