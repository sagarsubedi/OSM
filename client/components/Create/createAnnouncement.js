import Layout from '@components/Layout/Layout';

function createAnnouncement() {
    return (
        <Layout>
            <div className="flex justify-center items-center relative">
                <div className="flex flex-col items-center bg-white/20 backdrop-blur-sm h-[600px] w-[800px] rounded-xl shadow-xl backdrop-filter overflow-hidden shadow-purple-100/10">
                    
                    <div className="text-center text-3xl mt-10">Create Announcement</div>
                    <form>
                        <div className="flex flex-col">
                            <textarea type="text" name="" id="" className="mt-16 mb-8 p-2 rounded-lg backdrop-blur-md shadow-md text-black h-10 w-96" placeholder='Subject' style={{resize:"none"}}></textarea>

                            <textarea type="text" name="" id="" className="mb-8 p-2 rounded-lg backdrop-blur-md shadow-md text-black h-52 w-96" placeholder='Message' style={{resize:"none"}}></textarea>
                        </div>
                        <div className="flex items-center justify-center">
                            <button className="rounded p-3 tracking-widest text-black text-xl hover:scale-110 transition-all ease-in-out w-32 flex gap-x-2 justify-center items-center bg-emerald-500" >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 20 20" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" /></svg>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default createAnnouncement;
