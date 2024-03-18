import Navbar from "@/components/navbar";
import Image2 from "../../public/bg-img/image2.jpg"
import Link from "next/link";


export default function Home() {
  return (
    <main >
    <div>
     <Navbar />
      <div className="flex flex-col">
      {/* section 1 */}
      <Link href={'#'}><img src="https://lifetimedesign.co/cdn/shop/files/FREE_CONSULTATION_BANNER-01_1.png?v=1709943307&width=2000"/></Link>
        
      </div>
      {/* section 2 */}
        <div className="flex justify-center flex-col h-screen w-screen bg-[url('https://lifetimedesign.co/cdn/shop/files/NUKde1G5qegDP62yMhD7EmIw4Xf8cJp_J0OF34g6uG2yejrhBjO0O4v98sTHd1thm5rsJPVgXTaswCBZGrCLe4luiMmylfHDdsL40HoPqXPhZtnkBLPmEfm-R5U9-vMO1vTYedEn0qDwd7tLvg.jpg?v=1691483819&width=1600')] bg-no-repeat bg-cover">
      <p className="flex flex-row justify-center items-center text-6xl font-semibold text-white">Transforming Space, All In One Place.</p>
      <div className="flex justify-center items-center gap-5 my-10">
        <button className="flex justify-center items-center text-l border h-10 w-36 bg-white">INTERIOR</button>
        <button className="flex justify-center items-center text-l border h-10 w-36 bg-white">ARSITEK</button>
        <button className="flex justify-center items-center text-l border h-10 w-36 bg-white">ESTATE</button>
        <button className="flex justify-center items-center text-l border h-10 w-36 bg-white">FURNITURE</button>
      
        
      </div>
      </div>
      {/* section 3 */}
      <div className="grid grid-cols-4 gap-x-10 h-[500px] w-full bg-gray-500 p-24">
        {/* Tab End To End */}
        <div className="flex flex-col border rounded-xl h-80 w-64 gap-10 p-4 bg-white">
          <div className="flex text-center justify-center">
            <img src="https://lifetimedesign.co/cdn/shop/files/icon_website_latest_rev-09.png?v=1694169495&width=64" alt="End to End" />
          </div>
          <div className="text-center text-2xl ">
            <p>End To End Service</p>
          </div>
          <div className="text-center">
            <p>Memenuhi semua kebutuhan desain dan bangun dalam satu tempat</p>
          </div>
        </div>

        {/* Free Consultation */}
        <div className="flex flex-col border rounded-xl h-80 w-64 gap-10 p-4 bg-white">
          <div className="flex text-center justify-center">
            <img src="https://lifetimedesign.co/cdn/shop/files/icon_website_latest_rev-10.png?v=1694169072&width=64" alt="End to End" />
          </div>
          <div className="text-center text-2xl ">
            <p>Free Consultation</p>
          </div>
          <div className="text-center">
            <p>Konsultasi kebutuhan desain dan bangun dengan desainer Lifetime Design tanpa biaya</p>
          </div>
        </div>

        {/* Lifetime Warranty Service */}
        <div className="flex flex-col border rounded-xl h-80 w-64 gap-10 p-4 bg-white">
          <div className="flex text-center justify-center">
            <img src="https://lifetimedesign.co/cdn/shop/files/icon_website_latest_rev-11.png?v=1694169139&width=64" alt="End to End" />
          </div>
          <div className="text-center text-2xl ">
            <p>Lifetime Warranty Service</p>
          </div>
          <div className="text-center -my-7">
            <p>Lifetime Design akan memberikan layanan jasa servis untuk rumah anda setelah proyek selesai</p>
          </div>
        </div>`

        {/* Special Finishing */}
        <div className="flex flex-col border rounded-xl h-80 w-64 gap-10 p-4 bg-white">
          <div className="flex text-center justify-center">
            <img src="https://lifetimedesign.co/cdn/shop/files/icon_website_latest_rev-12.png?v=1694169495&width=48" alt="End to End" 
            className="h-16 gap-y-16 mt-1" />
          </div>
          <div className="text-center text-2xl ">
            <p>Special Finishing</p>
          </div>
          <div className="text-center">
            <p>Hadirkan visual berbeda dengan finishing khusus yang diberikan oleh Lifetime Design</p>
          </div>
        </div>
      </div>
      
      {/* Section 4 */}
      
        
      
        

  
    
    
    </div>  
    </main>
  );
}
