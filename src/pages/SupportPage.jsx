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
    const user = {
        avatar: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png',
        name: '홍길동',
        email: 'honggildong@example.com',
        phone: '010-1234-5678'
    };

    return (
        <>
            <NavBar />
            <PageLayout>
                <SidebarLayout>
                    <Sidebar user={user} />
                </SidebarLayout>
                <ContentLayout>
                    <Support />
                </ContentLayout>
            </PageLayout>
        </>
    );
};

export default SupportPage;
