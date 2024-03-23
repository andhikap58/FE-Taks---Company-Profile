export default function Footer() {
  return (
    <div className="flex flex-col justify-center gap-y-5 bg-[#1C1C1C]">
      <div className="flex flex-col md:flex-row md:flex-wrap justify-between gap-x-3 h-auto w-full p-4 md:p-24">
        {/* section 1 */}
        <div className="w-[250px]">
          <div>
            <p className="flex justify-start text-[24x] lg:text-[24px] font-[Roboto] text-[#CDA157]">
              LIFETIME DESIGN
            </p>
          </div>
          <div>
            <p className="flex justify-start text-[12px] lg:text-[16px] font-[Roboto] text-gray-300 my-5">
              Jl. Pangeran Antasari No.70, RW.8, Cilandak Bar., Kec. Cilandak,
              Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12430
            </p>
          </div>
          <p className="flex justify-start font-[Roboto] text-gray-300 my-5">
            Operational Hours: <br />
            Monday - Saturday (10.00-18.00)
          </p>
        </div>

        {/* section 2 */}
        <div className="w-[150px]">
          <div>
            <p className="flex justify-start font-[Monotype Bodoni] text-white">
              Info
            </p>
          </div>
          <div>
            
            <a href="#" className="flex justify-start font-[Roboto] text-gray-300 my-5">
              About Us
            </a>
            <a href="#" className="flex justify-start font-[Roboto] text-gray-300 my-5">
              Contacts
            </a>
            <a href="#" className="flex justify-start font-[Roboto] text-gray-300 my-5">
              Careers
            </a>
            <a href="#" className="flex justify-start font-[Roboto] text-gray-300 my-5">
              Media & Publication
            </a>
            <a href="#" className="flex justify-start font-[Roboto] text-gray-300 my-5">
              FAQ
            </a>
            <a href="#"className="flex justify-start font-[Roboto] text-gray-300 my-5">
              Privacy Policy
            </a>
          </div>
        </div>
        {/* Section3 */}
        <div className="w-[170px]">
          <div>
            <p className="flex justify-start font-[Monotype Bodoni] text-white">
              Brands
            </p>
          </div>
          <div>
            <a href="#" className="flex justify-start font-[Roboto] text-gray-300 my-5">
              Lifetime Design Interior
            </a>
            <a href="#" className="flex justify-start font-[Roboto] text-gray-300 my-5">
              Lifetime Design Arsitek
            </a>
            <a href="#" className="flex justify-start font-[Roboto] text-gray-300 my-5">
              Lifetime Design Estate
            </a>
            <a href="#" className="flex justify-start font-[Roboto] text-gray-300 my-5">
              Lifetime Design Furniture
            </a>
            <a href="#" className="flex justify-start font-[Roboto] text-gray-300 my-5">
              PIXL Studio
            </a>
          </div>
        </div>
        {/* Section 4 */}
        <div className="w-[100px]">
          <div>
            <p className="flex justify-start font-[Monotype Bodoni] text-white">
              Follow Us
            </p>
          </div>
          <div>
            <a href="#" className="flex justify-start font-[Roboto] text-gray-300 my-5">
              Facebook
            </a>
            <a href="#" className="flex justify-start font-[Roboto] text-gray-300 my-5">
              Instagram
            </a>
            <a href="#" className="flex justify-start font-[Roboto] text-gray-300 my-5">
              LinkedIn
            </a>
            <a href="#" className="flex justify-start font-[Roboto] text-gray-300 my-5">
              Pinterest
            </a>
          </div>
        </div>
        {/* Section 5 */}
        <div className="w-[300px]">
          <div>
            <p className="flex justify-start font-[Monotype Bodoni] text-white">
              Newsletter
            </p>
          </div>
          <div>
            <p className="flex justify-start font-[Roboto] text-gray-300 my-5">
              Sign up to our newsletter to receive exclusive offers.
            </p>
            <div className="flex flex-col">
              <fieldset className="form-control w-80">
                <div className="join">
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered join-item"
                  />
                </div>
              </fieldset>
              <button className="h-10 w-32 bg-[#AA874E] join-item my-5 text-white">DAFTAR</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
