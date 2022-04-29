# Minesweeper
Minesweeper is a single-player puzzle video game. The objective of the game is to clear a rectangular board containing hidden "mines" or bombs without detonating any of them, with help from clues about the number of neighboring mines in each field.

# Instalation
For Android, Android Studio instalation is required (https://developer.android.com/studio/install).
For iOS, macOS and Xcode is required (https://developer.apple.com/xcode/) and CocoaPods (https://cocoapods.org/).
npm version 6 is required for both. After cloning the repository:


cd into the directory
run npm install
run npm install -g react-native-cli

# Available Scripts
In the project directory, you can run:

# react-native run-android

Attempts to open your app on a connected Android device or emulator. If you want to use device, not emulator, please run these commands first:
cd C:\Users<username>\AppData\Local\Android\Sdk\platform-tools
adb shell settings put global verifier_verify_adb_installs 0
adb shell settings put global package_verifier_enable 0
adb reverse tcp:8081 tcp:8081
