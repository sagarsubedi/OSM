import Head from 'next/head';
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from '../components/Sidebar/Sidebar';


export default function Home() {
  return (
    <div>
        <Head>
            <title>OSM</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <Navbar />

        <Sidebar />

    </div>
  )
}
