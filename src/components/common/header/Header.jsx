import styles from './Header.module.scss'
import clsx from 'clsx'
import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom'
// className에 분자가 변수가 치환되고 있기 떄문에 여러개의 변수값을 클래스로 등록하기 편하고, 클래스연결을 삼항연산자로 조건처리도 가능 가능

export default function Header() {
  return (
    <header className={clsx(styles.header)}>
        <h1><Link to='/'>LOGO</Link></h1>

        <ul>
            <li>
                <NavLink to='/department'>
                    Department
                </NavLink>
            </li>
            <li>
                <NavLink to='/Gallery'>
                    Gallery
                </NavLink>
            </li>
            <li>
                <NavLink to='/Youtube'>
                    Youtube
                </NavLink>
            </li>
            <li>
                <NavLink to='/Members'>
                    Members
                </NavLink>
            </li>
            <li>
                <NavLink to='/Conact'>
                    Conact
                </NavLink>
            </li>
        </ul>

    </header>
  )
}