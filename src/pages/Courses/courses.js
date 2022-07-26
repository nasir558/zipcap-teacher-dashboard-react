import React, { Fragment } from "react";
import ListHeader from "./ListHeader";
import SearchForm from "./searchForm";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Link } from "react-router-dom";
import { Menu, Transition } from '@headlessui/react';

const Courses = ({
  ShowSearchForm,
  data,
  finishPublishing,
  archivedCourses,
  title,
  btnText,
  btnLink,
}) => {
  return (
    <div>
      <ListHeader title={title} btnText={btnText} btnLink={btnLink} />
      {!!ShowSearchForm && <SearchForm />}

      <div className="Courses mainBoxShadow rounded-lg bg-white mt-8 p-2 lg:p-4 xl:p-8">
        <Table>
          <Thead className="tableHeader">
            <Tr>
              <Th className="text-center text-base leading-7 font-medium">
                Title
              </Th>
              <Th className="text-center text-base leading-7 font-medium">
                Publish date
              </Th>
              {!archivedCourses ? (
                <Th className="text-center text-base leading-7 font-medium">
                  Enrollments
                </Th>
              ) : null}

              <Th className="text-center text-base leading-7 font-medium">
                Category
              </Th>
              <Th className="text-center text-base leading-7 font-medium">
                Action
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((content, index) => (
              <Tr key={index}>
                <Td className="text-sm">
                  <Link
                    to={content.courseLink}
                    title={content.title}
                    className="transition-all duration-300"
                  >
                    {content.title}
                  </Link>
                </Td>
                <Td className="text-sm">{content.publishDate}</Td>
                {!archivedCourses ? (
                  <Td className="text-sm">{content.sales}</Td>
                ) : null}

                <Td className="text-sm">{content.category}</Td>
                <Td className="text-sm">
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
                        {!!archivedCourses ? (
                          <>
                            <div className="py-1">
                              <Menu.Item>
                                <Link to="/" className="greyText block px-4 py-2 text-sm hover:bg-gray-100">
                                  Publish
                                </Link>
                              </Menu.Item>
                              <Menu.Item>
                                <Link to="/" className="greyText block px-4 py-2 text-sm hover:bg-gray-100">
                                  Delete forever
                                </Link>
                              </Menu.Item>
                            </div>
                          </>
                        ) : (

                          <>
                            {!!finishPublishing ? (
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
                            ) : (
                              <div className="py-1">
                                <Menu.Item>
                                  <Link to="/" className="greyText block px-4 py-2 text-sm hover:bg-gray-100">
                                    Edit
                                  </Link>
                                </Menu.Item>
                                <Menu.Item>
                                  <Link to="/" className="greyText block px-4 py-2 text-sm hover:bg-gray-100">
                                    Unpublish
                                  </Link>
                                </Menu.Item>
                                <Menu.Item>
                                  <Link to="/" className="greyText block px-4 py-2 text-sm hover:bg-gray-100">
                                    Delete
                                  </Link>
                                </Menu.Item>
                              </div>
                            )}

                          </>
                        )}

                      </Menu.Items>
                    </Transition>
                  </Menu>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <div className="pagination mt-12 space-x-3.5 flex items-center justify-center">
          <button type="button" className="previous">{`<`}</button>
          <button type="button" className="active">
            1
          </button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button" className="more">
            .
          </button>
          <button type="button" className="more">
            .
          </button>
          <button type="button" className="more">
            .
          </button>
          <button type="button">10</button>
          <button type="button" className="next">{`>`}</button>
        </div>
      </div>
    </div >
  );
};

export default Courses;
