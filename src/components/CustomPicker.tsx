import {
  View,
  Text,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import React from 'react';
import styles from '../screens/bodyParameter/styles';
import { PickerProps } from '../@types/pickerProps.type';

const CustomPicker = <T extends number | string>({
  data,
  selectedValue,
  onValueChange,
}: PickerProps<T>) => {
  const ITEM_HEIGHT = 45;
  const paddedData = ['', ...data, ''];
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const yOffset = event.nativeEvent.contentOffset.y;
    const index = Math.round(yOffset / ITEM_HEIGHT);
    const value = data[index];

    if (value !== undefined && value !== selectedValue) {
      onValueChange(value);
    }
  };
  return (
    <View style={styles.pickerWrapper}>
      <FlatList
        data={paddedData}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        snapToInterval={ITEM_HEIGHT}
        decelerationRate="fast"
        onMomentumScrollEnd={handleScroll}
        renderItem={({ item }) => (
          <View style={styles.pickerItem}>
            <Text
              style={[
                styles.pickerText,
                item === selectedValue && styles.pickerTextSelected,
              ]}
            >
              {item}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default CustomPicker;
