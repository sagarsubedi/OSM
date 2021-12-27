import mongoose from "mongoose";

const testQuizSchema = mongoose.Schema({
    testQuizTitle : {type : String, required: true},
    testQuizInstruction : {type : String, required: true},
    testQuizAttachment : {type : String, required: true},
    testQuizDateCreated : {type : Date, required: true},
    testQuizDateDue : {type : Date, required: true},
    testQuizMaxScore : {type : Number, required: true},
    testQuizPassingScore : {type : Number, required: true},
    testQuizQuestions : [{
        question : {type : String},
        questionType : {type : String},
        questionAnswer : {type : String},
        questionOptions : [{type : String}],
        questionMaxScore : {type : Number}
    }]  
}, { collection: 'TestQuizzes' });

export default mongoose.model("TestQuiz", testQuizSchema);
