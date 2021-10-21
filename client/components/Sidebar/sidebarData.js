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
        url: '/courses/1/',
        icon: HomeIcon,
        component : "dashboard"
    },
    goToAsignments:{
        title: 'Assignments',
        url: '/courses/1/assignments',
        icon: AcademicCapIcon,
        component : "assignment"
    },
    goToTestQuizzes:{
        title: 'Test and Quizzes',
        url: '/courses/1/testAndQuizzes',
        icon:QuestionMarkCircleIcon,
        component : "testAndQuizzes"
    },
    goToGradeBook:{
        title: 'Gradebook',
        url: '/courses/1/gradebook',
        icon:BookOpenIcon,
        component : "gradebook"
    },
    goToResources:{
        title: 'Resources',
        url: '/courses/1/resources',
        icon: FolderOpenIcon,
        component : "resources"
    },
    goToAnnouncements:{
        title: 'Announcements',
        url: '/courses/1/announcements',
        icon:SpeakerphoneIcon,
        component : "announcements"
    },
    goToRoster:{
        title: 'Roster',
        url: '/courses/1/roster',
        icon:UserGroupIcon,
        component : "roster"
    },
}