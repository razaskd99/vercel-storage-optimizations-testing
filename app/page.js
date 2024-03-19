import Image from "next/image";
import styles from "./page.module.css";
import { Form } from "./components/Form";
import { MyImages } from "./components/MyImages";

export default function Home() {
  return (
    <main className={styles.main}>

      <h2>Let's elevate file storage to the next level by leveraging Vercel Blob, a cost-effective and efficient solution.</h2>
    
    <Form />

    <MyImages />

    <img src="https://ilsfslrfumckoeg0.public.blob.vercel-storage.com/output-onlinegiftools-ORF6LwkscF6pTleH9kD0Sn44MLn6nI.gif" alt="" />
    </main>
  );
}
