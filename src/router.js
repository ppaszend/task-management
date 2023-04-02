import RecentUpdatedView from "@/views/RecentUpdatedView.vue";
import BoardView from "@/views/BoardView.vue";
import TaskDetailsView from "@/views/TaskDetailsView.vue";
import CreateNewTaskView from "@/views/CreateNewTaskView.vue";
import LoginView from "@/views/LoginView.vue";
import PersonalInformationsView from "@/views/Account/PersonalInformationsView.vue";
import AccountLayout from "@/views/Account/AccountLayout.vue";
import SecurityView from "@/views/Account/SecurityView.vue";
import NotificationsView from "@/views/Account/NotificationsView.vue";
import PageNotFoundView from "@/views/PageNotFoundView.vue";

const routes = [
    {
        path: '/',
        redirect: (to) => ({ path: '/recent-updated', query: { q: to.params.searchText } })
    },
    {
        path: '/login',
        name: 'loginView',
        component: LoginView
    },
    {
        path: '/recent-updated',
        name: 'recentUpdatedView',
        component: RecentUpdatedView
    },
    {
        path: '/board',
        name: 'boardView',
        component: BoardView
    },
    {
        path: '/task/new',
        name: 'createNewTaskView',
        component: CreateNewTaskView
    },
    {
        path: '/task/:id',
        name: 'taskDetailsView',
        component: TaskDetailsView
    },
    {
        path: '/',
        redirect: (to) => ({ path: '/account/personal-details', query: { q: to.params.searchText } })
    },
    {
        path: '/account',
        component: AccountLayout,
        children: [
            {
                path: '/account/personal-details',
                name: 'accountPersonalDetailsView',
                component: PersonalInformationsView
            },
            {
                path: '/account/security',
                name: 'accountSecurityView',
                component: SecurityView
            },
            {
                path: '/account/notifications',
                name: 'accountNotificationsView',
                component: NotificationsView
            },
        ]
    },
    {
        path: '/:catchAll(.*)',
        component: PageNotFoundView
    }
];

export default routes;