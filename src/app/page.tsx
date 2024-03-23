import Navbar from "@/components/navbar";
import Image2 from "../../public/bg-img/image2.jpg";
import Link from "next/link";
import Footer from "@/components/footer";
import Carousel1 from "@/components/carousel-step";
import CarouselTestimoni from "@/components/carousel-testimoni";
import CarouselStep from "@/components/carousel-step";

export default function Home() {
  return (
    <main className="min-w-[100px]">
      <div>
        
          {/* section 1 */}
        <div>
          <Link href={"#"}>
            <img
              className="w-full"
              src="https://lifetimedesign.co/cdn/shop/files/FREE_CONSULTATION_BANNER-01_1.png?v=1709943307&width=2000"
            />
          </Link>
          {/* <img src='https://lifetimedesign.co/cdn/shop/files/FREE_CONSULTATION_BANNER-01_1.png?v=1709943307&width=2000'></img>   */}
        </div>
        {/* section 2 */}
        <div className="flex justify-center items-center text-center flex-col w-full h-[100vh] bg-[url('https://lifetimedesign.co/cdn/shop/files/NUKde1G5qegDP62yMhD7EmIw4Xf8cJp_J0OF34g6uG2yejrhBjO0O4v98sTHd1thm5rsJPVgXTaswCBZGrCLe4luiMmylfHDdsL40HoPqXPhZtnkBLPmEfm-R5U9-vMO1vTYedEn0qDwd7tLvg.jpg?v=1691483819&width=1600')] bg-center">
          <div className="flex justify-center items-center text-center w-full h-full bg-black bg-opacity-20">
          <div className="flex items-center w-[100vh] h-auto justify-center flex-col">
          <p className="flex h-full text-center items-center lg:flex-row font-serif text-3xl md:text-6xl font-light text-white leading-snug">
            Transforming Space, All In One Place.
          </p>
          <div className="flex justify-center sm:flex-row flex-col items-center gap-5 my-10">
            
            <button className="flex justify-center items-center text-l border h-10 w-36 bg-white">
              INTERIOR
            </button>
            <button className="flex justify-center items-center text-l border h-10 w-36 bg-white">
              ARSITEK
            </button>
            <button className="flex justify-center items-center text-l border h-10 w-36 bg-white">
              ESTATE
            </button>
            <button className="flex justify-center items-center text-l border h-10 w-36 bg-white">
              FURNITURE
            </button>
          </div>

          </div>
          </div>
        </div>

        {/* section 3 */}
        <div className="flex flex-wrap justify-between max-lg:justify-center max-md:grid-cols-2 max-lg:gap-y-5 gap-10 h-auto w-full bg-[#1C1C1C] p-24">
          {/* Tab End To End */}
          <div className="flex flex-col border rounded-xl h-auto w-[15rem] gap-10 p-4 bg-white">
            <div className="flex text-center justify-center">
              <img
                src="https://lifetimedesign.co/cdn/shop/files/icon_website_latest_rev-09.png?v=1694169495&width=64"
                alt="End to End"
              />
            </div>
            <div className="flex text-center text-2xl">
              <p>End To End Service</p>
            </div>
            <div className="flex text-center">
              <p>
                Memenuhi semua kebutuhan desain dan bangun dalam satu tempat
              </p>
            </div>
          </div>

          {/* Free Consultation */}
          <div className="flex flex-col border rounded-xl h-auto w-[15rem] gap-10 p-4 bg-white">
            <div className="flex text-center justify-center">
              <img
                src="https://lifetimedesign.co/cdn/shop/files/icon_website_latest_rev-10.png?v=1694169072&width=64"
                alt="Free Consultation"
              />
            </div>
            <div className="text-center text-xl lg:text-2xl ">
              <p>Free Consultation</p>
            </div>
            <div className="text-center">
              <p>
              Konsultasi kebutuhan desain dan bangun dengan desainer Lifetime Design tanpa biaya
              </p>
            </div>
          </div>

          {/* Lifetime Warranty Service */}
          <div className="flex flex-col border rounded-xl h-auto w-[15rem] gap-10 p-4 bg-white">
            <div className="flex text-center justify-center">
              <img
                src="https://lifetimedesign.co/cdn/shop/files/icon_website_latest_rev-09.png?v=1694169495&width=64"
                alt="Lifetime Warranty Service"
              />
            </div>
            <div className="text-center text-2xl ">
              <p>Lifetime Warranty Service</p>
            </div>
            <div className="text-center">
              <p>
              Memenuhi semua kebutuhan desain dan bangun dalam satu tempat
              </p>
            </div>
          </div>
          

          {/* Special Finishing */}
          <div className="flex flex-col border rounded-xl h-auto w-[15rem] gap-10 p-4 bg-white">
            <div className="flex text-center justify-center">
              <img
                src="https://lifetimedesign.co/cdn/shop/files/icon_website_latest_rev-12.png?v=1694169495&width=48"
                alt="End to End"
                className="h-[64px] w-[64px]"
                
              />
            </div>
            <div className="flex text-center text-2xl">
              <p>Special Finishing</p>
            </div>
            <div className="flex text-center">
              <p>
              Memenuhi semua kebutuhan desain dan bangun dalam satu tempat
              </p>
            </div>
          </div>

        </div>

        {/* Section 4 */}
        <CarouselStep />

        {/* Section 5 */}

        <div className="flex h-[80vh] w-full bg-[url('https://lifetimedesign.co/cdn/shop/files/FASAD.jpg?v=1694171584&width=2000')] bg-cover">
          <div className="flex flex-col justify-between items-center w-full h-[80vh] bg-black bg-opacity-50">
            <div className="flex justify-center text-center flex-col w-full h-[80vh] items-center p-5">
            <p className="flex flex-col justify-center items-center text-center text-xl md:text-3xl text-white font-serif  ">
              We Design to Reflect Your Personality and Taste.
            </p>
            <div className="max-w-[800px] mx-auto my-10">
              <p className="flex justify-center text-center text-l md:text-xl text-white font-serif">
                Lifetime Design adalah perusahaan design group yang menjadi one
                stop solution untuk segala permasalahan ruangan Anda. Dengan
                pengalaman lebih dari 15 tahun, Lifetime Design dapat membantu
                Anda untuk merealisasikan hunian impian Anda.
              </p>
            </div>
            <button className="flex justify-center text-center items-center text-black text-l border h-10 w-40 bg-white tracking-wider ">
              READ MORE
            </button>

            </div>
          </div>
        </div>

        
        {/* Section 6 */}
        <CarouselTestimoni />

        {/* Section 7 */}

        {/* Section 8 Footer */}

        <Footer />
      </div>
    </main>
  );
}
