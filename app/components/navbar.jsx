import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="p-2 flex justify-between border border-y-emerald-500 border-e-blue-300 border-s-yellow-200 rounded-lg">
        <div className="px-2 py-4">Just Keep Swimming ... </div>
        <div className="py-4 px-2 text-justify text-2xl  hover:text-2xl hover:text-yellow-200">
          <Link href={"/"}>The English Club</Link>
        </div>
        <div className="px-2 py-4 flex justify-center  gap-3">
          <div className="px-1">
            <Link href={"/blogs"}>Blogs</Link>
          </div>
          <div className="px-1">
            {" "}
            <Link href={"/events"}>Events</Link>
          </div>
          <div className="px-1">
            {" "}
            <Link href={"/members"}>Members</Link>
          </div>
        </div>
      </div>
    </>
  );
}
