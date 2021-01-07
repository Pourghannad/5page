import style from "./root-style.module.scss";
import "./reset.scss";
import "./fonts.scss";
import InitApp from "../init";
export default function MyApp({ Component, pageProps }) {
  if (process.browser) {
    InitApp();
  }
  return (
    <main className={style["main-container"]}>
    <section className={style["wrapper"]}>
        <Component {...pageProps} />
        <div className={style["ads-container"]}>
        ADS
        </div>
    </section>
    </main>
  );
}