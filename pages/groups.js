import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "@/styles/Groups.module.css";
import HeadArea from "@/components/HeadArea";
import GroupCard from "@/components/GroupCard";
import Banner from "@/components/Banner";
import { groups } from "@/data/groups";
import { useState } from "react";
import Button from "@/components/Button";
import CreateOverlay from "@/components/CreateOverlay";

export default function Groups() {  
  const [groupData, setGroupData] = useState(groups);
  const [showCreate, setShowCreate] = useState(false);
  const [groupToRemove, setGroupToRemove] = useState();

  const newGroup = (data) => {
    let a = [...groupData];
    a.unshift(data);
    setGroupData(a);
  }

  const returnGroup = (data) => {
    setGroupToRemove(data);
  }

  const removeGroup = () => {
    let a = [...groupData];
    setGroupData(a.filter(e => e !== groupToRemove));
  }

  return(
      <div className="frame">
        <HeadArea/>
        <main className={styles.main}>
          <Header name="Your Groups"/>
          <Banner 
            title3="Looking for groups to join?" 
            title1="Explore Nearby" 
            buttonSpace="216px"
            buttonText="Explore"
            path="/"
          />
          <h2 style={{margin: '0 0 16px'}}>Joined</h2>
          {
              groupData.map((group) => {
                  return <GroupCard group={group} todo={removeGroup} returnGroup={returnGroup}/>
              })
          }
          {
              showCreate &&
              <CreateOverlay
                onclick={() => setShowCreate(false)}
                newGroup={newGroup}
              />
            }
          {/* This is a filler section to make the bottom of page not cut off */}
          <section className={styles.bottomFiller} style={{margin: '180px 0'}}>
            <p> </p>
          </section>
        </main>
        <div className={styles.createButton}>
            <Button 
              text="+ Create Group" 
              size="chonky2" 
              width="398px"
              onclick={() => setShowCreate(true)}
            />
        </div>
        <Footer bdRadius={0}/>
      </div>
  )
}