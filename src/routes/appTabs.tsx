import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import List from "../pages/list";
import CustomTabBar from "../components/CustomTabBar";
import { AuthProviderList } from "../context/authContext_list";
import UsersList from "../pages/user";
import AgendaScreen from "../pages/schedule";
import PatientRegister from "../pages/patient";
import NewAppointmentScreen from "../pages/newAppointment";
import TherapistCalendarScreen from "../pages/TherapistCalendarScreen";
import SessionsListScreen from "../pages/sessionsListScreen";

const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
  return (
    <AuthProviderList>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBar={(props) => <CustomTabBar {...props} />}
      >
        <Tab.Screen name="List" component={List} />
        <Tab.Screen name="UsersList" component={UsersList} />
        <Tab.Screen name="Agenda" component={AgendaScreen} />
        <Tab.Screen
          name="TherapistCalendar"
          component={TherapistCalendarScreen}
        />
        <Tab.Screen name="SessionsList" component={SessionsListScreen} />
        <Tab.Screen name="PatientRegister" component={PatientRegister} />
        <Tab.Screen name="NewAppointment" component={NewAppointmentScreen} />
      </Tab.Navigator>
    </AuthProviderList>
  );
}
