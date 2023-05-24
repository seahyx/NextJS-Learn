import { NextPage } from "next";
import Head from "next/head";
import { Router, useRouter } from "next/router";
import React, { useState } from "react";

const Create: NextPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setError("");
    setMessage("");
    if (title && content) {
      // Send a request to the server
      try {
        const body = { title, content, published: false };
        await fetch("/api/post", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        await router.push("/drafts");
      } catch (error) {
        console.error(error);
      }
    } else {
      setError("All fields are required");
    }
  };

  return (
    <>
      <Head>
        <title>Create Post</title>
        <meta name="description" content="Create a new post." />
      </Head>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-orange-700 to-slate-700"></div>
    </>
  );
};

export default Create;
