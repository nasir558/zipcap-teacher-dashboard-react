import React, { useState } from "react";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FilterForm = () => {
    const [startDate, setStartDate] = useState();

    return (
        <div>
            <form className="mt-5 filterSearch">
                <div className="grid xl:grid-cols-2">
                    <div></div>
                    <div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-6">
                            <select className="py-3.5 pl-2.5 pr-8 transition-all duration-300 outline-none">
                                <option>Select Course</option>
                            </select>
                            <select className="py-3.5 pl-2.5 pr-8 transition-all duration-300 outline-none">
                                <option>Select Class</option>
                            </select>
                            <DatePicker
                                placeholderText="Select Date"
                                className="dob block w-full py-3.5 pl-2.5 pr-8 transition-all duration-300 outline-none"
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                dateFormat="d MMM, yyyy"
                                peekNextMonth
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FilterForm;
