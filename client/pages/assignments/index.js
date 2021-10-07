import Head from "next/head";

import Layout from "../../components/Layout/Layout";
import Assignments from "../../components/Assignments/Assignments";
import TitleAndCreate from "../../components/TitleAndCreate/TitleAndCreate";

const AssignmentsPage = () => {
    return (
        <Layout>
            <TitleAndCreate name="Assignments" userRole="professor" />
            <Assignments />
        </Layout>
    )
}

export default AssignmentsPage;
