
import Link from 'next/link';
import onlineLearningSVG from "../public/img/online_learning.svg";
import Image from 'next/image';



function index() {
  return (
    <div className="grid h-screen w-full grid-cols-2 items-center">
      
      {/* left side */}
      
      <div className="ml-20 space-y-6  flex flex-col justify-center justify-self-end pt-24 ">
        <span className="text-green-400 font-mono text-5xl" >Advancing the</span>
        <h1 className="text-blue-400 text-7xl font-semibold up" >School System</h1>
        <p className=" text-white leading-9 text-xl" >Online schooling has never been more important. <br /> Simply login using your school credential. <br /> Find all of your school work and easily manage your assignments.</p>
        <div className="flex">
          <Link href="/dashboard">
            <button className="rounded p-3 tracking-widest text-black text-xl hover:scale-110 transition-all ease-in-out w-32 flex gap-x-2 justify-center items-center" style={{background:"#ff6584"}}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" /></svg>
              LOGIN
              </button>
          </Link>
        </div>
      </div>


      {/* right side */}
      
      <div className=" mr-20 pl-10">
        <Image src={onlineLearningSVG} width={600} height={600} />
      </div>


    </div>
  )
}

export default index;
