// gradebook page

import Layout from "../../components/Layout/Layout";
import Gradebook from "../../components/Gradebook/Gradebook";


const index = () => {
    return (
        <Layout>
            <div className="grid flex-row gap-4 justify-center pb-6">
                <h2 className="text-xl font-semibold tracking-wider text-green-200">Gradebook</h2>
            </div>
            <Gradebook />
        </Layout>
    )
}

export default index;
