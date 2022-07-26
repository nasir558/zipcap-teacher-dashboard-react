import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ drawerStatus }) => {
  const pathName = window.location.pathname;
  return (
    <div
      className={`xl:w-1/5 px-20px pt-14 leftNavigationContainer slimScroll h-screen xl:sticky xl:top-0 z-20 moduleDrawer transition-all duration-300 ${drawerStatus}`}
    >
      <div className="navigationItems">
        <ul className="block w-full">
          <li>
            <Link
              to="/dashboard"
              className={`${
                pathName === "/dashboard" ? "active" : null
              } flex flex-row items-center space-x-4 font-medium transition-all duration-300`}
            >
              <span className="text-left">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/all-courses"
              className={`${
                pathName === "/all-courses" ? "active" : null
              } flex flex-row items-center space-x-4 font-medium transition-all duration-300`}
            >
              <span className="text-left">All Courses</span>
            </Link>
            {pathName === "/archived-courses" || pathName === "/all-courses" ? (
              <Link
                to="/archived-courses"
                className={`${
                  pathName === "/archived-courses" ? "active" : null
                } flex flex-row items-center space-x-4 mt-2 font-medium transition-all duration-300`}
              >
                <span className="text-left">{">"} Archived courses</span>
              </Link>
            ) : null}
          </li>
          <li>
            <Link
              to="/examinations"
              className={`${
                pathName === "/examinations" ? "active" : null
              } flex flex-row items-center space-x-4 font-medium transition-all duration-300`}
            >
              <span className="text-left">Examinations</span>
            </Link>
          </li>
          <li>
            <Link
              to="/results"
              className={`${
                pathName === "/results" ||  pathName === "/results-detail"  ? "active" : null
              } flex flex-row items-center space-x-4 font-medium transition-all duration-300`}
            >
              <span className="text-left">Results</span>
            </Link>
          </li>
          <li>
            <Link
              to="/earnings"
              className={`${
                pathName === "/earnings" ? "active" : null
              } flex flex-row items-center space-x-4 font-medium transition-all duration-300`}
            >
              <span className="text-left">Earnings</span>
            </Link>
          </li>
          <li>
            <Link
              to="/payout-history"
              className={`${
                pathName === "/payout-history" ? "active" : null
              } flex flex-row items-center space-x-4 font-medium transition-all duration-300`}
            >
              <span className="text-left">Payout History</span>
            </Link>
          </li>
          <li>
            <Link
              to="/attendance"
              className={`${
                pathName === "/attendance" ? "active" : null
              } flex flex-row items-center space-x-4 font-medium transition-all duration-300`}
            >
              <span className="text-left">Attendance</span>
            </Link>
          </li>
          <li>
            <Link
              to="/discussions"
              className={`${
                pathName === "/discussions" ? "active" : null
              } flex flex-row items-center space-x-4 font-medium transition-all duration-300`}
            >
              <span className="text-left">Discussions</span>
            </Link>
          </li>
          <li>
            <Link
              to="/ratings"
              className={`${
                pathName === "/ratings" ? "active" : null
              } flex flex-row items-center space-x-4 font-medium transition-all duration-300`}
            >
              <span className="text-left">Ratings</span>
            </Link>
          </li>
          <li>
            <Link
              to="/notifications"
              className={`${
                pathName === "/notifications" ? "active" : null
              } flex flex-row items-center space-x-4 font-medium transition-all duration-300`}
            >
              <span className="text-left">Notifications</span>
            </Link>
          </li>
        </ul>
        <h2 className="navTitle font-semibold">My Account</h2>
        <ul className="block w-full">
          <li>
            <Link
              to="/profile"
              className={`${
                pathName === "/profile" ? "active" : null
              } flex flex-row items-center space-x-4 font-medium transition-all duration-300`}
            >
              <span className="text-left">Profile</span>
            </Link>
          </li>
          <li>
            <Link
              to="/payout-method"
              className={`${
                pathName === "/payout-method" ? "active" : null
              } flex flex-row items-center space-x-4 font-medium transition-all duration-300`}
            >
              <span className="text-left">Payout Method</span>
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className={`${
                pathName === "/settings" ? "active" : null
              }  flex flex-row items-center space-x-4 font-medium transition-all duration-300`}
            >
              <span className="text-left">Settings</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
