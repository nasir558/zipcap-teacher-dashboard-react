import React, { useState } from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import AccordionArrow from "../../assets/images/down-arrow.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UploadLecture from "../createNewCourse/lecture/uploadLecture";
import CreateLecture from "../createNewCourse/lecture/createLecture";
import PlusIcon from "../../assets/images/plus.png";

export default function EditForm() {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <form className="editForm">
            <h4 className="text-base font-medium capitalize formWizardTitlt">
                Getting started with Photoshop
            </h4>
            <div className="mt-5 examsAccordion">
                <Accordion allowZeroExpanded allowMultipleExpanded preExpanded={["0"]}>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="flex space-x-6 items-center text-sm greyText font-medium">
                                    <span>Module No. 1</span>
                                    <span>Course Introduction</span>
                                    <span className="justify-self-end dropdownArrow flex-shrink-0 w-15px">
                                        <img
                                            src={AccordionArrow}
                                            className="w-full h-auto"
                                            alt=""
                                        />
                                    </span>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="formGreybg px-2 py-2 lg:px-4 lg:py-4 xl:py-7 xl:px-8 mt-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 mt-5">
                                    <label className="text-sm greyText">
                                        <span>
                                            Module No. <span className="redText">*</span>
                                        </span>
                                        <div className="mt-3">
                                            <input
                                                type="text"
                                                name="module-no"
                                                placeholder=""
                                                disabled
                                                className="rounded-md bg-white h-46px px-4 block w-full outline-none transition-all duration-300"
                                            />
                                        </div>
                                    </label>
                                    <label className="text-sm greyText">
                                        <span>
                                            Module Name <span className="redText">*</span>
                                        </span>
                                        <div className="mt-3">
                                            <input
                                                type="text"
                                                name="module-name"
                                                placeholder=""
                                                autoFocus={true}
                                                className="rounded-md bg-white h-46px px-4 block w-full outline-none transition-all duration-300"
                                            />
                                        </div>
                                    </label>
                                </div>
                                <div className="mt-4">
                                    <Accordion
                                        allowZeroExpanded
                                        allowMultipleExpanded
                                        preExpanded={["0"]}
                                    >
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <div className="flex space-x-6 items-center text-sm greyText font-medium">
                                                        <span>Unit No. 1</span>
                                                        <span>Instructor introduction</span>
                                                        <span className="justify-self-end dropdownArrow flex-shrink-0 w-15px">
                                                            <img
                                                                src={AccordionArrow}
                                                                className="w-full h-auto"
                                                                alt=""
                                                            />
                                                        </span>
                                                    </div>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                    Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                                                    occaecat ut occaecat consequat est minim minim esse tempor
                                                    laborum consequat esse adipisicing eu reprehenderit enim.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                        <AccordionItem>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <div className="flex space-x-6 items-center text-sm greyText font-medium">
                                                        <span>Unit No. 2</span>
                                                        <span>Basics of the course</span>
                                                        <span className="justify-self-end dropdownArrow flex-shrink-0 w-15px">
                                                            <img
                                                                src={AccordionArrow}
                                                                className="w-full h-auto"
                                                                alt=""
                                                            />
                                                        </span>
                                                    </div>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>
                                                    In ad velit in ex nostrud dolore cupidatat consectetur ea in
                                                    ut nostrud velit in irure cillum tempor laboris sed
                                                    adipisicing eu esse duis nulla non.
                                                </p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
                                    <label className="text-sm greyText">
                                        <span>
                                            Unit No. <span className="redText">*</span>
                                        </span>
                                        <div className="mt-3">
                                            <input
                                                type="text"
                                                name="unit-no"
                                                placeholder=""
                                                disabled
                                                className="rounded-md bg-white h-46px px-4 block w-full outline-none transition-all duration-300"
                                            />
                                        </div>
                                    </label>
                                    <label className="text-sm greyText">
                                        <span>
                                            Unit Name <span className="redText">*</span>
                                        </span>
                                        <div className="mt-3">
                                            <input
                                                type="text"
                                                name="unit-name"
                                                placeholder=""
                                                className="rounded-md bg-white h-46px px-4 block w-full outline-none transition-all duration-300"
                                            />
                                        </div>
                                    </label>
                                </div>
                                <div className="mt-4">
                                    <label className="text-sm greyText">
                                        <span>
                                            Unit Overview <span className="redText">*</span>
                                        </span>
                                        <div className="mt-3">
                                            <SunEditor
                                                lang="en"
                                                name="course-description"
                                                width="100%"
                                                height="281px"
                                                placeholder="Please type here..."
                                                className="rounded-md bg-white px-4 block w-full outline-none transition-all duration-300"
                                                setDefaultStyle="font-family: 'Poppins', sans-serif !important; font-size: 16px;"
                                                autoFocus={false}
                                            />
                                        </div>
                                    </label>
                                </div>
                                <div className="mt-4">
                                    <Tabs
                                        selectedIndex={tabIndex}
                                        onSelect={(index) => setTabIndex(index)}
                                    >
                                        <TabList>
                                            <Tab>Upload Lecture</Tab>
                                            <Tab>Create Leacture</Tab>
                                        </TabList>
                                        <TabPanel>
                                            <div className="block w-full">
                                                <UploadLecture />
                                            </div>
                                        </TabPanel>
                                        <TabPanel>
                                            <div className="block w-full">
                                                <CreateLecture />
                                            </div>
                                        </TabPanel>
                                    </Tabs>
                                </div>
                                <div className="mt-16">
                                    <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 justify-end formBtns">
                                        <button
                                            type="button"
                                            className="red2Bg shadow-md text-white hover:bg-black text-base font-medium capitalize px-8 py-3.5 transition-all duration-300"
                                        >
                                            Add Unit{" "}
                                            <img
                                                src={PlusIcon}
                                                className="w-4 h-4 inline-block ml-2.5 -mt-1"
                                                alt=""
                                            />
                                        </button>
                                        <button
                                            type="button"
                                            className="red2Bg shadow-md text-white hover:bg-black text-base font-medium capitalize px-8 py-3.5 transition-all duration-300"
                                        >
                                            Save Module
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
            </div>
            <div className="mt-4">
                <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 justify-between formBtns mt-24">
                    <a
                        href="/manage-curriculams"
                        className="redBorder shadow-md redText hover:bg-black hover:text-white hover:border-black text-base font-medium capitalize px-8 py-3.5 transition-all duration-300"
                    >
                        <span className="flex flex-row items-center space-x-2">
                            <span className="text26px">{"<"}</span>
                            <span>Back</span>
                        </span>
                    </a>
                    <button
                        type="submit"
                        className="red2Bg shadow-md text-white hover:bg-black text-base font-medium capitalize px-8 py-3.5 transition-all duration-300"
                    >
                        Update Curriculam
                    </button>
                </div>
            </div>
        </form>
    );
}
