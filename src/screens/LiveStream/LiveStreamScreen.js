import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { WebView } from "react-native-webview";
import { COLORS, SIZES, SHADOWS } from "../../utils/theme";
import { LIVESTREAM } from "../../utils/mockData";
import moment from "moment";
import Button from "../../components/Button";

const { width } = Dimensions.get("window");

const LiveStreamScreen = () => {
  const [isLive, setIsLive] = useState(LIVESTREAM.isLive);
  const [timeUntilLive, setTimeUntilLive] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment();
      const scheduledTime = moment(LIVESTREAM.scheduledTime);
      const diff = scheduledTime.diff(now);

      if (diff <= 0 && !isLive) {
        // This would be replaced with actual logic to check if the stream is live
        setIsLive(true);
      } else if (diff > 0) {
        const duration = moment.duration(diff);
        const days = Math.floor(duration.asDays());
        const hours = duration.hours();
        const minutes = duration.minutes();
        const seconds = duration.seconds();

        setTimeUntilLive(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{LIVESTREAM.title}</Text>
        <Text style={styles.description}>{LIVESTREAM.description}</Text>

        {isLive ? (
          <View style={styles.videoContainer}>
            <View style={styles.liveIndicator}>
              <View style={styles.liveIndicatorDot} />
              <Text style={styles.liveIndicatorText}>LIVE</Text>
            </View>
            <WebView
              source={{ uri: LIVESTREAM.url }}
              style={styles.webview}
              allowsFullscreenVideo
              javaScriptEnabled
              domStorageEnabled
            />
          </View>
        ) : (
          <View style={styles.upcomingContainer}>
            <Text style={styles.upcomingTitle}>Live Stream Starting In:</Text>
            <Text style={styles.countdown}>{timeUntilLive}</Text>
            <Text style={styles.scheduledTime}>
              Scheduled for:{" "}
              {moment(LIVESTREAM.scheduledTime).format(
                "MMMM D, YYYY [at] h:mm A"
              )}
            </Text>
            <Button
              title="Set Reminder"
              onPress={() => alert("Reminder set!")}
              style={styles.reminderButton}
            />
          </View>
        )}

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>How to Watch</Text>
          <Text style={styles.infoText}>
            1. Make sure you have a stable internet connection.
          </Text>
          <Text style={styles.infoText}>
            2. The live stream will automatically start when the ceremony
            begins.
          </Text>
          <Text style={styles.infoText}>
            3. You can rotate your device for a fullscreen view.
          </Text>
          <Text style={styles.infoText}>
            4. If you experience any issues, try refreshing the page.
          </Text>
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
  content: {
    padding: 20,
  },
  title: {
    fontSize: SIZES.xLarge,
    fontWeight: "bold",
    color: COLORS.text,
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: SIZES.medium,
    color: COLORS.text,
    marginBottom: 20,
    textAlign: "center",
  },
  videoContainer: {
    width: "100%",
    height: width * 0.56, // 16:9 aspect ratio
    backgroundColor: COLORS.black,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
    position: "relative",
  },
  webview: {
    flex: 1,
  },
  liveIndicator: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "rgba(255, 0, 0, 0.7)",
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
    flexDirection: "row",
    alignItems: "center",
    zIndex: 10,
  },
  liveIndicatorDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.white,
    marginRight: 5,
  },
  liveIndicatorText: {
    color: COLORS.white,
    fontSize: SIZES.small,
    fontWeight: "bold",
  },
  upcomingContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    marginBottom: 20,
    ...SHADOWS.medium,
  },
  upcomingTitle: {
    fontSize: SIZES.large,
    fontWeight: "bold",
    color: COLORS.text,
    marginBottom: 15,
  },
  countdown: {
    fontSize: SIZES.xxLarge,
    fontWeight: "bold",
    color: COLORS.primary,
    marginBottom: 15,
  },
  scheduledTime: {
    fontSize: SIZES.medium,
    color: COLORS.text,
    marginBottom: 20,
  },
  reminderButton: {
    width: "80%",
  },
  infoCard: {
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 20,
    ...SHADOWS.medium,
  },
  infoTitle: {
    fontSize: SIZES.large,
    fontWeight: "bold",
    color: COLORS.primary,
    marginBottom: 15,
  },
  infoText: {
    fontSize: SIZES.medium,
    color: COLORS.text,
    marginBottom: 10,
    lineHeight: 22,
  },
});

export default LiveStreamScreen;
