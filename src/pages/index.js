import HomeComp from "@/components/Home/HomeComp";

export default function Home() {
  return (
    <div className="flex w-full justify-center min-h-[100vh] bg-gradient-to-b -z-10 from-white to-lightBlue">
      <main className="md:w-[70%] z-50 w-full mx-auto mt-56 text-black text-center">
        <HomeComp />
      </main>
      <div className="bg-bannerImg absolute right-0 bottom-0 bg-cover bg-bottom bg-no-repeat h-full w-full">

      </div>
    </div>
  );
}
