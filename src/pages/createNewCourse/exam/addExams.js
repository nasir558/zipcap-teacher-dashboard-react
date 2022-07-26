import React, {Fragment} from "react";
import { Form, Input, Select } from "usetheform";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import "react-tabs/style/react-tabs.css";
import CreateExam from "./createExam";
import { Link } from "react-router-dom";
import { Menu, Transition } from '@headlessui/react';

export default function AddExam({ prevPage, nextPage, ...props }) {

  return (
    <Form name="page3" {...props}>
      <h4 className="text-base font-medium capitalize formWizardTitlt">
        Add Exam
      </h4>
      <div className="mt-5 examsAccordion">
        <Accordion allowZeroExpanded allowMultipleExpanded preExpanded={["0"]}>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="flex space-x-6 items-center text-sm greyText font-medium">
                  <span>Exam No. 1</span>
                  <span>Mid Term Exam</span>
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
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="flex space-x-6 items-center text-sm greyText font-medium">
                  <span>Exam No. 2</span>
                  <span>Final Exam</span>
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
              Exam No. <span className="redText">*</span>
            </span>
            <div className="mt-3">
              <Input
                type="text"
                name="exam-no"
                placeholder=""
                autoFocus={true}
                className="rounded-md bg-white h-46px px-4 block w-full outline-none transition-all duration-300"
              />
            </div>
          </label>
          <label className="text-sm greyText">
            <span>
              Exam Name <span className="redText">*</span>
            </span>
            <div className="mt-3">
              <Input
                type="text"
                name="exam-name"
                placeholder=""
                className="rounded-md bg-white h-46px px-4 block w-full outline-none transition-all duration-300"
              />
            </div>
          </label>
          <label className="text-sm greyText">
            <span>
              Associate to class <span className="redText">*</span>
            </span>
            <div className="mt-3">
              <Select
                name="exam-duration"
                className="rounded-md bg-white h-46px px-4 block w-full outline-none transition-all duration-300"
              >
                <option value="" className="hidden" disabled>Select class</option>
                <option value="">Class 1</option>
              </Select>
            </div>
          </label>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-12 mt-4">
        <label className="text-sm greyText">
          <span>
            Exam total duration <span className="redText">*</span>
          </span>
          <div className="mt-3">
            <Select
              name="exam-duration"
              className="rounded-md bg-white h-46px px-4 block w-full outline-none transition-all duration-300"
            >
              <option value="">120 Mins</option>
              <option value="">150 Mins</option>
            </Select>
          </div>
        </label>
        <label className="text-sm greyText">
          <span>
            Exam total marks <span className="redText">*</span>
          </span>
          <div className="mt-3">
            <Input
              type="text"
              name="total-marks"
              placeholder="ABC"
              className="rounded-md bg-white h-46px px-4 block w-full outline-none transition-all duration-300"
            />
          </div>
          <p className="text-sm redText mt-1">Invalid values, only numbers are allowed</p>
        </label>
        <label className="text-sm greyText">
          <span>
            Exam passing marks <span className="redText">*</span>
          </span>
          <div className="mt-3">
            <Input
              type="text"
              name="passing-marks"
              placeholder="ABC"
              className="rounded-md bg-white h-46px px-4 block w-full outline-none transition-all duration-300"
            />
          </div>
          <p className="text-sm redText mt-1">Invalid values, only numbers are allowed</p>
        </label>
      </div>
        <div className="mt-4">
          <div className="block w-full">
            <CreateExam />
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
            className="red2Bg shadow-md rounded-lg text-white hover:bg-black text-base font-medium capitalize px-8 py-3.5 transition-all duration-300"
          >
           Save & Publish
          </button>
        </div>
      </div>
      {/* <Input type="text" name="name" placeholder="Type your name..." />
    <Input type="text" name="lastname" placeholder="Type your last name..." />
    <button type="submit">Next Page</button> */}
    </Form>
  );
}
