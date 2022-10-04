"use strict";

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

const activeTime = "time-period-active";

daily.addEventListener("click", function () {
  weekly.classList.remove(activeTime);
  monthly.classList.remove(activeTime);
  daily.classList.add(activeTime);
});

weekly.addEventListener("click", function () {
  daily.classList.remove(activeTime);
  monthly.classList.remove(activeTime);
  weekly.classList.add(activeTime);

  contentDay.forEach((c) => c.classList.add("hidden"));
  contentLastDay.forEach((c) => c.classList.add("hidden"));
  contentMonth.forEach((c) => c.classList.add("hidden"));
  contentLastMonth.forEach((c) => c.classList.add("hidden"));

  contentWeek.forEach((c) => c.classList.remove("hidden"));
  contentLastWeek.forEach((c) => c.classList.remove("hidden"));
});

monthly.addEventListener("click", function () {
  weekly.classList.remove(activeTime);
  daily.classList.remove(activeTime);
  monthly.classList.add(activeTime);
});
