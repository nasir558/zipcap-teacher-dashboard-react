import React, { useState, Fragment, useRef } from "react";
import EditIcon from "../../assets/images/edit.png";
import { Dialog, Transition } from '@headlessui/react';

const Modal = ({ primaryTItle, secondaryTitle }) => {
    const [open, setOpen] = useState(false)

    const cancelButtonRef = useRef(null)

    return (
        <div>
            <Transition.Root show={open} as={Fragment}>
                <Dialog
                    as="div"
                    auto-reopen="true"
                    className="fixed z-20 inset-0 overflow-y-auto py-10 px-6 attendanceModal"
                    initialFocus={cancelButtonRef}
                    onClose={setOpen}
                >
                    <div className="flex justify-center min-h-screen sm:block">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div className="modalContent mx-auto block overflow-hidden transform transition-all my-8 align-middle  modalBody">
                                <div className="bg-white p-4 lg:p-8 modalContent mx-auto">
                                    <div className="block w-full">

                                        <div className="mt-3 text-center">
                                            <Dialog.Title as="h3" className="text-base leading-6 greyText">
                                                <span className="block font-medium">{primaryTItle}</span>
                                                <span className="block mt-12px">{secondaryTitle}</span>
                                            </Dialog.Title>
                                            <div className="mt-6 lg:mt-14 greyText text-sm leading-6">
                                                <form ref={cancelButtonRef}>
                                                    <div className="grid grid-cols-1 gap-6 mt-5">
                                                        <label className="text-sm greyText text-left">
                                                            <span>
                                                                Status
                                                            </span>
                                                            <div className="mt-3">
                                                                <select autoFocus={true} className="rounded-md bg-white h-46px px-4 block w-full outline-none transition-all duration-300">
                                                                    <option className="hidden" selected>Select Status</option>
                                                                    <option>Leave</option>
                                                                    <option>Present</option>
                                                                    <option>Absent</option>
                                                                </select>
                                                            </div>
                                                        </label>
                                                        <label className="text-sm greyText text-left">
                                                            <span>
                                                                Remarks
                                                            </span>
                                                            <div className="mt-3">
                                                                <input
                                                                    type="text"
                                                                    name="marks"
                                                                    placeholder=""
                                                                    className="rounded-md bg-white h-46px px-4 block w-full outline-none transition-all duration-300"
                                                                />
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 justify-center formBtns mt-7">
                                                            <button
                                                                type="reset"
                                                                onClick={() => setOpen(false)}
                                                                className="redBorder shadow-md redText hover:bg-black hover:text-white hover:border-black text-sm font-medium capitalize px-10 py-3 transition-all duration-300"
                                                            >
                                                                Cancel
                                                            </button>
                                                            <button
                                                                type="submit"
                                                                className="red2Bg shadow-md text-white hover:bg-black text-sm font-medium capitalize px-10 py-3 transition-all duration-300"
                                                            >
                                                                Update
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
            <button
                onClick={() => setOpen(true)}
                type="button">
                <img
                    src={EditIcon}
                    alt="publish icon"
                    className="w-20px h-auto flex-shrink-0"
                />
            </button>
        </div>
    );
};

export default Modal;
