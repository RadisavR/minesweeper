import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#198a79',
    height: '30%',
  },
  buttonContainer: {
    margin: '2%',
    flexDirection: 'row',
  },
  restartButton: {
    width: 'auto',
    backgroundColor: '#126b5e',
    borderRadius: 10,
    marginLeft: '5%',
    paddingHorizontal: '1%',
  },
  button: {
    width: 'auto',
    backgroundColor: '#126b5e',
    borderRadius: 10,
    marginHorizontal: '2%',
    paddingHorizontal: '1%',
  },
  btnText: {
    fontSize: 20,
    color: 'white',
    padding: '2%',
  },
});

export { styles };
