const date = (reviewDate) => {
  let datetime = new Date(reviewDate);
  let day = datetime.toLocaleDateString();
  let time = datetime.toLocaleTimeString();
  return day + " " + time;
}
export default date;