import studentDeatils from './rosterData';
import Image from 'next/image';
import logoPng from "../../public/img/avatar.png";

function Roster() {


    return (
        
        <section className="grid sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12 place-content-evenly">

            {Object.entries(studentDeatils).map(([key, {name, email, role, year}]) => (
                <div key={key} className="h-72 rounded-2xl shadow-2xl w-60 transition duration-200 transform hover:scale-105 border border-green-200">

                    <div className="rounded-full grid place-content-center">
                        <Image src={logoPng} width={110} height={110} />
                    </div>

                    <div className="grid grid-cols-3">
                        <div className="text-md pt-6 pl-3 overflow-hidden col-span-1">
                            <p className="pt-1">Name: </p>
                            <p className="pt-4">Email: </p>
                            <p className="pt-4">Role: </p>
                            <p className="pt-4">Year: </p>
                        </div>

                        <div className="text-md pt-6 overflow-hidden col-span-2">
                            <p className="pt-1">{name} </p>
                            <p className="pt-4">{email}</p>
                            <p className="pt-4">{role}</p>
                            <p className="pt-4">{year}</p>
                        </div>

                    </div>

                    </div>
            ))}


        </section>
    )
}

export default Roster;

