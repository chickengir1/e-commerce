import React from "react";
import {
    PageLayout,
    SidebarLayout,
    ContentLayout,
} from "../GlobalStyles/LayoutStyles";
import Sidebar from "../components/sidebar/Sidebar";
import Management from '../components/management/management';
import NavBar from "../components/nav/nav";


const SupportPage = () => {

    return (
        <>
            <NavBar />
            <PageLayout>
                <SidebarLayout>
                    <Sidebar/>
                </SidebarLayout>
                <ContentLayout>
                    <Management />
                </ContentLayout>
            </PageLayout>
        </>
    );
};

export default SupportPage;
