import { Navigate, Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import NotFound from "@/pages/notFound/notFound";

import StudentDashboard from "./pages/dashboards/StudentDashboard";
import DocenteDashboard from "./pages/dashboards/DocenteDashboard";

import GroupAppointment from "./pages/forms/Appointments/groupAppointment";
import SchedulesPage from "@/pages/SchedulesPage";
import SingleAppointment from "./pages/forms/Appointments/singleAppointment";
import AssignStudents from "./pages/test_jhoan/assignStudents";//AssignStudents
import InfPersonalDocente from "./pages/test_jhoan/infPersonalDocente";//InfPersonalDocente
import PruebaServer from "./pages/test_jhoan/TestServer";//__PruebaServer

import MainAuth from "./pages/auth/MainAuth";

import TestStudentForm from "./pages/test_jhoan/studentForm";
import Forms from "./pages/test_jhoan/forms";
import ContactPage from "./pages/contact";
import AuthenticatedRoute from "./context/authenticatedRoute";
import { AuthProvider, useAuth } from "@/context/authContext";
import LoginPage from "@/pages/login/login";
import AdministradorDashboardPage from "./pages/dashboards/AdministradorDashboard";


interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" />
  );
};

function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route element={<IndexPage />} path="/" />
        <Route element={<BlogPage />} path="/blog" />
        <Route element={<AboutPage />} path="/nosotros" />

        <Route element={<ContactPage />} path="/contacto" />

        <Route element={<MainAuth />} path="/main_auth" />

        <Route path="/login" element={<AuthenticatedRoute><LoginPage /></AuthenticatedRoute>} />
        <Route path="/administrador_dashboard" element={<ProtectedRoute><AdministradorDashboardPage /></ProtectedRoute>} />
        <Route path="/student_dashboard" element={<ProtectedRoute><StudentDashboard /></ProtectedRoute>} />
        <Route path="/docente_dashboard" element={<ProtectedRoute><DocenteDashboard /></ProtectedRoute>} />


        <Route element={<GroupAppointment />} path="/group_appointment" />
        <Route element={<SingleAppointment />} path="/single_appointment" />

        <Route element={<SchedulesPage />} path="/schedules" />
        <Route element={<AssignStudents />} path="/assign_student" />
        <Route element={<PruebaServer />} path="/test_server" />


        <Route element={<TestStudentForm />} path="/form_info_student" />
        

        <Route element={<InfPersonalDocente />} path="/form_info_personal_professor" />
        <Route element={<Forms />} path="/forms" />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
    
  );
}

export default App;