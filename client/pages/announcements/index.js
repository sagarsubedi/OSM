// announcement page
import Layout from "../../components/Layout/Layout";
import Announcements from "../../components/Announcements/Announcements";

const index = () => {
    return (
        <Layout>
            <div className="grid flex-row gap-4 justify-center pb-6">
                <h2 className="text-xl font-semibold tracking-wider text-green-200">Announcements</h2>
            </div>

            <Announcements />

            {/* create button */}
            <div className="flex justify-center">
                <button className="bg-transparent hover:bg-blue-500 text-green-400 font-semibold
                 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded tracking-widest">Create</button>
            </div>

        </Layout>
    )
}

export default index
