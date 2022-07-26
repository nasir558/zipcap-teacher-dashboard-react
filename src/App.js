import "./assets/css/tailwind.generated.css";
import "./assets/css/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SignupWithEmail from "./pages/SignupWithEmail";
import ForgotPassword from "./pages/ForgotPassword";
import Otp from "./pages/Otp";
import Home from "./pages/home";
import AllCourses from "./pages/Courses";
import ArchivedCourses from "./pages/Courses/archivedCourses";
import CreateNewCourse from "./pages/createNewCourse";
import ManageCurriculam from "./pages/manageCurriculam";
import EditCurriculam from "./pages/editCurriculam";
import Examinations from "./pages/examinations";
import Results from "./pages/results";
import DetailResults from "./pages/results/detailResult"
import Earnings from "./pages/earnings";
import PayoutHistory from "./pages/payoutHistory";
import Attendance from "./pages/attendanceLogs";
import Discussions from "./pages/discussions";
import Reviews from "./pages/reviews";
import Notifications from "./pages/notifications";
import MyProfile from "./pages/profile";
import PaymentMethod from "./pages/paymentMethod";
import Settings from "./pages/settings";
import ErrorPage from "./pages/ErrorPage";
import ProtectedRoute from './ProtectedRoute';
import SaveNewPassword from './pages/saveNewPassword';

function App() {
  return (
    <Router>
      <Switch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      >
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signup-with-email" component={SignupWithEmail} />
        <Route exact path="/save-new-password" component={SaveNewPassword} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/otp" component={Otp} />
        <Route exact path="/dashboard" component={Home} />
        <Route exact path="/all-courses" component={AllCourses} />
        <Route exact path="/create-new-course" component={CreateNewCourse} />
        <Route exact path="/manage-curriculams" component={ManageCurriculam} />
        <Route exact path="/edit-curriculam" component={EditCurriculam} />
        <Route exact path="/examinations" component={Examinations} />
        <Route exact path="/results" component={Results} />
        <Route exact path="/results-detail" component={DetailResults} />
        <Route exact path="/archived-courses" component={ArchivedCourses} />
        <Route exact path="/earnings" component={Earnings} />
        <Route exact path="/payout-history" component={PayoutHistory} />
        <Route exact path="/attendance" component={Attendance} />
        <Route exact path="/discussions" component={Discussions} />
        <Route exact path="/ratings" component={Reviews} />
        <Route exact path="/notifications" component={Notifications} />
        <Route exact path="/profile" component={MyProfile} />
        <Route exact path="/payout-method" component={PaymentMethod} />
        <Route exact path="/settings" component={Settings} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
