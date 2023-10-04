'use client'
import ChatIcon from "../Logo/chatIcon";
import EventIcon from "../Logo/eventIcon";
import FinanceIcon from "../Logo/financeIcon";
import FoodIcon from "../Logo/foodIcon";
import HomeIcon from "../Logo/homeIcon";
import Lastest_actIcon from "../Logo/lastest_actIcon";
import StudentIcon from "../Logo/studentIcon";
import TeacherIcon from "../Logo/teacherIcon";
import UserIcon from "../Logo/userIcon";
import styles from "../../styles/menu.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuList = () => {

    interface iMenu {
        logo: React.ReactNode,
        name: string,
        link: string,
    }

    const menuList: iMenu[] = [
        { logo: <HomeIcon />, name: 'Dashboard', link: '/' },
        { logo: <StudentIcon />, name: 'Students', link: '/students' },
        { logo: <TeacherIcon />, name: 'Teachers', link: '/teachers' },
        { logo: <EventIcon />, name: 'Event', link: '/event' },
        { logo: <FinanceIcon />, name: 'Finance', link: '/finance' },
        { logo: <FoodIcon />, name: 'Food', link: '/food' },
        { logo: <UserIcon />, name: 'User', link: '/user' },
        { logo: <ChatIcon />, name: 'Chat', link: '/chat' },
        { logo: <Lastest_actIcon />, name: 'Lastest Activity', link: '/lastest-activity' },
    ]

    const pathName = usePathname();

    return (
        <div className={styles.menuList}>
            {menuList.map((item, index) => (
                <div key={`menu-item-${index}`} className={styles.menuList__item}>
                    <Link href={item.link} scroll={false} className={styles.menuList__item__link  + `${pathName === item.link ? " "+ styles["menuList__item__link--active"]: ""}` }>
                        <div className={styles.menuList__item__logo}>
                            {item.logo}
                        </div>
                        <div className={styles.menuList__item__name}>
                            {item.name}
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}



export default MenuList;