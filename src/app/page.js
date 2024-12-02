import { Hero, Trending } from "@/components";
import { AllPost } from "@/components/allPost";

export default async function Home() {
  const result = await fetch("https://dev.to/api/articles");
  const objResult = await result.json();

  return (
    <home className="flex flex-col items-center w-[1216px]">
      <Hero />
      <Trending />
      <AllPost posts={objResult} />
    </home>
  );
}
