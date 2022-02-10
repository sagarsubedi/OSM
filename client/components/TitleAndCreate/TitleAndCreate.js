import Link from "next/link";
import { useRouter } from 'next/router';

function TitleAndCreate({name, userRole,url}) {
    const router = useRouter();

    return (
        <div className="grid gap-4 pb-6 justify-center">
                {userRole === "professor" && 
                    <div className="mb-3">
                        <Link 
                            href={{
                                pathname: `/courses/[courseId]/create/${url}`,
                                query: {courseId: router.query.courseId}
                            }}
                        >
                            <a className="bg-transparent hover:bg-blue-500 text-green-400 font-semibold hover:text-white border border-blue-500 hover:border-green-400 rounded-lg px-8 py-3">Create</a></Link>
                    </div>
                }
                <h2 className="text-xl font-semibold tracking-wider text-green-200">{name}</h2>
        </div>
    )
}

export default TitleAndCreate;
