let dt = 1732550838;

const curDate = new Date(dt * 1000);
console.log(curDate);

const option = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
};

const formatter = Intl.DateTimeFormat("en-US", option);
console.log(formatter);
console.log(formatter.format(curDate));

