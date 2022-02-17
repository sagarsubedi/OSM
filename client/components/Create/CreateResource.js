import Layout from '@components/Layout/Layout';

function createResource() {
    return (
        <Layout>
            <div className="flex justify-center items-center relative">
                <div className="flex flex-col items-center bg-white/20 backdrop-blur-sm h-[600px] w-[800px] rounded-xl shadow-xl backdrop-filter overflow-hidden shadow-purple-100/10">
                    
                    <div className="text-center text-3xl mt-10">Create Resource</div>
                    <form>

                        <div className="flex flex-col">
                            <textarea type="text" name="" id="" className="mt-16 p-2 rounded-lg backdrop-blur-md shadow-md text-black h-10 w-96" placeholder='Title' style={{resize:"none"}}></textarea>
                        </div>

                        <div className="flex flex-col">
                            <textarea type="text" name="" id="" className="mt-16 mb-8 p-2 rounded-lg backdrop-blur-md shadow-md text-black h-20 w-96" placeholder='Description' style={{resize:"none"}}></textarea>
                        </div>

                        {/* upload button */}
                        <div class="flex justify-center">
                            <div class="mb-3 w-96">
                                <label for="formFile" class="form-label inline-block mb-2 text-white">Upload File</label>
                                <input class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-blue-200 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile" />
                            </div>
                        </div>

                        <div className="flex items-center justify-center mt-5">
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

export default createResource;
