import React from "react";
import {
  Button,
  Modal,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import defaultStyles from "../styles";
import AppText from "./AppText";
import PickerItem from "./PickerItem";

export default function AppPicker({
  icon,
  items,
  selected,
  onSelect,
  placeholder,
  width,
}) {
  const [modalVis, setModalVis] = React.useState(false);

  const handleModalItemChoice = (item) => {
    onSelect(item);
    setModalVis(false);
  };
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVis(true)}>
        <View style={{ ...styles.cont, width: width }}>
          {icon && (
            <Icon
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          <AppText
            textColor={
              selected ? defaultStyles.colors.dark : defaultStyles.colors.medium
            }
            style={styles.text}
          >
            {selected ? selected.label : placeholder}
          </AppText>
          <Icon
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVis} animationType="slide">
        <SafeAreaView>
          <Button title="close" onPress={() => setModalVis(false)} />
          <FlatList
            data={items}
            style={styles.modalList}
            keyExtractor={(item) => item.id.toString()}
            horizontal={false}
            numColumns={3}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => handleModalItemChoice(item)}
                iconName={item.iconName}
                iconColor={item.iconColor}
              />
            )}
          />
        </SafeAreaView>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  cont: {
    backgroundColor: defaultStyles.colors.white,
    width: "100%",
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 6,
  },
  text: {
    flex: 1,
  },
  modalList: {
    marginTop: 14,
  },
});
