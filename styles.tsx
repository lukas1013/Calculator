import { StyleSheet, Dimensions } from "react-native";

const window = Dimensions.get("window")

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    alignContent: 'center',
    backgroundColor: 'white'
  },
  resultContainer: {
    width: '90%',
    padding: '2%',
  },
  result: {
    fontSize: window.width / 100 * 9,
    color: '#9b75d3'
  },
  scroll: {
    width: '90%',
    height: 80,
    maxHeight: 80,
    overflow: 'scroll',
  },
  scrollContentContainer: {
    width: '100%',
    alignItems: 'center',
    height: 'auto',
    marginVertical: '1%',
    alignSelf: 'baseline',
    paddingVertical: '2%'
  },
  input: {
    width: '100%',
    fontSize: window.width / 100 * 5,
    textAlignVertical: 'bottom',
    color: '#120908',
    backgroundColor: '#c7c9ff',
    padding: '2%',
    overflow: 'scroll',
    borderRadius: 10
  },
  buttonContainer: {
    width: '92%',
    height: '40%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'space-between',
    flexWrap: 'wrap'
  },
  button: {
    width: '21%',
    height: 'auto',
    backgroundColor: '#006eff',
    overflow: 'hidden',
    borderRadius: 5,
    padding: '1%',
    elevation: 3,
    shadowColor: '#63608a'
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: window.width / 100 * 6
  }
})

export default styles