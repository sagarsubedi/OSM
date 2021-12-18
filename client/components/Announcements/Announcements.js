import data from "./announcementsData";

function getTextColor(status){
    if(status === 'Not Read') return 'text-red-600';
    else if(status === 'Read') return 'text-green-600';
    else {return '';}
    
}

function getBgColor(status){
    if(status === 'Not Read') return 'bg-red-200';
    else if(status === 'Read') return 'bg-green-200';
    else {return '';}
    
}

function Announcements() {
    return (
        <div className="grid place-items-center">
            <section className="container w-10/12">
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div className="w-full overflow-x-hidden">
                        <table className="w-full">
                            <thead>
                                <tr className="text-md font-semibold tracking-wide text-center text-gray-900 bg-blue-400 uppercase border-b border-gray-600">
                                    <th className="px-4 py-5">Subject</th>
                                    <th className="px-4 py-5">Published On</th>
                                    <th className="px-4 py-5">Status</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">

                            {Object.entries(data).map(([key, {title, subject, publishedDate, isRead}]) => (
                                <tr key={key} className={`text-black text-center bg-blue-100`}>
                                    <td className="px-4 py-6 border">
                                        {/* change this to a Link later */}
                                        <p className="font-semibold text-black">{subject}</p>
                                    </td>

                                    <td className="px-4 py-6 text-md border">{publishedDate}</td>

                                    <td className="px-4 py-6 text-md border">
                                        <span className={`px-2 py-1 font-semibold leading-tight ${getTextColor(isRead)} ${getBgColor(isRead)} rounded-lg`}>{isRead}</span>
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

export default Announcements;
