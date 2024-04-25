import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Switch from "@/components/Switch";
import GroupCard from "@/components/GroupCard";
import Banner from "@/components/Banner";
import styles from "@/styles/Home.module.css";
import Tag from "@/components/Tag";

import { groups } from "@/data/groups.js";
import HeadArea from "@/components/HeadArea";

export default function Home() {
  const data = groups;
  
  return (
    <div className="frame">
      <HeadArea/>
      <main className={styles.main}>
        <Header name="Home"/>
        <section className={styles.homeWelcomeSection}>
          <div style={{
            backgroundColor: "gray", 
            width: "40px", 
            height: "40px", 
            borderRadius: "40px",
            marginRight: "16px"
            }}>
          </div>
          <div className={styles.welcomeMessage}>
            <h1 style={{margin: "0"}}>Good Morning Alira!</h1>
            <p style={{fontSize: "var(--body-copy)"}}>Keep at it! You're doing amazing.</p>
          </div>
        </section>
        <Banner 
          title3="Discover Your Perfect Study Method" 
          title1="Take Our Short Quiz" 
          buttonSpace="166px"
          buttonText="StudiUs Quiz"
        />
        <section className={styles.filterSection}>
          <Tag text='Sort' size='filter'/>
          <Tag text='Music' size='filter'/>
          <Tag text='Anime' size='filter'/>
          <Tag text='Food' size='filter'/>
        </section>
        <h2>Today</h2>
        {
          data && data.map((group) => {
            return <GroupCard group={group}/>
          })
        }
        <h2>Upcoming</h2>
      </main>
      <Footer/>
    </div>
  );
}
