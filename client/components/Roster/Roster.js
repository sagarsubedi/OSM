import studentDeatils from './rosterData';
import {AcademicCapIcon, PresentationChartBarIcon} from "@heroicons/react/outline";

function Roster() {


    return (
        <div className="grid place-items-center">
            <section className="container w-10/12">
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div className="w-full overflow-x-hidden">
                        <table className="w-full">
                            <thead className="text-md text-center font-semibold uppercase text-gray-900 bg-blue-400 border-gray-600">
                                <tr>
                                    <th className="p-4 whitespace-nowrap">
                                        <div className="font-semibold text-left">Name</div>
                                    </th>
                                    <th className="p-4 whitespace-nowrap">
                                        <div className="font-semibold text-left">Email</div>
                                    </th>
                                    <th className="p-4 whitespace-nowrap">
                                        <div className="font-semibold text-left">Role</div>
                                    </th>
                                    <th className="p-4 whitespace-nowrap">
                                        <div className="font-semibold text-center">Year</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                            {Object.entries(studentDeatils).map(([key, {name, email, role, year}]) => (
                                <tr key={key} className="text-black bg-blue-100 text-center">
                                    <td className="whitespace-nowrap p-5">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" width="40" height="40" alt="user_picture" /></div>
                                            <div className="font-medium text-gray-800">{name}</div>
                                        </div>

                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">{email}</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        {role.toLowerCase() == "student" && <div className="shadow-sm p-2 mr-3 rounded-lg"><AcademicCapIcon className="h-8 w-9 hover:animate-bounce" /></div>}
                                        {role.toLowerCase() == "professor" && <div className="shadow-sm p-2 mr-3 rounded-lg"><PresentationChartBarIcon className="h-8 w-9 hover:animate-bounce" /></div>}
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        {/* if professor, Year does not make sense */}
                                        {year != "0000" && <div className="text-lg text-center">{year}</div>}
                                        {year == "0000" && <div className="text-lg text-center">-------</div>}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Roster;

