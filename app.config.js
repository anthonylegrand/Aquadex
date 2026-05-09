module.exports = ({ config }) => ({
  ...config,
  experiments: {
    typedRoutes: true,
    reactCompiler: true
  },
  plugins: [
    ["expo-router", { root: "src/app" }],
    [
      "expo-splash-screen",
      {
        backgroundColor: "#1E88E5",
        android: {
          image: "./assets/images/splash-icon.png",
          imageWidth: 76
        }
      }
    ],
    "@rnmapbox/maps",
    "expo-localization",
    "expo-location"
  ]
});
