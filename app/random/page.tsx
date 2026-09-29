import { redirect } from "next/navigation";
import { fishDatabase } from "@/app/lib/fishData";

export const dynamic = "force-dynamic";

export default function RandomFishPage() {
  const randomIndex = Math.floor(Math.random() * fishDatabase.length);
  const randomFish = fishDatabase[randomIndex];
  redirect(`/fish/${randomFish.slug}`);
}
