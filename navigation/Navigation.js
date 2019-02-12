import React from "react";
import {StyleSheet} from 'react-native';
import {
  Scene,
  Router,
  Actions,
  Reducer,
  ActionConst,
  Overlay,
  Tabs,
  Modal,
  Drawer,
  Stack,
  Lightbox
} from "react-native-router-flux";
import WordGen from "../screen/WordGen";

const MainStackNavigation = () => (
  <Router navigationBarStyle={styles.navbarContainer} titleStyle={styles.title}>
    <Stack key="root" hideNavBar titleStyle={{ alignSelf: "center" }}>
      <Scene
        hideNavBar={false}
        key="sobre"
        title="WordGen"
        component={WordGen}
      />
    </Stack>
  </Router>
);

export default MainStackNavigation;

const styles = StyleSheet.create({
  title: { color: "white" },
  navbarContainer: { backgroundColor: "#2c3e50" }
});
