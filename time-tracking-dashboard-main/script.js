"use strict";

// DATA

const daily = document.querySelector(".daily");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".monthly");
const timePeriod = document.querySelector(".card--detail--time-period");
const contentDay = document.querySelectorAll(".card--content--day--duration");
const contentLastDay = document.querySelectorAll(
  ".card--content--lastday--duration"
);
const contentWeek = document.querySelectorAll(".card--content--week--duration");
const contentLastWeek = document.querySelectorAll(
  ".card--content--lastweek--duration"
);
const contentMonth = document.querySelectorAll(
  ".card--content--month--duration"
);
const contentLastMonth = document.querySelectorAll(
  ".card--content--lastmonth--duration"
);

// Variables

const activeTime = "time-period-active";

// FUNCTIONS

const init = function () {
  contentDay.forEach((c) => c.classList.add("hidden"));
  contentLastDay.forEach((c) => c.classList.add("hidden"));
  contentWeek.forEach((c) => c.classList.add("hidden"));
  contentLastWeek.forEach((c) => c.classList.add("hidden"));
  contentMonth.forEach((c) => c.classList.add("hidden"));
  contentLastMonth.forEach((c) => c.classList.add("hidden"));
};

const initDaily = function () {
  contentDay.forEach((c) => c.classList.remove("hidden"));
  contentLastDay.forEach((c) => c.classList.remove("hidden"));
};

const initActiveTime = function () {
  daily.classList.remove(activeTime);
  weekly.classList.remove(activeTime);
  monthly.classList.remove(activeTime);
};

const activateDailyActiveTime = function () {
  daily.classList.add(activeTime);
};

// EVENTS

daily.addEventListener("click", function () {
  initActiveTime();
  daily.classList.add(activeTime);

  init();

  contentDay.forEach((c) => c.classList.remove("hidden"));
  contentLastDay.forEach((c) => c.classList.remove("hidden"));
});

weekly.addEventListener("click", function () {
  initActiveTime();
  weekly.classList.add(activeTime);

  init();

  contentWeek.forEach((c) => c.classList.remove("hidden"));
  contentLastWeek.forEach((c) => c.classList.remove("hidden"));
});

monthly.addEventListener("click", function () {
  initActiveTime();
  monthly.classList.add(activeTime);

  init();

  contentMonth.forEach((c) => c.classList.remove("hidden"));
  contentLastMonth.forEach((c) => c.classList.remove("hidden"));
});

init();
initDaily();
initActiveTime();
activateDailyActiveTime();
