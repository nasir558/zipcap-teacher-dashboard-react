import React, { useState } from "react";
import Layout from "../Layout/Layout";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ExaminationsView from "./examinationsView";
import QuizzesView from "./quizzesView";
import AssignmentView from "./assignmentView";

function Index() {
    const [tabIndex, setTabIndex] = useState(0);
    

    return (
        <Layout>
            <div className="examinations">
                <h3 className="titleDashboard mb-28px text-lg font-semibold">
                    Examinations
                </h3>                
                <div>
                    <Tabs
                        selectedIndex={tabIndex}
                        onSelect={(index) => setTabIndex(index)}
                    >
                        <TabList>
                            <Tab>Examinations</Tab>
                            <Tab>Quizzes</Tab>
                            <Tab>Assignments</Tab>
                        </TabList>
                        <TabPanel>
                            <ExaminationsView />
                        </TabPanel>
                        <TabPanel>
                            <QuizzesView />
                        </TabPanel>
                        <TabPanel>
                            <AssignmentView />
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </Layout>
    );
}

export default Index;
