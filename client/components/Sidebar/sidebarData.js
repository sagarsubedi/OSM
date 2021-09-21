// export tool names and URLs
import {
    AcademicCapIcon,
    HomeIcon,
    BookOpenIcon,
    UserGroupIcon,
    SpeakerphoneIcon,
    FolderOpenIcon,
    UserIcon

} from "@heroicons/react/outline";

export default{
    userIcon:{
        title: 'Sagar Subedi',
        url: '#',
        icon: UserIcon,
        component : "dashboard"
    },
    goToHome:{
        title: 'Home',
        url: '#',
        icon: HomeIcon,
        component : "dashboard"
    },
    goToAsignments:{
        title: 'Assignments',
        url: '#',
        icon: AcademicCapIcon,
        component : "assignment"
    },
    goToTestQuizzes:{
        title: 'Test and Quizzes',
        url: '#',
        icon:BookOpenIcon,
        component : "testAndQuizzes"
    },
    goToResources:{
        title: 'Resources',
        url: '#',
        icon: FolderOpenIcon,
        component : "resources"
    },
    goToAnnouncements:{
        title: 'Announcements',
        url: '#',
        icon:SpeakerphoneIcon,
        component : "announcements"
    },
    goToRoster:{
        title: 'Roster',
        url: '#',
        icon:UserGroupIcon,
        component : "roster"
    },
}