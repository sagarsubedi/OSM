import studentDeatils from './rosterData';

function Roster() {


    return (
        
        <section className="flex flex-wrap gap-x-6 gap-y-12 place-content-evenly">

            {Object.entries(studentDeatils).map(([key, {name, email, role, year, imgUrl}]) => (
                <div className="h-72 rounded-2xl shadow-2xl w-60 transition duration-200 transform hover:scale-105 border border-green-200">

                    <div className="rounded-full grid place-content-center">
                        <img src={imgUrl} width={100} />
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

