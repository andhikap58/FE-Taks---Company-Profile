import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Video from "@/components/video";

import AboutSection1 from "@/components/about-section1";
import AboutSection2 from "@/components/about-section2";
import AboutSection4 from "@/components/about-section4";
import AboutSection5 from "@/components/home-section5";

export default function AboutUs() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Section 1 */}
      <AboutSection1 />

      {/* Section 2 */}
      <AboutSection2 />

      {/* Section 3 */}
      <div>
        <Video />
      </div>

      {/* Section 4 */}
      <AboutSection4 />
      {/* Section 5 */}
      <AboutSection5 />

      

      <Footer />
    </div>
  );
}
