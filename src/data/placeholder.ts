
import { AiFillHome } from 'react-icons/ai';
import { FaUserFriends } from 'react-icons/fa';
import { RiUserShared2Fill } from 'react-icons/ri';

interface navItemModel {
    id: number;

    navText: string,
    navRoute: string
}

export const navItems: navItemModel[] = [
    {
        id: 1,
        navText: 'Home',
        navRoute: '/'
    },
    {
        id: 2,
        navText: 'All Friends',
        navRoute: '/allFriends'
    },
    {
        id: 3,
        navText: 'Suggestions',
        navRoute: '/suggestions'
    },

]