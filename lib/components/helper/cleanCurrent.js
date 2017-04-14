const cleanCurrent = (input) => {
  let unclean = Object.assign({}, input.current_observation);

  let cleaned = {temp: unclean.temperature_string,
                 weather: unclean.weather,
                 icon: unclean.icon,
                 icon_url: unclean.icon_url,
                 fulllocation: unclean.display_location.full}

  return cleaned
}

export default cleanCurrent
