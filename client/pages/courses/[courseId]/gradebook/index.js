// gradebook page

import Layout from "@components/Layout/Layout";
import Gradebook from "@components/Gradebook/Gradebook";
import TitleAndCreate from "@components/TitleAndCreate/TitleAndCreate";

const index = () => {
    return (
        <Layout>
            <TitleAndCreate name="Gradebook" userRole="professor" />
            <Gradebook />
        </Layout>
    )
}

export default index;
