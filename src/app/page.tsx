import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Partners } from "@/components/sections/Partners";
import { Networking } from "@/components/sections/Networking";

import { Speakers } from "@/components/sections/Speakers";
import { Schedule } from "@/components/sections/Schedule";
import { Themes } from "@/components/sections/Themes";
import { DownloadForm } from "@/components/sections/DownloadForm";
import { Location } from "@/components/sections/Location";
import { Investment } from "@/components/sections/Investment";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <About />

      <Speakers />
      <Themes />
      <Schedule />
      <Networking />

      <DownloadForm />
      <Location />
      <Investment />
      <Footer />
    </main>
  );
}
