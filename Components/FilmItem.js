import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { getImageFromApi } from '../API/TMDBApi'


class FilmItem extends React.Component {
    render() {
        const film = this.props.film
        return (
          <View style={styles.main_container}>
            <Image
              style={styles.image}
              source={{uri: getImageFromApi(film.poster_path)}}
            />
            <View style={styles.content_container}>
              <View style={styles.header_container}>
                <Text style={styles.title_text}>{film.title}</Text>
                <Text style={styles.vote_text}>{film.vote_average}</Text>
              </View>
              <View style={styles.description_container}>
                <Text style={styles.description_text} numberOfLines={6}>{film.overview}</Text>
              </View>
              <View style={styles.date_container}>
                <Text style={styles.date_text}>Sorti le {film.release_date}</Text>
              </View>
            </View>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
      height: 190
    },
    title_text: {
  
    },
    image: {
      width: 120,
      height: 180,
      margin: 5,
      backgroundColor: 'gray'
  },
  })
  
  export default FilmItem