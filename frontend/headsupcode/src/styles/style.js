import { StyleSheet } from 'react-native';
import { colors } from './colors';
const { green, lightGreen, yellow, orange, red, white, black } = colors

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: black
  },
  cardContainer: {
    flex: 1,
    borderRadius: 50,
    borderWidth: 15,
    borderColor: white,
    backgroundColor: red,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flipText: {
    fontSize: 120,
    fontWeight: 'bold',
    color: white
  },
  titleText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: white
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: white,
  },
  image: {
    width: '100%',
  },
  scrollView: {
    flex: 1,
    width: '100%',
    margin: 15,
  },
  deckContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  deck: {
    width: '45%',
    margin: '2.5%',
    height: 300,
    elevation: 3,
    paddingLeft: 3,
    paddingRight: 3,
    shadowColor: black,
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 5,
  },
  questionContainer: {
    flex:1,
    width: '100%'
  },
  questionContent: {
    justifyContent: 'center',
  },
  padding: {
    padding: 10,
  },
  button: {
    backgroundColor: white
  },
  timerStyle: {
    fontSize: 50,
    color: 'white',
  },
  gameCardContainer : {
    flex: 1,
    borderRadius: 50,
    borderWidth: 15,
    borderColor: white,
    backgroundColor: red,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginLeft: 40,
    marginRight: 40
  },
  countdownText: {
    fontWeight: 'bold',
    color: white,
  },
  green: {
    backgroundColor: green,
    flex: 1,
    borderRadius: 50,
    borderWidth: 15,
    borderColor: '#FFF',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 40,
    marginRight: 40
  },
  orange: {
    backgroundColor: orange,
    flex: 1,
    borderRadius: 50,
    borderWidth: 15,
    borderColor: '#FFF',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 40,
    marginRight: 40
  },
  correctText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: white,
  },
  passText: {
    fontSize: 30,
    color: white,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: yellow,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: white,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  deckImage: {
    width: 107,
    height: 165,
    padding: 10
  },
})