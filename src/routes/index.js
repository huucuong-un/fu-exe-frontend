import LayoutWithFooter from '~/components/Layouts/LayoutWithFooter';
import Checkout from '~/pages/Checkout';
import Dashboard from '~/pages/Dashboard';
import Following from '~/pages/Following';
import ForgotPassword from '~/pages/ForgotPassword';
import Home from '~/pages/Home';
import LandingPage from '~/pages/LandingPage';
import SignInSide from '~/pages/SignInSide';
import SignUp from '~/pages/SignUp';
// import DefaultLayout from '~/components/Layouts/DefaultLayout';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/page', component: LandingPage, layout: LayoutWithFooter },
    { path: '/following', component: Following },
    { path: '/sign-in', component: SignInSide, layout: null },
    { path: '/sign-up', component: SignUp, layout: null },
    { path: '/forgot-password', component: ForgotPassword, layout: null },
    { path: '/dashboard', component: Dashboard },
    { path: '/checkout', component: Checkout, layout: null },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
