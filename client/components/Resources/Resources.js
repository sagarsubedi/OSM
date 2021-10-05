import data from "./resourcesData";

function Resources() {
    return (
        <div className="grid place-items-center">
            <section className="container w-10/12">
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div className="w-full overflow-x-hidden">
                        <table className="w-full">
                            <thead>
                                <tr className="text-md font-semibold tracking-wide text-center text-gray-900 bg-blue-400 uppercase border-b border-gray-600">
                                    <th className="px-4 py-5">File</th>
                                    <th className="px-4 py-5">Published Date</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">

                            {Object.entries(data).map(([key, {file, publishedDate}]) => (
                                <tr key={key} className={`text-black text-center bg-blue-100`}>
                                    <td className="px-4 py-6 border">
                                        {/* change this to a Link later */}
                                        <p className="font-semibold text-black">{file}</p>
                                    </td>
                                    <td className="px-4 py-6 text-md border">{publishedDate}</td>

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

export default Resources;
