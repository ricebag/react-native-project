export type Film = {
  Title: string,
  Year: string,
  imdbID: string,
  Type: string,
  Poster: string
}
type Films = Film[]

export const addFilmsList = (films: Films) => ({
  type: 'ADD_FILMS_LIST',
  payload: films
})

export const updateSelectedFilm = (film: Film) => ({
  type: 'UPDATE_SELECTED_FILM',
  payload: film
})

export const removeFilmFomList = (id: string) => ({
  type: 'REMOVE_FILM_FROM_LIST',
  payload: id
})

export const fetchFilmsList = (dispatch: Function, getState: Function) => async () => {
  try {
    console.log('here')
    // fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=c0ce12d8`)
    // const resp = await fetch(`http://www.omdbapi.com/?s=batman&apikey=c0ce12d8`)

    // dispatch(addFilmsList(await resp.json()))

    const mockData = [
      {
        "Title": "Batman Begins",
        "Year": "2005",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
      },
      {
        "Title": "Batman v Superman: Dawn of Justice",
        "Year": "2016",
        "imdbID": "tt2975590",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
      },
      {
        "Title": "The Batman",
        "Year": "2022",
        "imdbID": "tt1877830",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg"
      },
      {
        "Title": "Batman",
        "Year": "1989",
        "imdbID": "tt0096895",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZTM2NmZlOTEtYTI5NS00N2JjLWJkNzItMmZkNDBlYmQzNDA2XkEyXkFqcGdeQXVyMTAxODYyODI@._V1_SX300.jpg"
      },
      {
        "Title": "Batman Returns",
        "Year": "1992",
        "imdbID": "tt0103776",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg"
      },
      {
        "Title": "Batman & Robin",
        "Year": "1997",
        "imdbID": "tt0118688",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg"
      },
      {
        "Title": "Batman Forever",
        "Year": "1995",
        "imdbID": "tt0112462",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
      },
      {
        "Title": "The Lego Batman Movie",
        "Year": "2017",
        "imdbID": "tt4116284",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg"
      },
      {
        "Title": "Batman: The Animated Series",
        "Year": "1992–1995",
        "imdbID": "tt0103359",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg"
      },
      {
        "Title": "Batman: Under the Red Hood",
        "Year": "2010",
        "imdbID": "tt1569923",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNmY4ZDZjY2UtOWFiYy00MjhjLThmMjctOTQ2NjYxZGRjYmNlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
      }
    ]

    dispatch(addFilmsList(mockData))


    console.log('here 2')
    const film = Math.floor(Math.random() * mockData.length);
    const selectedFilm = mockData[film]
    // const response = await fetch(`http://www.omdbapi.com/?i=${selectedFilm.imdbID}&apikey=c0ce12d8`).then(resp => resp.json)

    const mockFilm = {
      "Title": "Batman: The Animated Series",
      "Year": "1992–1995",
      "Rated": "TV-PG",
      "Released": "05 Sep 1992",
      "Runtime": "23 min",
      "Genre": "Animation, Action, Adventure",
      "Director": "N/A",
      "Writer": "Bob Kane, Eric Radomski, Bruce Timm",
      "Actors": "Kevin Conroy, Loren Lester, Efrem Zimbalist Jr.",
      "Plot": "The Dark Knight battles crime in Gotham City with occasional help from Robin and Batgirl.",
      "Language": "English",
      "Country": "United States",
      "Awards": "Won 1 Primetime Emmy. 5 wins & 19 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg",
      "Ratings": [
        {
          "Source": "Internet Movie Database",
          "Value": "9.0/10"
        }
      ],
      "Metascore": "N/A",
      "imdbRating": "9.0",
      "imdbVotes": "99,833",
      "imdbID": "tt0103359",
      "Type": "series",
      "totalSeasons": "4",
      "Response": "True"
    }
    dispatch(updateSelectedFilm(mockFilm))

  } catch (error) {
    console.error(error)
  }
}