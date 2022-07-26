import React, { useState, Fragment } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import DescriptiveQuestion from "./descriptiveQuestion";
import MCQs from "./mcqs";
import { Link } from "react-router-dom";
import { Menu, Transition } from '@headlessui/react';

const CreateExam = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div>
      <h4 className="text-base font-medium capitalize formWizardTitlt">
        Add Questions
      </h4>
      <div className="mt-4">
        <Accordion allowZeroExpanded allowMultipleExpanded preExpanded={["0"]}>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="flex space-x-6 items-center text-sm greyText font-medium">
                  <span>Question No. 1</span>
                  <span>What is the latest version of Photoshop?</span>
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
                  <span>Question No. 2</span>
                  <span>What is the color code for white color?</span>
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
      <div className="mt-4">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Descriptive Question</Tab>
            <Tab>MCQs</Tab>
          </TabList>
          <TabPanel>
            <div className="block w-full">
              <DescriptiveQuestion
                btnOneText="Add Question"
                btnTwoText="Save Exam"
              />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="block w-full">
              <MCQs
                btnOneText="Add Question"
                btnTwoText="Save Exam"
              />
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default CreateExam;
