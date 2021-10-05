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
        </Layout>
    )
}

export default index
