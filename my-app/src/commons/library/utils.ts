import { DateTime } from "luxon";
export const getDate = (date: Date) => {
  const newDate = new Date(date);
  const yyyy = newDate.getFullYear();
  const m1 = newDate.getMonth() + 1;
  const mm = m1.toString().padStart(2, "0");
  const dd = newDate.getDate().toString().padStart(2, "0");
  return `${yyyy}.${mm}.${dd}`;
};
export const getDotDate = (date: string) => {
  if (!date) return ``;
  const temp = date.split(" ").join("").split(".");
  if (
    temp.some((el: string) => typeof el !== "string" || el === undefined) ||
    temp.length < 2
  )
    return;
  return `${temp[0]}.${temp[1].padStart(2, "0")}.${temp[2].padStart(2, "0")}`;
};
export const getHyphenDate = (date: string) => {
  if (!date) return ``;
  const temp = date.split(" ").join("").split(".");
  return `${temp[0]}-${temp[1].padStart(2, "0")}-${temp[2].padStart(2, "0")}`;
};
export const getPhoneNumber = (phone: string) => {
  if (!phone) return ``;
  return `${phone?.slice(0, 3)}-${phone?.slice(3, 7)}-${phone?.slice(7, 11)}`;
};
// 한달전 날짜
export const getStartDate = () => {
  const today = new Date();
  today.setDate(today.getDate() - 30);
  return getDotDate(today.toLocaleString());
};
// `period`일 지난 날짜
export const getEndDate = (date: Date, period: number) => {
  if (!date) return;
  if (!period) return;
  const prev = new Date(date);
  prev.setDate(prev.getDate() + period);
  return getDotDate(prev.toLocaleString())
    .split(".")
    .map((el) => el.replace(" ", "").padStart(2, "0"))
    .join(".");
};
export const getDotMoney = (n: number | string) => {
  return Number(n).toLocaleString("ko-KR");
};
export const getDataDateTime = (date: string) => {
  if (!date) return "";
  const realDate = DateTime.fromISO(date)
    .toLocaleString()
    .split(".")
    .slice(0, 3)
    .map((el) => el.replace(" ", "0"))
    .join(".");
  const realTime = DateTime.fromISO(date).toLocaleString(DateTime.TIME_SIMPLE);
  return realDate + " " + realTime;
};
export const getDataDate = (date: string) => {
  if (!date) return "";
  const realDate = DateTime.fromISO(date)
    .toLocaleString()
    .split(".")
    .slice(0, 3)
    .map((el) => el.replace(" ", "").padStart(2, "0"))
    .join(".");
  return realDate;
};

// 몇 분전 나오는 함수
export const getTimeForTodayDate = (date: string) => {
  const today = new Date();
  const timeValue = DateTime.fromISO(date).ts;

  const betweenTime = Math.floor((today.getTime() - timeValue) / 1000 / 60);
  if (betweenTime < 1) return "방금 전";
  if (betweenTime < 60) {
    return `${betweenTime}분 전`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
    return `${betweenTimeHour}시간 전`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay < 365) {
    return `${betweenTimeDay}일 전`;
  }

  return `${Math.floor(betweenTimeDay / 365)}년 전`;
};

export const ProfileNoImg = (e: any) => {
  e.target.src = "/userLayout/noLoginProfile.png";
};

// 두 날짜 간의 일수 차이
export const getDateDiff = (startDate: Date, endDate: Date) => {
  return Math.ceil(
    (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)
  );
};

export const autoHypenPhone = (number: string) => {
  if (!number) return "";
  return (
    number
      .replace(/[^0-9]/g, "")
      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
      // eslint-disable-next-line no-useless-escape
      .replace(/(\-{1,2})$/g, "")
  );
};
