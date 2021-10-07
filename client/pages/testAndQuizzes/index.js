// test and quizzes

import Layout from "../../components/Layout/Layout";
import TestAndQuizzes from "../../components/TestAndQuizzes/TestAndQuizzes";


const index = () => {
    return (
        <Layout>
            <div className="grid flex-row gap-4 justify-center pb-6">
                <button className="bg-transparent hover:bg-blue-500 text-green-400 font-semibold
                 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded tracking-widest">Create</button>
                <h2 className="text-xl font-semibold tracking-wider text-green-200">Tests and Quizzes</h2>
            </div>
            <TestAndQuizzes />
        </Layout>
    )
}

export default index;
