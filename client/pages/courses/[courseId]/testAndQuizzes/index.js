// test and quizzes

import Layout from "@components/Layout/Layout";
import TestAndQuizzes from "@components/TestAndQuizzes/TestAndQuizzes";
import TitleAndCreate from "@components/TitleAndCreate/TitleAndCreate";


const index = () => {
    return (
        <Layout>
            <TitleAndCreate name="Tests And Quizzes" userRole="professor" />
            <TestAndQuizzes />
        </Layout>
    )
}

export default index;
