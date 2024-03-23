export default function CarouselTestimoni() {
  return (
    <div>
      <div className="carousel w-full h-auto">
        <div
          id="testi1"
          className="carousel-item relative w-full h-auto my-5 bg-[#1C1C1C]"
        >
          <div className="flex w-full bg-white flex-col lg:flex-row ">
            <img
              src="https://lifetimedesign.co/cdn/shop/files/Screenshot_2023-09-08_152513.png?v=1694170831&width=700"
              className="max-[400px]:w-full h-auto md:w-[50%] md:rounded-e-3xl"
            />
            <div className="flex my-5 w-full p-5 md:p-10">
              <div className="flex flex-col justify-center w-full h-full text-black">
                <p className="font-serif">Celebrity</p>
                <p className="text-4xl font-thin font-serif mt-5">
                  Sahila Hisyam
                </p>
                <p className="mt-5 font-serif">
                  Satu kata buat lifetime design"because of you, my dream come
                  true"
                </p>
                <p className="flex justify-center text-center items-center mt-5">
                  Apartement | 3 Ruang | 47,2 m2
                </p>
                <button className="flex h-10 w-40 border justify-center items-center mt-5 text-xs bg-[#AA874E] text-white -tracking-tighter">
                  LIHAT PORTOFOLIO
                </button>
              </div>
            </div>
            ``
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#testi3" className="btn btn-circle">
              ❮
            </a>
            <a href="#testi2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div
          id="testi2"
          className="carousel-item relative w-full h-auto my-5 bg-[#1C1C1C]"
        >
          <div className="flex w-full bg-white flex-col lg:flex-row ">
            <img
              src="https://lifetimedesign.co/cdn/shop/files/Screenshot_2023-09-08_160127.png?v=1694170768&width=700"
              className="max-[400px]:w-full h-auto md:w-[50%] md:rounded-e-3xl"
            />
            <div className="flex my-5 w-full p-5 md:p-10">
              <div className="flex flex-col justify-center w-full h-full text-black">
                <p className="font-serif">Celebrity</p>
                <p className="text-4xl font-thin font-serif mt-5">
                  Titi Kamal
                </p>
                <p className="mt-5 font-serif">
                  Begitu liat hasil pengerjaannya jujur kaget banget, puas banget, pengerjaannya cepat, hasilnya bagus, terus aku juga ga pusing udah satu paket dari meraka mulai dari desain hingga pengerjaannya sudah satu paket.
                </p>
                <p className="flex justify-center text-center items-center mt-5">
                  Kamar | 1 Ruang | 55m2
                </p>
                <button className="flex h-10 w-40 border justify-center items-center mt-5 text-xs bg-[#AA874E] text-white -tracking-tighter">
                  LIHAT PORTOFOLIO
                </button>
              </div>
            </div>
            ``
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#testi1" className="btn btn-circle">
              ❮
            </a>
            <a href="#testi3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        

      

        <div
          id="testi3"
          className="carousel-item relative w-full h-auto my-5 bg-[#1C1C1C]"
        >
          <div className="flex w-full bg-white flex-col lg:flex-row">
            <img
              src="https://lifetimedesign.co/cdn/shop/files/Citra_kirana.png?v=1694171366&width=700"
              className="max-[400px]:w-full h-auto md:w-[50%] md:rounded-e-3xl"
            />
            <div className="flex my-5 w-full p-10 ">
              <div className="flex flex-col justify-center w-full h-full text-black">
                <p className="font-serif">Celebrity</p>
                <p className="text-4xl font-thin font-serif mt-5">Citra Kirana & Rezky Aditya</p>
                <p className="mt-5 font-serif">
                  Desainnya sesuai kita banget, kita jadi happy balik ke rumah.
                </p>
                <p className="flex justify-center text-center items-center mt-5">
                  Kamar Utama | 3 Ruang | 91.1m2
                </p>
                <button className="flex h-10 w-40 border justify-center items-center mt-5 text-xs bg-[#AA874E] text-white -tracking-tighter">
                  LIHAT PORTOFOLIO
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#testi2" className="btn btn-circle">
              ❮
            </a>
            <a href="#testi1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        
      </div>
    </div>
  );
}



