// roster page
import Layout from "@components/Layout/Layout";
import Roster from "@components/Roster/Roster";

const index = () => {
    return (
        <Layout>
            <div className="grid flex-row gap-4 justify-center pb-6">
                <h2 className="text-xl font-semibold tracking-wider text-green-200">Roster</h2>
            </div>
            <Roster />
        </Layout>
    )
}

export default index;
