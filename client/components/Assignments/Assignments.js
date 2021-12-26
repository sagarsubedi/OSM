import data from "./assignmentData";

function getTextColor(status){
    if(status === 'Not Started') return 'text-red-700';
    else if(status === 'Started') return 'text-green-700';
    else if(status === 'Submitted') return 'text-yellow-700';
    else if(status === 'Returned') return 'text-blue-700';
    else {return '';}
    
}

function getBgColor(status){
    if(status === 'Not Started') return 'bg-red-200';
    else if(status === 'Started') return 'bg-green-200';
    else if(status === 'Submitted') return 'bg-yellow-200';
    else if(status === 'Returned') return 'bg-blue-200';
    else {return '';}
    
}

// 
function Assignments() {

    return (
        <div className="grid place-items-center">
            <section className="container w-10/12">
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div className="w-full overflow-x-hidden">
                        <table className="w-full">
                            <thead>
                                <tr className="text-md font-semibold tracking-wide text-center text-gray-900 bg-blue-400 uppercase border-b border-gray-600">
                                    <th className="px-4 py-5">Title</th>
                                    <th className="px-4 py-5">Status</th>
                                    <th className="px-4 py-5">Open Date</th>
                                    <th className="py-5">Due Date</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">

                            {Object.entries(data).map(([key, {title, status, openDate, dueDate}]) => (
                                <tr key={key} className={`text-black text-center bg-blue-100`}>
                                    <td className="px-4 py-6 border">
                                        {/* change this to a Link later */}
                                        <p className="font-semibold text-black">{title}</p>
                                    </td>

                                    <td className="px-4 py-6 text-md border">
                                        <span className={`px-2 py-1 font-semibold leading-tight ${getTextColor(status)} ${getBgColor(status)} rounded-xl`}>{status}</span>
                                    </td>

                                    <td className="px-4 py-6 text-md border">{openDate}</td>

                                    <td className="py-6 text-md border">{dueDate}</td>

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
