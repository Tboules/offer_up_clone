import React from "react";
import * as Location from "expo-location";

export default useLocation = () => {
  const [location, setLocation] = React.useState(null);

  React.useEffect(() => {
    const askLocationPermission = async () => {
      try {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== "granted") {
          return;
        }
        const {
          coords: { latitude, longitude },
        } = await Location.getLastKnownPositionAsync();
        setLocation({ latitude, longitude });
      } catch (error) {
        console.log("error:", error);
      }
    };
    askLocationPermission();
  }, []);

  return location;
};
