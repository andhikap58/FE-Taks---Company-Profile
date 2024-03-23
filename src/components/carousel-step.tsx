export default function CarouselStep() {
  return (
    <div>
      <div className="carousel w-full h-auto">
        <div
          id="slide1"
          className="carousel-item relative w-full h-auto my-5 bg-[#1C1C1C]"
          >
          <div className="flex w-full bg-white flex-col md:flex-row">
            <img
              src="https://lifetimedesign.co/cdn/shop/files/custom_resized_86ec0b0c-8291-4f22-be93-5cfa874fc3f0.jpg?v=1694174516&width=700"
              className="max-[400px]:w-full h-auto md:w-[50%] md:rounded-e-3xl"
            />
            <div className="flex my-5 w-full h-auto pl-10">
              <div className="flex flex-col justify-center w-full h-full text-black">
                <p className="font-serif">Tahap 1</p>
                <p className="text-4xl font-thin font-serif mt-5">
                  Konsultasi Desain
                </p>
                <p className="mt-5 font-serif">
                  Anda Dapat melakukan Konsultasi awal mengenai kebutuhan design
                  anda langsung dengan designer kami tanpa dikenakan biaya.
                </p>
                <button className="flex h-10 w-40 border justify-center items-center mt-10 text-xs bg-[#AA874E] text-white -tracking-tighter">
                  HUBUNGI KAMI
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide5" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div
          id="slide2"
          className="carousel-item relative w-full h-auto my-5 bg-[#1C1C1C]"
          >
          <div className="flex w-full bg-white flex-col md:flex-row">
            <img
              src="https://lifetimedesign.co/cdn/shop/files/8F85278C-4F17-4B1A-A44D-28B949BFCFE9_1.jpg?v=1694178007&width=700"
              className="max-[400px]:w-full h-auto md:w-[50%] md:rounded-e-3xl"
            />
            <div className="flex my-5 w-full h-auto pl-10">
              <div className="flex flex-col justify-center w-full h-full text-black">
                <p className="font-serif">Tahap 2</p>
                <p className="text-4xl font-thin font-serif mt-5">
                  Konsultasi Desain
                </p>
                <p className="mt-5 font-serif">
                  Desainer akan datang untuk meninjau lokasi dan tealh melakukan pengukuran awal agar mendapatkan informasi yang diperlukan untuk semakin memahami kebutuhan anda. Lalu tim Lifetime Design menunjukan penawaran harga desain sebelum masuk ke tahap selanjutnya.
                </p>
                <button className="flex h-10 w-40 border justify-center items-center mt-10 text-xs bg-[#AA874E] text-white -tracking-tighter">
                  HUBUNGI KAMI
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div
          id="slide3"
          className="carousel-item relative w-full h-auto my-5 bg-[#1C1C1C]"
        >
          <div className="flex w-full bg-white flex-col md:flex-row">
            <img
              src="https://lifetimedesign.co/cdn/shop/files/MATERIAL_MOODBOARD_01.jpg?v=1694174557&width=700"
              className="max-[400px]:w-full h-auto md:w-[50%] md:rounded-e-3xl"
            />
            <div className="flex my-5 w-full h-full pl-10 ">
              <div className="flex flex-col justify-center w-full h-full text-black">
                <p className="font-serif">Tahap 3</p>
                <p className="text-4xl font-thin font-serif mt-5">
                  Konsep Desain & Denah
                </p>
                <p className="mt-5 font-serif">
                  Tim desain kami akan menyelaraskan visi desainer dengan
                  aspirasi atau kebutuhan klien dengan memberikan konsep desain
                  den denah berdasarkan hasil survey dan pengukuran sebelumnya.
                  Pada tahap ini desainer kami akan memberikan variasi pilihan
                  material dalam bentuk material board untuk membantu anda dalam
                  menentukan kon=mbinasi warna, bahan maupun tema untuk
                  finalisasi konsep desain.
                </p>
                <button className="flex h-10 w-40 border justify-center items-center mt-10 text-xs bg-[#AA874E] text-white -tracking-tighter">
                  HUBUNGI KAMI
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div
          id="slide4"
          className="carousel-item relative w-full h-auto my-5 bg-[#1C1C1C]"
        >
          <div className="flex w-full bg-white flex-col md:flex-row">
            <img
              src="https://lifetimedesign.co/cdn/shop/files/D21-182_TANDY_LIVING_AREA_STAIRCASE_AREA_KAMAL_04022022_V5.jpg?v=1694168226&width=700"
              className="max-[400px]:w-full h-auto md:w-[50%] md:rounded-e-3xl"
            />
            <div className="flex my-5 w-full h-full pl-10 ">
              <div className="flex flex-col justify-center w-full h-full text-black">
                <p className="font-serif">Tahap 4</p>
                <p className="text-4xl font-thin font-serif mt-5">
                  3D Visual & Rancangan Anggaran Biaya
                </p>
                <p className="mt-5 font-serif">
                  Tim kami akan memberikan gambaran konsep desain melalui 3D render dan perkiraan anggaran biaya pembangunan yang dibutuhkan sesuai rencana gambar dan kebutuhan yang telah disusun.
                </p>
                <button className="flex h-10 w-40 border justify-center items-center mt-10 text-xs bg-[#AA874E] text-white -tracking-tighter">
                  HUBUNGI KAMI
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        

        <div
          id="slide5"
          className="carousel-item relative w-full h-auto my-5 bg-[#1C1C1C]"
        >
          <div className="flex w-full bg-white flex-col md:flex-row">
            <img
              src="https://lifetimedesign.co/cdn/shop/files/ld-image.jpg?v=1694162278&width=700"
              className="max-[400px]:w-full h-auto md:w-[50%] md:rounded-e-3xl"
            />
            <div className="flex my-5 w-full h-full pl-10 ">
              <div className="flex flex-col justify-center w-full h-full text-black">
                <p className="font-serif">Tahap 5</p>
                <p className="text-4xl font-thin font-serif mt-5">
                  Serah Terima
                </p>
                <p className="mt-5 font-serif">
                  Sit back and relax! Biarkan tim kami yang mengerjakan
                  semuanya. Anda akan mendapatkan laporan secara berkala mulai
                  dari proses bangun awal sampai akhirnya bangunan impian anda
                  terwujud nyata.
                </p>
                <button className="flex h-10 w-40 border justify-center items-center mt-10 text-xs bg-[#AA874E] text-white -tracking-tighter">
                  HUBUNGI KAMI
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
