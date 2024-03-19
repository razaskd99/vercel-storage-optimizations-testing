import Image from "next/image";
import styles from "./page.module.css";
import { Form } from "./components/form";

export default function Home() {
  return (
    <main className={styles.main}>

      <h2>Let's elevate file storage to the next level by leveraging Vercel Blob, a cost-effective and efficient solution.</h2>
    
    <Form />
    </main>
  );
}
