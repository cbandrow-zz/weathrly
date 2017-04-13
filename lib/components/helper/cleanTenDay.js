const cleanTenDay = (input) => {
  let unclean = input.forecast.simpleforecast.forecastday
  let moreUnclean = input.forecast.txt_forecast.forecastday
  let cleaned = [];

  unclean.forEach((val, index) => {
    cleaned[index] = {high: val.high.fahrenheit,
                      low: val.low.fahrenheit,
                      weekday: val.date.weekday,
                      date: val.date.day,
                      month: val.date.monthname,
                      summary: moreUnclean[index].fcttext,
                      icon_url: moreUnclean[index].icon_url,
                      icon: moreUnclean[index].icon}
  })

  return cleaned
}

export default cleanTenDay
