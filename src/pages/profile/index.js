import React, { useState } from "react";
import EditIcon from "../../assets/images/edit.png";
import UserPic from "../../assets/images/instructor.png";
import Layout from "../Layout/Layout";

const Index = () => {
  const [formEdit, setFormEdit] = useState(true);

  return (
    <Layout>
      <div className="wishList profile">
        <h3 className="titleDashboard mb-28px text-lg font-semibold mt-5">
          Profile
        </h3>
        <div className="Courses mainBoxShadow rounded-lg bg-white mt-8 p-2 lg:p-4 xl:p-8">
          <div className="aboutMe">
            <form>
              <div>
                <div className="block w-full text-right">
                  <button
                    type="button"
                    onClick={() => setFormEdit(false)}
                    className="focus:outline-none w-20px h-20px overflow-hidden flex-shrink-0"
                  >
                    <img
                      src={EditIcon}
                      className="w-full h-auto cursor-pointer"
                      alt=""
                    />
                  </button>
                </div>
                <div className="flex flex-col items-center space-y-6">
                  <div className="w-full">
                    <div className="flex-shrink-0 w-138px h-138px overflow-hidden rounded-full m-auto">
                      <label htmlFor="profile-pic" className="cursor-pointer">
                        <input
                          type="file"
                          id="profile-pic"
                          className="hidden"
                          name="Choose Image"
                          disabled={formEdit}
                        />
                        <img src={UserPic} alt="" />
                      </label>
                    </div>
                  </div>
                  <div className="w-full">
                    <input
                      type="text"
                      name="user-name"
                      placeholder="Name"
                      disabled={formEdit}
                      className="block w-full font-semibold text-center transition-all duration-300"
                    />
                    <input
                      type="text"
                      name="user-designation"
                      placeholder="Designation"
                      disabled={formEdit}
                      className="block w-full text-center transition-all duration-300"
                    />
                    <textarea
                      name="about-me"
                      disabled={formEdit}
                      className="block w-full text-center transition-all duration-300"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                    </textarea>
                  </div>
                </div>
                {!formEdit ? (
                  <div>
                    <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 justify-end formBtns mt-12">
                      <button
                        type="submit"
                        className="red2Bg shadow-md text-white hover:bg-black text-base font-medium capitalize px-8 py-3.5 transition-all duration-300"
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                ) : null}
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
