import styles from "../Dashboard.module.css";
import { useEffect, useState, useContext } from "react";
import CalendarContext from "../../../contexts/CalendarContext";
import Month from "./Month";
import { Header } from "./Header";
import { displayMonth } from "./Utils";
import { SideBar } from "./SideBar";
import { EventPopUp } from "./EventPopUp";
import { Navigation } from "../../Navigation";
import { useWindowResize } from "../../../hooks/useWindowResize";

export const Calendar = () => {
  //  Manages currentMonth views
  //  Shows the event modal

  const {
    monthIdx,
    popModal,
    showModal,
    setShowModal,
  } = useContext(CalendarContext);
  const [month, setMonth] = useState(displayMonth());

  const {size} = useWindowResize();

  useEffect(() => {
    setMonth(displayMonth(monthIdx));
  }, [monthIdx]);

  useEffect(() => {
    return () => {
        setShowModal(false)
    }
    //eslint-disable-next-line
  }, [])

  return (
    <div className={styles.calendarWrapper}>
      <header className={styles.mainHeader}>
        <Header></Header>
        <Navigation></Navigation>
      </header>
      <main className={styles.mainWrapper} style={{ justifyContent: showModal? "inherit" : "space-evenly"}}>
        {showModal && (
          <>
            <div
              className="overlay"
              onClick={() => {
                setShowModal(!showModal);
              }}
            ></div>
            <SideBar></SideBar>
          </>
        )}
        <div className={styles.monthWrapper}>
          {size.width > 574 && (
            <SideBar></SideBar>
          )}
          <Month month={month}></Month>
        </div>
        {popModal && <EventPopUp></EventPopUp>}
      </main>
    </div>
  );
};
