
import Layout from "@components/Layout/Layout";
import Assignments from "@components/Assignments/Assignments";
import TitleAndCreate from "@components/TitleAndCreate/TitleAndCreate";

const index = () => {
    return (
        <Layout>
            <TitleAndCreate name="Assignments" userRole="professor" url="createAssignment"/>
            <Assignments />
        </Layout>
    )
}

export default index;
