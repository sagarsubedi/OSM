// resources page

import Layout from "../../components/Layout/Layout";
import Resources from "../../components/Resources/Resources";

const index = () => {
    return (
        <Layout>
            <div className="grid flex-row gap-4 justify-center pb-6">
                <h2 className="text-xl font-semibold tracking-wider text-green-200">Resources</h2>
            </div>

            <Resources />
        </Layout>
    )
}

export default index
