import {Navigation} from 'react-native-navigation';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const Link = ({
  text = '',
  to = '',
  pop = false,
  componentId = '',
  data = {},
  style = {},
}) => {
  const handleClick = () => {
    if (pop) {
      Navigation.pop(componentId);
    } else {
      Navigation.push(componentId, {
        component: {
          name: to,
          passProps: data,
        },
      });
    }
  };

  return (
    <TouchableHighlight
      style={style}
      onPress={handleClick}
      underlayColor="#E5E5E5">
      <View>
        <Text style={styles.linkText}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  linkText: {
    fontSize: 16,
    color: '#1c1c1c'
  },
});

export default Link;
