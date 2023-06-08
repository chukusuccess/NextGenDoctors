import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaMoon, FaSun } from "react-icons/fa";
import { accountClient } from "@/appWrite-client/settings.config";
import Splash from "@/components/Splash-Screen/Splash";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage("");

    const promise = accountClient.createEmailSession(email, password, true);

    promise.then(
      function (response) {
        console.log(response);
        router.push({
          pathname: "/home",
        });
      },
      function (error) {
        console.log(error);
        setErrorMessage(error.message);
      }
    );
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeToggler = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          title="Toggle theme"
          onClick={(e) => {
            e.preventDefault();
            setTheme("light");
          }}
          className="items-center justify-center hidden w-10 h-10 text-2xl text-black rounded-full xl:flex"
        >
          <FaSun />
        </button>
      );
    } else {
      return (
        <button
          title="Toggle theme"
          onClick={(e) => {
            e.preventDefault();
            setTheme("dark");
          }}
          className="items-center justify-center hidden w-10 h-10 text-2xl text-black rounded-full xl:flex"
        >
          <FaMoon />
        </button>
      );
    }
  };

  return (
    <>
      <Head>
        <title>Login | NEXTGEN Patients</title>
        <meta
          name="description"
          content="Get Consultation from the comfort of your own home"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Splash />
        <div className="flex min-h-[100dvh] w-screen relative backdrop-blur-sm bg-[url('/bg.png')] bg-cover">
          <form
            className="absolute top-0 w-full h-full overflow-scroll basis-full backdrop-blur-sm xl:static"
            onSubmit={(e) => handleLogin(e)}
          >
            <div className="flex items-center justify-center w-full min-h-[100dvh]">
              <section className="border border-black bg-white w-[90%] max-w-[450px] flex flex-col gap-5 p-5 pb-6 rounded-xl text-black my-10">
                <div className="flex items-center justify-between">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      router.back();
                    }}
                    className="flex items-center text-lg gap-2"
                  >
                    <FaArrowLeft /> back
                  </button>

                  {renderThemeToggler()}
                </div>

                <h2 className="text-4xl text-center xs:text-2xl">
                  Welcome back!
                </h2>

                <label>
                  Email
                  <input
                    type="email"
                    required
                    placeholder="john.doe@example.com"
                    value={email}
                    className="w-full h-12 pl-3 mt-2 text-base text-black bg-transparent border border-black rounded"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </label>

                <label>
                  Password
                  <input
                    type="password"
                    required
                    placeholder="**********"
                    value={password}
                    className="w-full h-12 pl-3 mt-2 text-base text-black bg-transparent border border-black rounded"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </label>

                {errorMessage && (
                  <p className="text-red-600 text-center">{errorMessage}</p>
                )}

                <p className="text-center xs:text-xs">
                  Don&apos;t have an account?&nbsp;
                  <Link className="font-bold" href={"/sign-up"}>
                    Sign-up
                  </Link>
                </p>

                <button
                  className="py-3 text-white bg-black border rounded-full duration-500 hover:bg-transparent hover:text-black hover:border-black"
                  type="submit"
                >
                  Continue
                </button>
              </section>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Login;
