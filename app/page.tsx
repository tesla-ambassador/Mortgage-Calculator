import Card from "@/components/Card";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center sm:px-12 sm:py-6 lg:h-screen">
      <Card />
      <div className="py-3 hidden sm:flex items-center gap-2">
        <span>A Frontend Mentor Project developed by</span>
        <a href="https://www.frontendmentor.io/profile/tesla-ambassador">
          <div className="w-[30px] h-[30px] rounded-full overflow-hidden hover:cursor-pointer hover:scale-105 active:scale-90 transition-all duration-150">
            <img src="/images/fem_pfp.jpeg" alt="Profile" />
          </div>
        </a>
      </div>
    </main>
  );
}
