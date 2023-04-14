import {Navigation} from 'react-native-navigation';
import {Text, TouchableHighlight, View} from 'react-native';

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
        <Text>{text}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default Link;
