// home page
import Head from 'next/head';

// custom components
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";



export default function Layout({children}) {


  return (
    <>
        <Head>
            <title>OSM</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* this page as a whole should be float - column */}
        <div className="flex-col">
            <div>
                <Header />
            </div>
            
            <div className="ml-4">
                <Navbar />
            </div>

            <div className="grid grid-cols-6 mt-4">
                {/* Sidebar and any component called from sidebar has to float - row */}
                <div className="col-span-1"><Sidebar /></div>
                

                {/* Render components here based on what option is cliked on Sidebar */}
                <div className="col-span-5 mt-10 mr-20">{children}</div>
                
            </div>
        </div>
        
    </>
  )
}
