// export tool names and URLs
import {
    AcademicCapIcon,
    HomeIcon,
    BookOpenIcon,
    UserGroupIcon,
    SpeakerphoneIcon,
    FolderOpenIcon,
    QuestionMarkCircleIcon

} from "@heroicons/react/outline";


export default{
    goToHome:{
        title: 'Home',
        url: '/dashboard',
        icon: HomeIcon,
        component : "dashboard"
    },
    goToAsignments:{
        title: 'Assignments',
        url: '/assignments',
        icon: AcademicCapIcon,
        component : "assignment"
    },
    goToTestQuizzes:{
        title: 'Test and Quizzes',
        url: '/testAndQuizzes',
        icon:QuestionMarkCircleIcon,
        component : "testAndQuizzes"
    },
    goToGradeBook:{
        title: 'Gradebook',
        url: '/gradebook',
        icon:BookOpenIcon,
        component : "gradebook"
    },
    goToResources:{
        title: 'Resources',
        url: '/resources',
        icon: FolderOpenIcon,
        component : "resources"
    },
    goToAnnouncements:{
        title: 'Announcements',
        url: '/announcements',
        icon:SpeakerphoneIcon,
        component : "announcements"
    },
    goToRoster:{
        title: 'Roster',
        url: '/roster',
        icon:UserGroupIcon,
        component : "roster"
    },
}