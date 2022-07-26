import React from "react";
import Layout from "../Layout/Layout";
import Comments from "../discussions/comments";
import UserPic2 from "../../assets/images/userPic-2.png";
import CourseThumbnail from "../../assets/images/course-thumbnail.png";
import CommentorPic from "../../assets/images/userPic.png";

function Index() {
  const dataComments = [
    {
     courseThumbnail: CourseThumbnail,
     courseTitle: "Everything you need to know about Adobe Photoshop, Unit 1 Introduction to Photoshop and first look",
     courseLink : "",
     averageRating : "4.9 Average ratings",
     reviews : "2500 Reviews",
     comments : [
       {        
         commentorPic: CommentorPic,
         commentorName: "Sana",
         timeElapsed: "5 days ago",
         ratingStars: "5",
         comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
         commentReply: [
           {
             commentorPic: CommentorPic,
             commentorName: "Ali",
             timeElapsed: "2 days ago",
             ratingStars: "5",
             comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
           }
         ]
       }
     ]
    },
    {
     courseThumbnail: CourseThumbnail,
     courseTitle: "Photography masterclass,  A complete guide to photography, Unit 7 Basic Lighting and Natural lighting",
     courseLink : "",
     averageRating : "4.9 Average ratings",
     reviews : "2500 Reviews",
     comments : [
       {        
         commentorPic: CommentorPic,
         commentorName: "Sana",
         timeElapsed: "5 days ago",
         ratingStars: "5",
         comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
         commentReply: [
         ]
       }
     ]
    }
   ]
  return (
    <Layout>
      <div className="discussions">
        <h3 className="titleDashboard mb-28px text-lg font-semibold">
          Ratings and Reviews
        </h3>
        <form>
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12">
            <select className="text-sm greyText bg-white py-3.5 pl-2.5 pr-8 transition-all duration-300 outline-none">
              <option>All Courses</option>
              <option>Courses One</option>
              <option>Courses Two</option>
              <option>Courses Three</option>
            </select>
            <select className="text-sm greyText bg-white py-3.5 pl-2.5 pr-8 transition-all duration-300 outline-none">
              <option>3 star and above</option>
              <option>2 star</option>
            </select>
          </div>
          <Comments 
            data = {dataComments}
            userPic2 = {UserPic2}
            commentBoxPlaceholderText = "Respond review"
            commentButtonText = "Add Response"
          />
        </form>
      </div>
    </Layout>
  );
}

export default Index;
