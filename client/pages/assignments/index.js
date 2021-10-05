import Head from "next/head";

import Layout from "../../components/Layout/Layout";
import Assignments from "../../components/Assignments/Assignments";

const AssignmentsPage = () => {
    return (
        <Layout>
            <div className="grid flex-row gap-4 justify-center pb-6">
                <h2 className="text-xl font-semibold tracking-wider text-green-200">Assignments</h2>
            </div>
            <Assignments />
        </Layout>
    )
}

export default AssignmentsPage;
