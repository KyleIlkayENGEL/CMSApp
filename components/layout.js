import Alert from "../components/alert";
import Footer from "../components/footer";
import Meta from "../components/meta";
import styles from "../styles/layout.module.css";
import classnames from "classnames";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className={classnames(styles.layout, "min-h-screen")}>
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
