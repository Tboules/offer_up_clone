import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import SellerCard from "../components/list/SellerCard";

export default function ListingScreen({ route }) {
  const { title, subtitle, imageLink } = route.params;
  return (
    <View style={styles.cont}>
      <Card
        title={title}
        subTitle={subtitle}
        imageLink={imageLink}
        noBR={true}
      />
      <SellerCard
        imageLink={require("../images/mosh.jpg")}
        name="Mosh Hamedani"
        description="5 Listings"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cont: { flex: 1 },
});
