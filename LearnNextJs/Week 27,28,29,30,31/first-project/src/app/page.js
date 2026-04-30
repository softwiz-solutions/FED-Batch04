import Header from "@/components/Header";
import Likes from "@/components/Likes";
import Navbar from "@/components/Navbar";
import NewArrivalSection from "@/components/pageSections/NewArrivalSection";

export default function Home() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton", "ali"];
  return (
    <div className="bg-zinc-50 font-sans">
      <Header abc="text-2xl text-blue-500">Hello World</Header>
      <Header
        // title="Welcome to Next.js Projectsssss"
        abc="text-2xl text-green-500"
      >
        Welcome to Next.js Projects Updated
      </Header>
      <Header abc="text-2xl text-red-500">Demo</Header>

      <ul>
        {/* <li>{names[0]}</li>
        <li>{names[1]}</li>
        <li>{names[2]}</li> */}

        {names.map(function (item, index) {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <Likes />
      <NewArrivalSection />

      {/* <Header /> */}
    </div>
  );
}
