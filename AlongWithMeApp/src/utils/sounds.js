import RainSound1 from "../assets/sounds/rain_one.mp3"
import RainSound2 from "../assets/sounds/rain_two.mp3"
import RainSound3 from "../assets/sounds/rain_three.mp3"

import FireSound1 from "../assets/sounds/fire_one.mp3"
import FireSound2 from "../assets/sounds/fire_two.mp3"
import FireSound3 from "../assets/sounds/fire_three.mp3"

import ForestSound1 from "../assets/sounds/forest_one.mp3"
import ForestSound2 from "../assets/sounds/forest_two.mp3"
import ForestSound3 from "../assets/sounds/forest_three.mp3"


var Sound = require("react-native-sound");

  var rain1 = new Sound(RainSound1, Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.warn("failed to load the sound", error);
      return;
    }
    console.warn("it loaded")
    rain1.play((success) => {
      if (success) {
        console.warn("success")
      }
      else {
        console.warn("it fail")
      }
    })
  })

  var rain2 = new Sound(RainSound2, Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.warn("failed to load the sound", error);
      return;
    }
    console.warn("it loaded")
    rain1.play((success) => {
      if (success) {
        console.warn("success")
      }
      else {
        console.warn("it fail")
      }
    })
  })

  var rain3 = new Sound(RainSound3, Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.warn("failed to load the sound", error);
      return;
    }
    console.warn("it loaded")
    rain1.play((success) => {
      if (success) {
        console.warn("success")
      }
      else {
        console.warn("it fail")
      }
    })
  })
  
  var fire1 = new Sound(FireSound1, Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.warn("failed to load the sound", error);
      return;
    }
    console.warn("it loaded")
    fire1.play((success) => {
      if (success) {
        console.warn("success")
      }
      else {
        console.warn("it fail")
      }
    })
  })
  
  var fire2 = new Sound(FireSound2, Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.warn("failed to load the sound", error);
      return;
    }
    console.warn("it loaded")
    fire2.play((success) => {
      if (success) {
        console.warn("success")
      }
      else {
        console.warn("it fail")
      }
    })
  })
  
  var fire3 = new Sound(FireSound3, Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.warn("failed to load the sound", error);
    }
    console.warn("it loaded")
    fire3.play((success) => {
      if (success) {
        console.warn("success")
      }
      else {
        console.warn("it fail")
      }
    })
  })

  var forest1 = new Sound(ForestSound1, Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.warn("failed to load the sound", error);
      return;
    }
    console.warn("it loaded")
    forest1.play((success) => {
      if (success) {
        console.warn("success")
      }
      else {
        console.warn("it fail")
      }
    })
  })
  
  var forest2 = new Sound(ForestSound2, Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.warn("failed to load the sound", error);
      return;
    }
    console.warn("it loaded")
    forest2.play((success) => {
      if (success) {
        console.warn("success")
      }
      else {
        console.warn("it fail")
      }
    })
  })
  
  var forest3 = new Sound(ForestSound3, Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.warn("failed to load the sound", error);
    }
    console.warn("it loaded")
    forest3.play((success) => {
      if (success) {
        console.warn("success")
      }
      else {
        console.warn("it fail")
      }
    })
  })

  export {rain1, rain2, rain3, fire1, fire2, fire3, forest1, forest2, forest3}