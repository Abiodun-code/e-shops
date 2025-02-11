import { View, Text, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

type Props = {
  state: any;
  descriptors: any;
  navigation: any;
}

const CustomTab = ({ state, descriptors, navigation }: Props) => {

  const icons = {
    Home: (props: any) => <AntDesign name='home' size={hp(3.5)} color={Colors.white} {...props} />,
    Setting: (props: any) => <Ionicons name='person-outline' size={hp(3.5)} color={Colors.white} {...props} />
  }

  return (
    <View
      style={{
        bottom: hp(0),
        backgroundColor: Colors.white,
        width: '100%',
        paddingVertical: hp(1),
        borderTopWidth: hp(.1),
        borderTopColor: Colors.gray,
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center',
      }}
    >
      {state.routes.map((route: any | undefined, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };
        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1, alignItems:'center'}}
          >
            {isFocused ? (
              <View>
                {icons[route.name]({
                  color: Colors.blue, // Change icon color when focused
                })}
              </View>
            ) : (
              icons[route.name]({
                color: Colors.black, // Default icon color when not focused
              })
            )}
            <Text style={{ color: isFocused ? Colors.blue : Colors.black, fontFamily: 'i500', fontSize: hp(1.5) }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default CustomTab;