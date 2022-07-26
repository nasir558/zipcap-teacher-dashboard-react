import React, { useState, Fragment, useRef } from "react";
import EditIcon from "../../assets/images/edit.png";
import { Dialog, Transition } from '@headlessui/react';
import { Link } from "react-router-dom";

const Modal = ({ primaryTItle, secondaryTitle }) => {
    const [open, setOpen] = useState(false)

    const cancelButtonRef = useRef(null)

    return (
        <div>
            <Transition.Root show={open} as={Fragment}>
                <Dialog
                    as="div"
                    auto-reopen="true"
                    className="fixed z-20 inset-0 overflow-y-auto py-10 px-6"
                    initialFocus={cancelButtonRef}
                    onClose={setOpen}
                >
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 sm:block sm:p-0">
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

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div className="inline-block align-bottom bg-white overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full modalBody">
                                <div className="bg-white px-6 lg:px-16 xl:px-32 py-6 lg:py-9">
                                    <div className="block w-full">

                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4">
                                            <Dialog.Title as="h3" className="text-base leading-6 greyText">
                                                <span className="block font-medium">{primaryTItle}</span>
                                                <span className="block mt-12px">{secondaryTitle}</span>
                                            </Dialog.Title>
                                            <div className="mt-6 lg:mt-14 greyText text-sm leading-6">
                                                <form ref={cancelButtonRef}>
                                                    <div className="flex flex-row items-center justify-between space-x-4">
                                                        <p>Question 3: Define types of lenses?</p>
                                                        <p>05 Marks</p>
                                                    </div>
                                                    <p className="mt-22px text-left">Answer</p>
                                                    <div className="answerBg p-10px lg:p-20px text-left">
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                                        <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                                    </div>
                                                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-12 mt-5 text-left">
                                                        <div>
                                                            <label className="text-sm greyText text-left">
                                                                <span>
                                                                    Marks <span className="redText">*</span>
                                                                </span>
                                                                <div className="mt-3">
                                                                    <input
                                                                        type="text"
                                                                        name="marks"
                                                                        placeholder=""
                                                                        autoFocus={true}
                                                                        className="rounded-md bg-white h-46px px-4 block w-full outline-none transition-all duration-300"
                                                                    />
                                                                </div>
                                                            </label>
                                                            <p className="text-sm redText mt-1">Invalid values, only numbers are allowed</p>
                                                        </div>

                                                    </div>
                                                    <div className="mt-5 text-right">
                                                        <button
                                                            type="submit"
                                                            className="red2Bg shadow-md text-white hover:bg-black text-sm w-full sm:w-auto font-medium capitalize px-14 py-3.5 transition-all duration-300"
                                                        >
                                                            Submit
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="mt-6 lg:mt-14 greyText text-sm leading-6">
                                                <form ref={cancelButtonRef}>
                                                    <div className="flex flex-row items-center justify-between space-x-4">
                                                        <p>Question 3: Define types of lenses?</p>
                                                        <p>05 Marks</p>
                                                    </div>
                                                    <p className="mt-22px text-left">Answer</p>
                                                    <div className="answerBg p-10px lg:p-20px text-left">
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                                                    </div>
                                                    <div className="text-left">
                                                        <Link to="#">
                                                            Attachment
                                                        </Link>
                                                    </div>
                                                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-12 mt-5  text-left">
                                                        <div>
                                                            <label className="text-sm greyText text-left">
                                                                <span>
                                                                    Marks <span className="redText">*</span>
                                                                </span>
                                                                <div className="mt-3">
                                                                    <input
                                                                        type="text"
                                                                        name="marks"
                                                                        placeholder=""
                                                                        autoFocus={true}
                                                                        className="rounded-md bg-white h-46px px-4 block w-full outline-none transition-all duration-300"
                                                                    />
                                                                </div>
                                                            </label>
                                                            <p className="text-sm redText mt-1">Invalid values, only numbers are allowed</p>
                                                        </div>
                                                    </div>
                                                    <div className="mt-5 text-right">
                                                        <button
                                                            type="submit"
                                                            className="red2Bg shadow-md text-white hover:bg-black text-sm w-full sm:w-auto font-medium capitalize px-14 py-3.5 transition-all duration-300"
                                                        >
                                                            Submit
                                                        </button>
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
