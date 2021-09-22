import data from "./assignmentData";

function getTextColor(status){
    if(status === 'Not Started') return 'text-red-600';
    else if(status === 'Started') return 'text-green-600';
    else if(status === 'Submitted') return 'text-yellow-600';
    else if(status === 'Returned') return 'text-blue-600';
    else {return '';}
    
}

function getBgColor(status){
    if(status === 'Not Started') return 'bg-red-200';
    else if(status === 'Started') return 'bg-green-200';
    else if(status === 'Submitted') return 'bg-yellow-200';
    else if(status === 'Returned') return 'bg-blue-200';
    else {return '';}
    
}

function Assignments() {

    return (
        <div className="">

            <section className="container mx-auto pr-4">
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div className="w-full overflow-x-hidden">
                        <table className="w-full">
                            <thead>
                                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                                    <th className="px-4 py-5">Title</th>
                                    <th className="px-4 py-5">Status</th>
                                    <th className="px-4 py-5">Open Date</th>
                                    <th className="px-4 py-5">Due Date</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">

                            {Object.entries(data).map(([key, {title, status, openDate, dueDate}]) => (
                                <tr key={key} className="text-black">
                                    <td className="px-4 py-6 border">
                                        {/* change this to a Link later */}
                                        <p className="font-semibold text-black">{title}</p>
                                    </td>

                                    <td className="px-4 py-6 text-sm border">
                                        <span className={`px-2 py-1 font-semibold leading-tight ${getTextColor(status)} ${getBgColor(status)} rounded-sm`}>{status}</span>
                                    </td>

                                    <td class="px-4 py-6 text-sm border">{openDate}</td>

                                    <td class="px-4 py-6 text-sm border">{dueDate}</td>

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

export default Assignments