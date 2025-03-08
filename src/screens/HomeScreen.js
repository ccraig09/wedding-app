import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Image } from "expo-image";

import { COLORS, SIZES, SHADOWS } from "../utils/theme";
import CountdownTimer from "../components/CountdownTimer";
import { WEDDING_DATE } from "../utils/mockData";
import moment from "moment";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        {/* <Image source={coupleImage}  /> */}
        <Image
          source={require("../../assets/us_brown.png")}
          style={styles.headerImage}
        />

        <View style={styles.overlay}>
          <Text style={styles.title}>Our Wedding</Text>
          <Text style={styles.names}>Jackia & Carlos</Text>
          <Text style={styles.date}>
            {moment(WEDDING_DATE).format("MMMM D, YYYY")}
          </Text>
        </View>
      </View>

      <View style={styles.content}>
        <CountdownTimer />

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Wedding Ceremony</Text>
          <Text style={styles.infoText}>The Canopy Tulsa</Text>
          <Text style={styles.infoText}>
            19 E. Reconciliation Way, Tulsa, OK
          </Text>
          <Text style={styles.infoText}>
            {moment(WEDDING_DATE).format("h:mm A")}
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Reception</Text>
          <Text style={styles.infoText}>The Canopy Tulsa</Text>
          <Text style={styles.infoText}>
            19 E. Reconciliation Way, Tulsa, OK
          </Text>
          <Text style={styles.infoText}>
            {moment(WEDDING_DATE).add(2, "hours").format("h:mm A")}
          </Text>
        </View>

        <View style={styles.messageCard}>
          <Text style={styles.messageTitle}>A Message from the Couple</Text>
          <Text style={styles.message}>
            We are beyond excited to celebrate this special day with you all!
            This app will keep you updated with all the details, help you share
            special moments, and allow those who can't attend in person to still
            be a part of our big day. We can't wait to see you all at The Canopy
            Tulsa!
          </Text>
          <Text style={styles.signature}>With love, Jackia & Carlos</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    height: 300,
    position: "relative",
  },
  headerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover", // Ensures the image fills the space properly
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: SIZES.xxLarge,
    fontWeight: "bold",
    color: COLORS.white,
    marginBottom: 10,
  },
  names: {
    fontSize: SIZES.xLarge,
    color: COLORS.white,
    marginBottom: 5,
  },
  date: {
    fontSize: SIZES.medium,
    color: COLORS.white,
  },
  content: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 20,
  },
  infoCard: {
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    marginVertical: 10,
    width: "90%",
    ...SHADOWS.medium,
  },
  infoTitle: {
    fontSize: SIZES.large,
    fontWeight: "bold",
    color: COLORS.primary,
    marginBottom: 10,
  },
  infoText: {
    fontSize: SIZES.medium,
    color: COLORS.text,
    marginBottom: 5,
    textAlign: "center",
  },
  messageCard: {
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    width: "90%",
    ...SHADOWS.medium,
  },
  messageTitle: {
    fontSize: SIZES.large,
    fontWeight: "bold",
    color: COLORS.primary,
    marginBottom: 10,
    textAlign: "center",
  },
  message: {
    fontSize: SIZES.medium,
    color: COLORS.text,
    lineHeight: 24,
    textAlign: "center",
    marginBottom: 15,
  },
  signature: {
    fontSize: SIZES.medium,
    fontStyle: "italic",
    color: COLORS.text,
    textAlign: "right",
  },
});

export default HomeScreen;
