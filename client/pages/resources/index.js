// resources page

import Layout from "../../components/Layout/Layout";
import Resources from "../../components/Resources/Resources";
import TitleAndCreate from "../../components/TitleAndCreate/TitleAndCreate";

const index = () => {
    return (
        <Layout>
            <TitleAndCreate name="Resources" userRole="professor" />
            <Resources />
        </Layout>
    )
}

export default index
