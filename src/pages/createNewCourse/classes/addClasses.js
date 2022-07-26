import React, { useState, Fragment } from "react";
import { Form, Input, Select } from "usetheform";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import AccordionArrow from "../../../assets/images/down-arrow.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DescriptiveQuestion from "./descriptiveQuestionClass";
import MCQs from "./mcqsClass";
import { Link } from "react-router-dom";
import { Menu, Transition } from '@headlessui/react';

export default function AddClasses({ prevPage, nextPage, ...props }) {
  const [tabIndex, setTabIndex] = useState(0);
  const [quizDate, setQuizDate] = useState();
  const [assignmentDate, setAssignmentDate] = useState();
  const [classtDate, setClassDate] = useState();
  const [classtValidity, setValidityDate] = useState();

  return (
    <Form name="page5" {...props}>
      <h4 className="text-base font-medium capitalize formWizardTitlt">
        Add Classes
      </h4>
      <div className="mt-5 examsAccordion">
        <Accordion allowZeroExpanded allowMultipleExpanded preExpanded={["0"]}>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="flex space-x-6 items-center text-sm greyText font-medium">
                  <span>Class No. 1</span>
                  <span>Introduction</span>
                  <span className="justify-self-end dropdownArrow flex-shrink-0 w-15px">
                  <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="inline-flex justify-center w-full greyText">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                          </svg>

                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 mainBoxShadow bg-white  focus:outline-none z-10">
                          <div className="py-1">
                            <Menu.Item>
                              <Link to="/" className="greyText block px-4 py-2 text-sm hover:bg-gray-100">
                                Edit
                              </Link>
                            </Menu.Item>
                            <Menu.Item>
                              <Link to="/" className="greyText block px-4 py-2 text-sm hover:bg-gray-100">
                                Delete
                              </Link>
                            </Menu.Item>
                          </div>

                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </span>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
              SUbmitted form data will show here.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="formGreybg px-2 py-2 lg:px-4 lg:py-4 xl:py-7 xl:px-8 mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 mt-5">
          <label className="text-sm greyText">
            <span>
              Class No. <span className="redText">*</span>
            </span>
            <div className="mt-3">
              <Input
                type="text"
                name="class-no"
                placeholder=""
                disabled
                className="rounded-md bg-white h-46px px-4 block w-full outline-none transition-all duration-300"
              />
            </div>
          </label>
          <label className="text-sm greyText lg:col-span-2">
            <span>
              Class Name <span className="redText">*</span>
            </span>
            <div className="mt-3">
              <Input
                type="text"
                name="class-name"
                placeholder=""
                autoFocus={true}
                className="rounded-md bg-white h-46px px-4 block w-full outline-none transition-all duration-300"
              />
            </div>
          </label>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-12 mt-4">
          <label className="text-sm greyText">
            <span>
              Class date <span className="redText">*</span>
            </span>
            <div className="mt-3">
              <DatePicker
                name="start-date"
                placeholderText="Select Date"
                className="rounded-md bg-white h-46px px-4 block w-full outline-none transition-all duration-300"
                selected={classtDate}
                onChange={(date) => setClassDate(date)}
                dateFormat="d MMM, yyyy"
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
              />
            </div>
          </label>
          <label className="text-sm greyText">
            <span>
              Class validity <span className="redText">*</span>
            </span>
            <div className="mt-3">
              <DatePicker
                name="start-date"
                placeholderText="Select Date"
                className="rounded-md bg-white h-46px px-4 block w-full outline-none transition-all duration-300"
                selected={classtValidity}
                onChange={(date) => setValidityDate(date)}
                dateFormat="d MMM, yyyy"
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
              />
            </div>
          </label>
        </div>
        <h4 className="text-base font-medium capitalize formWizardTitlt mt-4">
          Associate resources
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-12 mt-4">
          <label className="text-sm greyText">
            <span>
              Select module <span className="redText">*</span>
            </span>
            <div className="mt-3">
              <Select
                name="selected-module"
                className="rounded-md bg-white h-46px px-4 block w-full outline-none transition-all duration-300"
              >
                <option value="">Module No. 1 Course Introduction </option>
                <option value="">Module No. 2 Course Content </option>
              </Select>
            </div>
          </label>
          <label className="text-sm greyText">
            <span>
              Associate units <span className="redText">*</span>
            </span>
            <div className="mt-3">
              <Select
                name="Associated-units"
                className="rounded-md bg-white h-46px px-4 block w-full outline-none transition-all duration-300"

              >
                <option value="">Unit 1</option>
                <option value="">Unit 2</option>
              </Select>
            </div>
          </label>
        </div>
        <div className="mt-4">
          <Accordion allowZeroExpanded preExpanded={["0"]}>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="flex space-x-6 items-center text-sm greyText font-medium">
                    <span>Add quiz</span>
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 mt-5 mb-5">
                  <label className="text-sm greyText">
                    <span>
                      Total time for quiz ( in minutes ) <span className="redText">*</span>
                    </span>
                    <div className="mt-3">
                      <Input
                        type="text"
                        name="total-time"
                        placeholder=""
                        className="rounded-md bg-white h-46px px-4 block w-full outline-none transition-all duration-300"
                      />
                    </div>
                  </label>
                  <label className="text-sm greyText">
                    <span>
                      Quiz validity <span className="redText">*</span>
                    </span>
                    <div className="mt-3">
                      <DatePicker
                        name="start-date"
                        placeholderText="Select Date"
                        className="rounded-md bg-white h-46px px-4 block w-full outline-none transition-all duration-300"
                        selected={quizDate}
                        onChange={(date) => setQuizDate(date)}
                        dateFormat="d MMM, yyyy"
                        peekNextMonth
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"

                      />
                    </div>
                  </label>
                </div>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                  <TabList>
                    <Tab>Descriptive Question</Tab>
                    <Tab>MCQs</Tab>
                  </TabList>
                  <TabPanel>
                    <div className="block w-full">
                      <DescriptiveQuestion
                        btnOneText="Add Question"
                        btnTwoText="Save Quiz"
                      />
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="block w-full">
                      <MCQs
                        btnOneText="Add Question"
                        btnTwoText="Save Quiz"
                      />
                    </div>
                  </TabPanel>
                </Tabs>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="flex space-x-6 items-center text-sm greyText font-medium">
                    <span>Add assignment</span>
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 mt-5 mb-5">
                  <label className="text-sm greyText">
                    <span>
                      Assignment validity <span className="redText">*</span>
                    </span>
                    <div className="mt-3">
                      <DatePicker
                        name="start-date"
                        placeholderText="Select Date"
                        className="rounded-md bg-white h-46px px-4 block w-full outline-none transition-all duration-300"
                        selected={assignmentDate}
                        onChange={(date) => setAssignmentDate(date)}
                        dateFormat="d MMM, yyyy"
                        peekNextMonth
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"

                      />
                    </div>
                  </label>
                </div>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                  <TabList>
                    <Tab>Descriptive Question</Tab>
                    <Tab>MCQs</Tab>
                  </TabList>
                  <TabPanel>
                    <div className="block w-full">
                      <DescriptiveQuestion
                        btnOneText="Add Question"
                        btnTwoText="Save Assignment"
                        assignment
                      />
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="block w-full">
                      <MCQs
                        btnOneText="Add Question"
                        btnTwoText="Save Assignment"
                      />
                    </div>
                  </TabPanel>
                </Tabs>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="mt-16">
          <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 justify-end formBtns">
            <button
              type="button"
              className="red2Bg shadow-md rounded-lg text-white hover:bg-black text-base font-medium capitalize px-8 py-3.5 transition-all duration-300"
            >
              Save Class
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 justify-between formBtns mt-24">
          <button
            type="button"
            onClick={prevPage}
            className="redBorder shadow-md redText rounded-lg hover:bg-black hover:text-white hover:border-black text-base font-medium capitalize px-8 py-3.5 transition-all duration-300"
          >
            <span className="flex flex-row items-center space-x-2">
              <span className="text26px">{"<"}</span>
              <span>Back</span>
            </span>
          </button>
          <button
            type="submit"
            className="red2Bg shadow-md text-white rounded-lg hover:bg-black text-base font-medium capitalize px-8 py-3.5 transition-all duration-300"
          >
             Save & Continue
          </button>
        </div>
      </div>
      {/* <Input type="text" name="name" placeholder="Type your name..." />
    <Input type="text" name="lastname" placeholder="Type your last name..." />
    <button type="submit">Next Page</button> */}
    </Form>
  );
}
