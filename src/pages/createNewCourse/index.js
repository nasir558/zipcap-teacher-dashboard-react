import React, { useState } from "react";
import Header from "../Layout/header";
import LeftArrow from "../../assets/images/left-arrow.png";
import { useMultipleForm } from "usetheform";
import BasicInformation from "./basicInformation";
import SetCurriculam from "./lecture/setCurriculam";
import AddExam from "./exam/addExams";
import AddFAQs from "./addFAQs";
import AddClasses from "./classes/addClasses";
import { Link } from "react-router-dom";

function Index() {
  const [currentPage, setPage] = useState(1);
  const nextPage = () => setPage((prev) => ++prev);
  const prevPage = () => setPage((prev) => --prev);

  const [getWizardState, wizard] = useMultipleForm();
  const onSubmitWizard = () => console.log(getWizardState());
  return (
    <div>
      <Header />
      <div className="block w-full p-2 lg:p-4 xl:p-14 mt-20 xl:mt-0">
        <div className="createNewCourse">
          <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 lg:space-x-4">
            <Link
              to="/all-courses"
              title=""
              className="red2Bg shadow-md text-white hover:bg-black text-base font-semibold capitalize px-6 py-3.5 rounded-lg transition-all duration-300"
            >
              <span className="flex flex-row items-center space-x-2">
                <img src={LeftArrow} alt="" />
                <span>All Courses</span>
              </span>
            </Link>
            <Link
              to="/manage-curriculams"
              title=""
              className="orange2Bg shadow-md text-white hover:bg-black text-base font-semibold capitalize px-6 py-3.5 rounded-lg transition-all duration-300"
            >
              Manage Curriculums
            </Link>
          </div>
          <h3 className="titleDashboard mb-28px text-lg font-semibold mt-5">
            Create new course
          </h3>
          <div className="Courses mainBoxShadow rounded-lg bg-white mt-8 p-2 lg:p-4 xl:p-8">
            <div className="wizardPagination grid grid-cols-2 md:grid-cols-5 px-4 xl:px-52 items-center mx-auto text-sm font-medium greyText">
              <div className={`${currentPage >= 1 && "active"} text-center pagDiv`}>
                Basic Information
                <div className="block w-full mt-2 numbers">
                  <span className="rounded-full flex items-center justify-center redText mx-auto">
                    1
                  </span>
                </div>
              </div>
              <div className={`${currentPage >= 2 && "active"} text-center pagDiv`}>
                Set Curriculum
                <div className="block w-full mt-2 numbers">
                  <span className="rounded-full flex items-center justify-center redText mx-auto">
                    2
                  </span>
                </div>
              </div>
              <div className={`${currentPage >= 3 && "active"} text-center pagDiv`}>
                Add Classes
                <div className="block w-full mt-2 numbers">
                  <span className="rounded-full flex items-center justify-center redText mx-auto">
                    3
                  </span>
                </div>
              </div>
              <div className={`${currentPage >= 4 && "active"} text-center pagDiv`}>
                Add FAQs
                <div className="block w-full mt-2 numbers">
                  <span className="rounded-full flex items-center justify-center redText mx-auto">
                    4
                  </span>
                </div>
              </div>
              <div className={`${currentPage >= 5 && "active"} text-center pagDiv`}>
                Add Exam
                <div className="block w-full mt-2 numbers">
                  <span className="rounded-full flex items-center justify-center redText mx-auto">
                    5
                  </span>
                </div>
              </div>
            </div>
            <div className="crateNewFormWizard mt-8">
              {currentPage === 1 && (
                <BasicInformation {...wizard} onSubmit={nextPage} />
              )}
              {currentPage === 2 && (
                <SetCurriculam
                  {...wizard}
                  prevPage={prevPage}
                  onSubmit={nextPage}
                />
              )}
              {currentPage === 3 && (
                <AddClasses
                  {...wizard}
                  prevPage={prevPage}
                  onSubmit={nextPage}
                />
              )}
              {currentPage === 4 && (
                <AddFAQs
                  {...wizard}
                  prevPage={prevPage}
                  onSubmit={nextPage}
                />
              )}
              {currentPage === 5 && (
                <AddExam
                  {...wizard}
                  prevPage={prevPage}
                  /* onSubmit={nextPage} */
                  onSubmit={onSubmitWizard}
                />

              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
