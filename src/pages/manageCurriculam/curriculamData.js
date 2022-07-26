import React from "react";
import EditIcon from "../../assets/images/edit.png";
import DeleteIcon from "../../assets/images/delete.png";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { Link } from "react-router-dom";
import SearchIcon from "../../assets/images/search.png";

const CurriculamData = () => {

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
        <div>
            <div className="searchForm">
                <div className="grid grid-cols-1 mt-8 lg:mt-0 lg:grid-cols-2 xl:grid-cols-3">
                    <div>
                        <form className="flex flex-row boxShadow maxWidth-344px">
                            <input type="text" name="" placeholder="Search by course name" className="text-sm px-2.5 outline-none flex-grow transition-all duration-300" />
                            <button type="submit" className="red2Bg px-4 hover:bg-black transition-all duration-300">
                                <img src={SearchIcon} alt="search icon" aria-hidden="true" className="w-22px flex-shrink-0 h-auto" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
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
                            <Th className="text-center text-base leading-7 font-medium">
                                Category
                            </Th>
                            <Th className="text-center text-base leading-7 font-medium">
                                Action
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {dataUnpublished.map((content, index) => (
                            <Tr key={index}>
                                <Td className="text-sm">{content.title}</Td>
                                <Td className="text-sm">{content.publishDate}</Td>
                                <Td className="text-sm">{content.category}</Td>
                                <Td className="text-sm">
                                    <span className="flex flex-row items-center space-x-2 sm:justify-center">
                                        <Link to="/edit-curriculam" title={content.postID}>
                                            <img
                                                src={EditIcon}
                                                alt="edit icon"
                                                className="w-20px h-auto flex-shrink-0"
                                            />
                                        </Link>
                                        <Link to={content.postID} title={content.postID}>
                                            <img
                                                src={DeleteIcon}
                                                alt="delete icon"
                                                className="w-16px h-auto flex-shrink-0"
                                            />
                                        </Link>
                                    </span>
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

        </div>
    );
};

export default CurriculamData;
