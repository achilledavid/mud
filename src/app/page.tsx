import Header from "@/components/header/header";
import style from "./home.module.scss";
import { Fragment } from "react";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <main className={style.container}>
        <div className={style.hero}>
          <h1 className="text-slate-400">Harness the <em className="text-black">insights</em> of your competitive performance.</h1>
          <Button><Rocket className="w-4 h-4 mr-2" />Get Started</Button>
        </div>
      </main>
    </Fragment >
  )
}