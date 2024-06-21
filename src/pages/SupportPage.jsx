import React from "react";
import {
    PageLayout,
    SidebarLayout,
    ContentLayout,
} from "../GlobalStyles/LayoutStyles";
import Sidebar from "../components/sidebar/Sidebar";
import Support from '../components/support/support';
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
                    <Support />
                </ContentLayout>
            </PageLayout>
        </>
    );
};

export default SupportPage;
