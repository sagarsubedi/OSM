// test and quizzes

import Layout from "../../components/Layout/Layout";
import TestAndQuizzes from "../../components/TestAndQuizzes/TestAndQuizzes";


const index = () => {
    return (
        <Layout>
            <div className="grid flex-row gap-4 justify-center pb-6">
                <h2 className="text-xl font-semibold tracking-wider text-green-200">Tests and Quizzes</h2>
            </div>
            <TestAndQuizzes />
        </Layout>
    )
}

export default index;
