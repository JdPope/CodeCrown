import { StyleSheet } from 'react-native';
import { colors } from './colors';
// const { green, lightGreen, yellow, orange, red, white, black } = colors
const { green, red, blue, white } = colors

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: blue[0]
  },
  cardContainer: {
    flex: 1,
    borderRadius: 50,
    borderWidth: 15,
    borderColor: blue[8],
    backgroundColor: blue[8],
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flipText: {
    fontSize: 120,
    fontWeight: 'bold',
    color: blue[1]
  },
  titleText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: blue[1]
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: blue[1],
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
    shadowColor: blue[0],
    shadowOffset: {width: 3, height: 3},
    shadowRadius: 1,
    shadowOpacity: 0.15,
  },
  questionContainer: {
    flex:1,
    width: '100%',
    padding: 20,
  },
  questionContent: {
    justifyContent: 'center',
  },
  padding: {
    padding: 10,
  },
  button: {
    backgroundColor: blue[1]
  },
  timerStyle: {
    fontSize: 50,
    color: blue[1],
  },
  gameCardContainer : {
    flex: 1,
    borderRadius: 50,
    borderWidth: 15,
    borderColor: blue[8],
    backgroundColor: blue[8],
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginLeft: 40,
    marginRight: 40
  },
  countdownText: {
    fontWeight: 'bold',
    color: blue[1],
  },
  green: {
    backgroundColor: green[4],
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
    backgroundColor: red[2],
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
    color: blue[1],
    paddingBottom: 20,
  },
  passText: {
    fontSize: 30,
    color: blue[1],
    paddingBottom: 20,
  },
  appButtonContainer: {
    elevation: 8,
    width: '100%',
    backgroundColor: blue[8],
    paddingVertical: 10,
  },
  appButtonText: {
    fontSize: 18,
    color: blue[0],
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  fullWidth: {
    flex:1,
    justifyContent: 'flex-end',
    width: '100%'
  },
  deckImage: {
    width: '100%',
    height: 160,
    padding: 10
  },
})
