import RainSound1 from "../assets/rain_choiceone.mp3"
import FireSound1 from "../assets/fire_one.mp3"
import FireSound2 from "../assets/fire_two.mp3"
import FireSound3 from "../assets/fire_three.mp3"


var Sound = require("react-native-sound");

const sounds = [
    {
      title:"mp3 in bundle",
      url: RainSound1,
      basePath: Sound.MAIN_BUNDLE
    },
    {
      title:"mp3 for fire1",
      url: FireSound1,
      basePath: Sound.MAIN_BUNDLE
    },
    {
      title:"mp3 for fire2",
      url: FireSound2,
      basePath: Sound.MAIN_BUNDLE
    },
    {
      title:"mp3 for fire2",
      url: FireSound3,
      basePath: Sound.MAIN_BUNDLE
    },
  ]

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

  export {rain1, fire1, fire2, fire3}