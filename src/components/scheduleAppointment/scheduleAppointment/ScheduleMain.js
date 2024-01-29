import React from "react";
import style from "./ScheduleMain.module.css";
import ScheduleVideo from "./ScheduleVideo";
import GiveHerGift from "./GiveHerGift";
import GetEasier from "./GetEasier";
import OurBestsellers from "./OurBestsellers";
import OurCustomers from "./OurCustomers";
import Questions from "./Questions";

const ScheduleMain = () => {
  return (
    <>
      <ScheduleVideo></ScheduleVideo>
      <GiveHerGift></GiveHerGift>
      <GetEasier></GetEasier>
      <OurBestsellers></OurBestsellers>
    <OurCustomers></OurCustomers>
    <Questions/>
    </>
  );
};
export default ScheduleMain