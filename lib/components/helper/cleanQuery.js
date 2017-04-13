const cleanQuery = (query) => {
  let tempLocation = {location: query.RESULTS[0].name,
                      apiLocation: query.RESULTS[0].l}

  return tempLocation
}

export default cleanQuery
