import Layout from "@components/Layout/Layout";
import Link from "next/link";
import { useRouter } from "next/router";

function Announcement() {

    const router = useRouter();

    return (
        <Layout>
            <div id="announcement" className="text-3xl text-slate-900 bg-blue-400 h-20 flex items-center rounded-xl mt-2 mb-5">
                <h1 className="ml-5">Announcement</h1>
            </div>

            <div id="title" className="text-3xl text-slate-900 bg-blue-300 h-20 flex items-center rounded-xl mt-5 mb-5">
                <h1 className="ml-5">Title of the Announcement</h1>
            </div>

            <div id="description" className="text-2xl text-slate-900 bg-blue-300/80 h-60 flex rounded-xl mt-5 mb-5">
                <p className="ml-4 pt-5">This is a test announcement. Real announcement data will appear once I code the front-end to talk to the API</p>
            </div>
            <Link href={{
                        pathname : "/courses/[courseId]/announcements",
                        query : {courseId: router.query.courseId}
                    }}>
                <button className="rounded p-3 tracking-widest text-black text-xl hover:scale-110 transition-all ease-in-out w-32 flex gap-x-2 justify-center items-center bg-emerald-500" >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" /></svg>
                BACK
                </button>
          </Link>

        </Layout>
    )
}

export default Announcement;
