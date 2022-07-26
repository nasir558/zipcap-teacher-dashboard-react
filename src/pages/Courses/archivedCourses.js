import React from "react";
import Layout from "../Layout/Layout";
import Courses from "./courses";

function Index() {
  const dataUnpublished = [
    {
      title: "01. Learn IOS Development",
      courseLink: "",
      publishDate: "01/06/2021",
      category: "Development",
      postID: "123",
    },
    {
      title: "02. Logo designing basics",
      courseLink: "",
      publishDate: "01/06/2021",
      category: "Designing",
      postID: "143",
    },
    {
      title: "03. Getting started with Photoshop",
      courseLink: "",
      publishDate: "01/06/2021",
      category: "Development",
      postID: "123",
    },
    {
      title: "04. Master in PHP",
      courseLink: "",
      publishDate: "01/06/2021",
      category: "Development",
      postID: "123",
    },
    {
      title: "05. React Native advance course",
      courseLink: "",
      publishDate: "01/06/2021",
      category: "Development",
      postID: "123",
    },
  ];
  return (
    <Layout>
      <div className="allCourses">
        <Courses
          ShowSearchForm
          data={dataUnpublished}
          archivedCourses
          title="Archived Courses"
          btnText="Create New Course"
          btnLink="/create-new-course"
        />
      </div>
    </Layout>
  );
}

export default Index;
