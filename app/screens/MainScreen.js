import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import listingsApi from "../api/listings";
import AppText from "../components/AppText";
import Card from "../components/Card";
import CustActivityIndicator from "../components/CustActivityIndicator";
import CustButton from "../components/CustButton";
import useApi from "../hooks/useApi";
import colors from "../styles/colors";

export default function MainScreen({ navigation }) {
  const { request, error, loading, data } = useApi(listingsApi.getListings);

  useEffect(() => {
    request();
  }, []);

  return (
    <View style={styles.cont}>
      {error && (
        <>
          <AppText style={styles.error}>
            Could not retrieve the listings
          </AppText>
          <CustButton onPress={request} bgColor={colors.primary}>
            <AppText textColor={colors.white}>RETRY</AppText>
          </CustButton>
        </>
      )}

      <CustActivityIndicator visible={loading} />

      <FlatList
        data={data}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.price}
            imageLink={item.images[0].url}
            onPress={() =>
              navigation.navigate("Listing Information", {
                title: item.title,
                subtitle: item.price,
                imageLink: item.images[0].url,
              })
            }
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 10,
  },
  error: {
    textAlign: "center",
    marginBottom: 10,
  },
});
