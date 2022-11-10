import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [englishInput, setEnglishInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ english: englishInput }),
    });
    const data = await response.json();
    setResult(data.result);
    setEnglishInput("");
  }

  return (
    <div>
      <Head>
        <title>Discussion Post Reply Generator</title>
        <link rel="icon" href="/icon.png" />
      </Head>

      <main className={styles.main}>
        <img src="/icon.png" className={styles.icon} />
        <h3>Discussion Post Reply Generator</h3>
        <p>
          In an online class, discussion posts are the main way students and
          professors interact with the course's ideas and lessons. The best
          discussion posts demonstrate an understanding of the course material
          and present a cohesive argument with evidence to back it up. However,
          it is oftentimes redundant and tedious to complete, so I decided to
          automate the process.
        </p>
        <form onSubmit={onSubmit}>
          <textarea
            type="text"
            name="english"
            placeholder="Enter discussion post (use multiple submissions to reach word limit if necessary)."
            value={englishInput}
            onChange={(e) => setEnglishInput(e.target.value)}
          />
          <input type="submit" value="Generate Discussion Reply" />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}
