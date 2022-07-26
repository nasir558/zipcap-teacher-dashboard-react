import React from "react";
import Star from "../../assets/images/star.png";
import LikeIcon from "../../assets/images/like.png";
import MessageIcon from "../../assets/images/speech-bubble.png";
import { Link } from "react-router-dom";

function Comments({
  data,
  commentBoxPlaceholderText,
  commentButtonText,
  userPic2,
}) {
  return (
    <div>
      {data.map((content, index) => (
        <div key={index} className="mainBoxShadow comments rounded-lg bg-white">
          <div className="borderBottom">
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 pb-5 mt-8 p-2 lg:p-4 xl:p-8">
              <div className="rounded-md w-24 flex-shrink-0 overflow-hidden">
                <img
                  src={content.courseThumbnail}
                  className="w-full h-auto flex-shrink-0"
                  alt=""
                />
              </div>
              <div>
                <p className="text-base">
                  <Link
                    to={content.courseLink}
                    className="courseTitle transition-all duration-300"
                  >
                    {content.courseTitle}
                  </Link>
                </p>
                {!!content.averageRating || content.reviews ? (
                  <p className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-12 text-sm greyText mt-1">
                    {!!content.averageRating && (
                      <span>{content.averageRating}</span>
                    )}
                    {!!content.reviews && <span>{content.reviews}</span>}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
          <div className="mt-8 p-2 lg:p-4 xl:p-8">
            {!!content.comments &&
              content.comments.map((comments, index) => (
                <div key={index}>
                  <div className="flex flex-row space-x-4">
                    <div className="w-12 h-12 flex-shrink-0 rounded-full">
                      <img
                        src={comments.commentorPic}
                        className="w-full h-auto flex-shrink-0"
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="text-base greyText font-semibold">
                        {comments.commentorName}
                      </p>
                      <p className="text-sm greyText">{comments.timeElapsed}</p>
                      {!!comments.ratingStars && (
                        <div className="flex flex-row space-x-1 mt-1.5">
                          <img
                            src={Star}
                            className="w-3.5 h-auto flex-shrink-0"
                            alt=""
                          />
                          <img
                            src={Star}
                            className="w-3.5 h-auto flex-shrink-0"
                            alt=""
                          />
                          <img
                            src={Star}
                            className="w-3.5 h-auto flex-shrink-0"
                            alt=""
                          />
                          <img
                            src={Star}
                            className="w-3.5 h-auto flex-shrink-0"
                            alt=""
                          />
                          <img
                            src={Star}
                            className="w-3.5 h-auto flex-shrink-0"
                            alt=""
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col xl:flex-row space-y-4 xl:space-y-0 xl:space-x-12 mt-5">
                    <div>
                      <p className="text-sm greyText">{comments.comment}</p>
                    </div>
                    {!!comments.likes || comments.replies ? (
                      <div>
                        {!!comments.likes && (
                          <div className="flex felx-row space-x-2 items-center">
                            <span className="flex-shrink-0 w-5">
                              <img
                                src={LikeIcon}
                                className="flex-shrink-0 w-full h-auto"
                                alt=""
                              />
                            </span>
                            <span className="text-xs flex-shrink-0 lightGreyText">
                              {comments.likes} likes
                            </span>
                          </div>
                        )}
                        {!!comments.replies && (
                          <div className="flex felx-row space-x-2 items-center mt-4">
                            <span className="flex-shrink-0 w-5">
                              <img
                                src={MessageIcon}
                                className="flex-shrink-0 w-full h-auto"
                                alt=""
                              />
                            </span>
                            <span className="text-xs flex-shrink-0 lightGreyText">
                              {comments.replies} replies
                            </span>
                          </div>
                        )}
                      </div>
                    ) : null}
                  </div>
                  {!!comments.commentReply && (
                    <>
                      {comments.commentReply.map((commentReply, index) => (
                        <div
                          key={index}
                          className="commentReply p-6 xl:px-16"
                        >
                          <div className="flex flex-row space-x-4">
                            <div className="w-12 h-12 flex-shrink-0 rounded-full">
                              <img
                                src={commentReply.commentorPic}
                                className="w-full h-auto flex-shrink-0"
                                alt=""
                              />
                            </div>
                            <div>
                              <p className="text-base greyText font-semibold">
                                {commentReply.commentorName}
                              </p>
                              <p className="text-sm greyText">
                                {commentReply.timeElapsed}
                              </p>
                              {!!commentReply.ratingStars && (
                                <div className="flex flex-row space-x-1 mt-1.5">
                                  <img
                                    src={Star}
                                    className="w-3.5 h-auto flex-shrink-0"
                                    alt=""
                                  />
                                  <img
                                    src={Star}
                                    className="w-3.5 h-auto flex-shrink-0"
                                    alt=""
                                  />
                                  <img
                                    src={Star}
                                    className="w-3.5 h-auto flex-shrink-0"
                                    alt=""
                                  />
                                  <img
                                    src={Star}
                                    className="w-3.5 h-auto flex-shrink-0"
                                    alt=""
                                  />
                                  <img
                                    src={Star}
                                    className="w-3.5 h-auto flex-shrink-0"
                                    alt=""
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="flex flex-col xl:flex-row xl:items-center space-y-4 xl:space-y-0 xl:space-x-12 mt-5">
                            <div>
                              <p className="text-sm greyText">
                                {commentReply.comment}
                              </p>
                            </div>
                            {!!commentReply.likes && (
                              <div>
                                <div className="flex felx-row space-x-2 items-center">
                                  <span className="flex-shrink-0 w-5">
                                    <img
                                      src={LikeIcon}
                                      className="flex-shrink-0 w-full h-auto"
                                      alt=""
                                    />
                                  </span>
                                  <span className="text-xs flex-shrink-0 lightGreyText">
                                    {commentReply.likes} likes
                                  </span>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              ))}
            <div className="commentReplyForm p-6 xl:px-16">
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-full">
                  <img
                    src={userPic2}
                    className="w-full h-auto flex-shrink-0"
                    alt=""
                  />
                </div>
                <div className="flex-grow commentBox">
                  <input
                    type="text"
                    name=""
                    className="text-sm rgreyText p-2.5 w-full outline-none transition-all duration-300"
                    placeholder={commentBoxPlaceholderText}
                  />
                  <div className="mt-5 text-right">
                    <button
                      type="submit"
                      className="red2Bg shadow-md text-white hover:bg-black text-sm w-full sm:w-auto font-medium capitalize px-7 py-3.5 transition-all duration-300"
                    >
                      {commentButtonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Comments;
