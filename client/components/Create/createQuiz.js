import { useState } from "react";
import SingleQuizItem from "./singleQuizItem";
import Layout from "@components/Layout/Layout";
import { PlusCircleIcon, CheckCircleIcon } from "@heroicons/react/outline";

const CreateQuiz = () => {

    const [questions, setQuestions] = useState([]);

    const addQuestion = () => {
        setQuestions(questions.concat(<SingleQuizItem key={questions.length} />));
    }

    return(
        <Layout>
            <div className="flex-row flex-auto">
                <PlusCircleIcon className="h-10 mb-1" onClick={addQuestion}/>
                <div className="mt-10 grid grid-cols-3 gap-y-10">
                    {questions}
                </div>
                <div class="mt-10">
                    <button className="rounded p-3 tracking-widest text-black text-xl hover:scale-110 transition-all ease-in-out w-36 flex gap-x-2 justify-center items-center bg-emerald-500"><CheckCircleIcon className="text-lg" /><p className="text-xl">Submit</p></button>
                </div>
            </div>
        </Layout>
    )

}

export default CreateQuiz;