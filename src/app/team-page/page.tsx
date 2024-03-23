"use client";
import Footer from "@/components/footer";
import { getUser } from "@/components/user";
import { useEffect, useState } from "react";

export default function Page() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const users = await getUser();
      setUser(users);
    };
    fetchData();
  }, []);

  // console.log(user);

  return (
    <div>
    <div className="pt-20 text-center items-center gap-5 py-20  max-sm:h-auto max-sm-:w-auto flex flex-col h-screen justify-center w-full">
      <p className="font-serif text-6xl">Our Team</p>
      <div className="pt-16 flex flex-wrap justify-center items-center gap-5 px-4">
        {user.map((user: any, index) => (
          <div key={index} className="">
            <div className="card card-side flex flex-col md:flex-row  bg-black w-auto h-auto lg:h-auto lg:w-[30rem] shadow-xl max-md:pt-5">
              <figure>
                <img src={user.picture.large} alt="Avatar" className="ml-5 border-2 border-white h-auto w-auto md:w-auto md:h-auto" />
              </figure>
              <div className="card-body">
                <h2 className="card-title justify-center items-center">
                  {user.name.first} {user.name.last}
                </h2>
                <p className="items-center justify-center">{user.email}.</p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
<Footer />

    </div>
  );
}
