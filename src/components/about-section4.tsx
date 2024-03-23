export default function AboutSection4() {
  return (
    <div className="flex flex-wrap w-full h-full p-10 bg-white overflow-hidden">
      <p className="justify-start font-serif text-4xl font-light my-5 text-black ">
        Our Service
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Desain Interior */}
        <div className="">
          <img
            src="https://lifetimedesign.co/cdn/shop/files/45053960d7510d313ff41871a12ea93f.D21-149_TERE_JAKTIM_POOL_AREA_DITO_080422_V1.jpg?v=1692149969&width=600"
            alt=" Desain Interior"
            className="h-[300px]  w-full"
          />
          <p className="flex justify-start text-black font-serif text-xl my-10">
            Desain Interior
          </p>
          <p className="flex justify-start text-black font-serif text-justify ">
            Desain interior sangat menentukan suasana dan aktivitas anda dalam
            sebuah ruangan. Telah membawa kebahagiaan kepada ratusan rumah yang
            tersebar di seluruh Indonesia, Lifetime Design menyediakan jasa
            desain yang dimulai dari konsultasi desain interior, pengukuran
            detail ruangan, pemilihan spesifikasi material, visualisasi 3D,
            hingga perancangan gambar teknis interior yang dapat menjadi rujukan
            dalam proses pembangunan
          </p>
        </div>
        {/* Desain Arsitektur  */}
        <div className="">
          <img
            src="https://lifetimedesign.co/cdn/shop/files/7e8041203a51232094c17e1cffde4e01.ARSITEKTUR_D22_072_WISNU_DEPOK_FACADE_DITO_221222_MALAM_V2-1-scaled.jpg?v=1691485120&width=600"
            alt=" Desain Interior"
            className="h-[300px] w-full"
          />
          <p className="flex justify-start text-black font-serif text-xl my-10">
            Desain Arsitektur
          </p>
          <p className="flex justify-start text-black font-serif text-l ">
            Selain menentukan layout ruangan, desain arsitektur juga berperan
            penting dalam membentuk impresi pertama terhadap bangunan anda.
            Lifetime Design menyediakan jasa desain arsitektur untuk rumah,
            kantor, klinik, ataupun projek komersil lainnya dengan gaya modern
            klasik. Dari mulai konsep desain hingga teknis pembangunan, kami
            memastikan wajah bangunan anda tampak mewah dengan desain klasik
            yang bertahan selamanya.
          </p>
        </div>

        {/* Furnitur  */}
        <div>
          <img
            src="https://lifetimedesign.co/cdn/shop/files/75774abe44c75cbc33601d3ef938488c.D22_077_DIMAS_KELAPA-GADING_GUEST-ROOM_OKKI_181122_V4-1.jpg?v=1692149952&width=600"
            alt=" Desain Interior"
            className="h-[300px] w-full"
          />
          <p className="flex justify-start text-black font-serif text-xl my-10">
            Furniture
          </p>
          <p className="flex justify-start text-black font-serif text-l ">
            Kami percaya bahwa, apapun gaya interior rumah anda, furnitur klasik
            selalu berhasil menghadirkan suasana elegan dan mewah di dalamnya.
            Kami sudah menekuni furnitur klasik sejak tahun 2007 dan memiliki
            showroom utama di Jakarta. Furnitur kami diproduksi menggunakan
            material utama kayu mahoni dengan finishing yang dapat disesuaikan
            dengan keinginan anda.
          </p>
        </div>
        {/* Property  */}
        <div className="">
          <img
            src="https://lifetimedesign.co/cdn/shop/files/45053960d7510d313ff41871a12ea93f.D21-149_TERE_JAKTIM_POOL_AREA_DITO_080422_V1.jpg?v=1692149969&width=600"
            alt=" Desain Interior"
            className="h-[300px] w-full"
          />
          <p className="flex justify-start text-black font-serif text-xl my-10">
            Properti
          </p>
          <p className="flex justify-start text-black font-serif text-l ">
            Salah satu lini bisnis dari Lifetime Design yang menghadirkan hunian
            mewah pada lokasi yang sangat strategis untuk Anda yang memiliki
            mobilitas yang tinggi.
          </p>
        </div>
        {/* Konstruksi  */}
        <div className="">
          <img
            src="https://lifetimedesign.co/cdn/shop/files/LD_Contruction.jpg?v=1693362295&width=600"
            alt=" Desain Interior"
            className="h-[300px] w-full"
          />
          <p className="flex justify-start text-black font-serif text-xl my-10">
            Konstruksi
          </p>
          <p className="flex justify-start text-black font-serif text-l ">
            Merenovasi ataupun membangun rumah memang membutuhkan proses dan
            pengawasan yang intensif. Memiliki rangkaian tim sipil dan MEP yang
            berpengalaman, Lifetime Design siap membantu memastikan hunian
            impian anda terwujud dalam rentang waktu yang ditentukan.
          </p>
        </div>
      </div>
    </div>
  );
}
