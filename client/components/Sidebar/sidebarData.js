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
        url: '/courses/[courseId]/',
        icon: HomeIcon,
        component : "dashboard"
    },
    goToAsignments:{
        title: 'Assignments',
        url: '/courses/[courseId]/assignments',
        icon: AcademicCapIcon,
        component : "assignment"
    },
    goToTestQuizzes:{
        title: 'Test and Quizzes',
        url: '/courses/[courseId]/testAndQuizzes',
        icon:QuestionMarkCircleIcon,
        component : "testAndQuizzes"
    },
    goToGradeBook:{
        title: 'Gradebook',
        url: '/courses/[courseId]/gradebook',
        icon:BookOpenIcon,
        component : "gradebook"
    },
    goToResources:{
        title: 'Resources',
        url: '/courses/[courseId]/resources',
        icon: FolderOpenIcon,
        component : "resources"
    },
    goToAnnouncements:{
        title: 'Announcements',
        url: '/courses/[courseId]/announcements',
        icon:SpeakerphoneIcon,
        component : "announcements"
    },
    goToRoster:{
        title: 'Roster',
        url: '/courses/[courseId]/roster',
        icon:UserGroupIcon,
        component : "roster"
    },
}