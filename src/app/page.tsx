import Header from "@/components/ui/header/header";
import style from "./home.module.scss";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <main className={style.container}>
        <h1>Hello world!</h1>
      </main>
    </Fragment >
  )
}