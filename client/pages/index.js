import Head from 'next/head';
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from '../components/Sidebar/Sidebar';
import Dashboard from '../components/Dashboard/Dashboard';
import { useState } from 'react';

export default function Home() {

    const [component, setComponent] = useState("dashboard");

  return (
    <div>
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
                {component == "dashboard" && (<div className="col-span-5 mt-10"><Dashboard /></div>)}
                
            </div>
        </div>
        

    </div>
  )
}
