import data from './gradebookData';

function getTextColor(grade){
    if(grade[0] == 'A') return 'text-green-600';
    else if(grade[0] == 'B') return 'text-yellow-600';
    else if(grade[0] == 'C') return 'text-blue-600';
    else if(grade[0] == 'D') return 'text-purple-600';
    else if(grade[0] == 'E') return 'text-red-600'
    else {return '';}
    
}

function getBgColor(grade){
    if(grade[0] == 'A') return 'bg-green-200';
    else if(grade[0] == 'B') return 'bg-yellow-200';
    else if(grade[0] == 'C') return 'bg-blue-200';
    else if(grade[0] == 'D') return 'bg-purple-200';
    else if(grade[0] == 'E') return 'bg-red-200'
    else {return '';}
    
}

function Gradebook() {
    return (
        <div className="grid place-items-center">
            <section className="container w-10/12">
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div className="w-full overflow-x-hidden">
                        <table className="w-full">
                            <thead>
                                <tr className="text-md font-semibold tracking-wide text-center text-gray-900 bg-blue-400 uppercase border-b border-gray-600">
                                    <th className="px-4 py-5">Title</th>
                                    <th className="px-4 py-5">Grade</th>
                                    <th className="px-4 py-5">Remarks</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">

                            {Object.entries(data).map(([key, {title, grade, remarks}]) => (
                                <tr key={key} className={`text-black text-center bg-blue-100`}>
                                    <td className="px-4 py-6 border">
                                        {/* change this to a Link later */}
                                        <p className="font-semibold text-black">{title}</p>
                                    </td>

                                    <td className="px-4 py-6 text-md border">
                                        <span className={`px-2 py-1 font-semibold leading-tight ${getTextColor(grade)} ${getBgColor(grade)} rounded-lg`}>{grade}</span>
                                    </td>

                                    <td className="px-4 py-6 text-md border">{remarks}</td>

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

export default Gradebook;
