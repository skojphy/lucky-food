import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>오늘의 럭키푸드</h1>
      <h2>테스트</h2>
      <a href="./result">결과 보러 가기</a>
    </main>
  );
}
