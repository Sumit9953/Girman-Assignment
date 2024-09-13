import HomeComp from "@/components/Home/HomeComp";

export default function Home() {
  return (
    <div className="flex w-full justify-center min-h-[calc(100vh-5rem)]  bg-gradient-to-b from-white to-lightBlue">
      <main className="md:w-[70%] w-full mx-auto mt-36 text-black text-center">
        <HomeComp />
      </main>
    </div>
  );
}
