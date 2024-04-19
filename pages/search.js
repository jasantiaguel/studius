import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "@/styles/Search.module.css"
import HeadArea from "@/components/HeadArea";

export default function Search() {
    return(
        <div className="frame">
            <HeadArea/>
            <main className={styles.main}>
              <Header name="Search"/>
              <h1>StudiUs</h1>
            </main>
            <Footer/>
        </div>
    )
}