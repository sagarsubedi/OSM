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
        icon:QuestionMarkCircleIcon,
        component : "testAndQuizzes"
    },
    goToGradeBook:{
        title: 'Gradebook',
        url: '#',
        icon:BookOpenIcon,
        component : "gradebook"
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