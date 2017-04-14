const cleanHourly = (input) => {
  let unclean = input.hourly_forecast
  let cleaned = [];
  
  unclean.forEach((val, index) => {
    if (index <= 7) {
      cleaned[index] = {condition: val.condition,
                        temp: val.temp.english,
                        icon: val.icon,
                        icon_url: val.icon_url}
    }
  })
  return cleaned
}

export default cleanHourly
