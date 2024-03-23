import Footer from "@/components/footer";

export default function LifetimeDesignEstate() {
  return (
    <div className="overflow-x-hidden">
      {/* 1 */}
      <div className="h-[80vh] w-full bg-center bg-[url('https://lifetimedesign.co/cdn/shop/files/7e8041203a51232094c17e1cffde4e01.MARKETING_LD-PROPERTY-CLUSTER_INDRA_140821_V2_SIANG-scaled.jpg?v=1693820065&width=1000')] bg-cover">
        <div className="flex justify-center items-center text-center h-[80vh] w-full bg-black bg-opacity-20 bg cover">
          <div className="flex flex-col w-[70vh] h-[100vh] justify-center items-center text-center text-white font-serif">
            <p className="my-5 text-xl">LIFETIME DESIGN ESTATE</p>
            <p className="flex text-4xl my-5 tracking-wide leading-[3rem]">
              We provide an urban living concept.Uniquely designed, efficient
              and sustainable.
            </p>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="items-center gap-28 flex flex-col lg:flex-row w-full h-full bg-white max-sm:px-4 py-24 px-36">
        <img
          className="h-full w-auto"
          src="https://lifetimedesign.co/cdn/shop/files/7e8041203a51232094c17e1cffde4e01.MARKETING_LD-PROPERTY-CLUSTER_INDRA_140821_V2_SIANG-scaled.jpg?v=1693820065&width=600"
          alt="background"
        />

        <div className="flex flex-col lg:flex-row">
          <div>
            <div className="flex flex-col gap-8 text-black">
              <p className="font-serif text-xl md:text-3xl">Paradise Park</p>
              <div className="flex flex-col gap-1">
                <p className="font-bold text-sm md:text-xl ">Location :</p>
                <p className="text-sm md:text-xl">
                  Jl. Garuda, Sawah Lama, Kec. Ciputat, Kota Tangerang Selatan,
                  Banten 15413, Indonesia
                </p>
              </div>
              {/*  */}
              <div className="flex flex-col text-sm md:text-xl">
                <p className="font-bold">Hospital:</p>
                <div className="flex flex-row gap-x-2">
                  <p>- Premier Bintaro Hospital</p>
                  <p className="font-bold">(10 mintues)</p>
                </div>
                <div className="flex flex-row gap-x-2 text-sm md:text-xl">
                  <p>– Pondok Indah Bintaro Hospital</p>
                  <p className="font-bold">( 15 Minutes )</p>
                </div>
              </div>

              <div className="flex flex-col text-sm md:text-xl">
                <p className="font-bold">Education Center:</p>
                <div className="flex flex-row gap-x-2">
                  <p>- Pembangunan Jaya University</p>
                    <p className="font-bold">( 10 Minutes )</p>
                </div>
                <div className="flex flex-row gap-x-2">
                  <p>– STAN Bintaro</p>
                    <p className="font-bold">( 15 Minutes )</p>
                </div>
              </div>

              <div className="flex flex-col text-sm md:text-xl">
                <p className="font-bold">Entertainment :</p>
                <div className="flex flex-row gap-x-2">
                  <p>- Bexchange Mall</p>
                  <div className="flex">
                    <p className="font-bold">( 5 Minutes )</p>
                  </div>
                </div>
                <div className="flex flex-row gap-x-2">
                  <p>– Bintaro Plaza</p>
                 <p className="font-bold">15 Minutes</p>
                </div>

                <div className="flex flex-row gap-x-2">
                  <p>– Living Mall Bintaro</p>
                    <p className="font-bold">( 5 Minutes )</p>
                </div>
                <div className="flex flex-row gap-x-2">
                  <p>– AEON Mall BSD</p>
                  <div className="flex">
                    <p className="">(</p>
                    <p className="font-bold">15 Minutes</p>
                    <p>)</p>
                  </div>
                </div>
                <div className="flex flex-row gap-x-2">
                  <p>– Lotte Mart Bintaro</p>
                  <p className="font-bold">( 10 Minutes )</p>
                  
                </div>
              </div>

              <button className="flex justify-center text-center items-center border h-10 w-40 text-sm bg-[#AA874E] text-white">
                LIHAT DETAIL
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
