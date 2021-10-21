// announcement page

import Layout from '@components/Layout/Layout';
import Announcements from "@components/Announcements/Announcements";
import TitleAndCreate from "@components/TitleAndCreate/TitleAndCreate";

const index = () => {
    return (
        <Layout>
            <TitleAndCreate name="Announcements" userRole="professor" />
            <Announcements />
        </Layout>
    )
}

export default index;
