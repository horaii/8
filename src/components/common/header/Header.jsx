import styles from './Header.module.scss'
import clsx from 'clsx'
// className에 분자가 변수가 치환되고 있기 떄문에 여러개의 변수값을 클래스로 등록하기 편하고, 클래스연결을 삼항연산자로 조건처리도 가능 가능
console.log(styles)

export default function Header() {
  return (
    <header className={clsx(styles.header)}>
        <h1>LOGO</h1>

        <ul>
            <li>Department</li>
            <li>Gallery</li>
            <li>Youtube</li>
            <li>Members</li>
            <li>Conact</li>
        </ul>

    </header>
  )
}