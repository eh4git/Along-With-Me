import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  ActivityIndicator,
  Button,
  TouchableHighlight
} from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { connect } from 'react-redux';
import { autoSignIn } from '../../store/actions/user_actions';
import { getTokens, setTokens } from '../../utils/misc';
import Puppy from '../../assets/Puppy.mp4';
import Highlighter from 'react-native-highlight-words';
import {rain1, fire1, fire2, fire3} from "../../utils/sounds"

let story = `
    I could not hope to get a lodging under a roof, and sought it in the wood I have before alluded to. But my night was wretched, my rest broken: the ground was damp, the air cold: besides, intruders passed near me more than once, and I had again and again to change my quarters; no sense of safety or tranquillity befriended me. Towards morning it rained; the whole of the following day was wet. Do not ask me, reader, to give a minute account of that day; as before, I sought work; as before, I was repulsed; as before, I starved; but once did food pass my lips. At the door of a cottage I saw a little girl about to throw a mess of cold porridge into a pig trough. 
    
    "Will you give me that?" I asked.

    She stared at me. "Mother!" she exclaimed, "there is a woman wants me to give her these porridge."

    "Well lass," replied a voice within, "give it her if she's a beggar. T' pig doesn't want it."

    The girl emptied the stiffened mould into my hand, and I devoured it ravenously. As the wet twilight deepened, I stopped in a solitary bridle-path, which I had been pursuing an hour or more.
    
    "My strength is quite failing me," I said in a soliloquy. "I feel I cannot go much farther. Shall I be an outcast again this night? While the rain descends so, must I lay my head on the cold, drenched ground? I fear I cannot do otherwise: for who will receive me? But it will be very dreadful, with this feeling of hunger, faintness, chill, and this sense of desolation — this total prostration of hope. In all likelihood, though, I should die before morning. And why cannot I reconcile myself to the prospect of death? Why do I struggle to retain a valueless life? Because I know, or believe, Mr. Rochester is living: and then, to die of want and cold is a fate to which nature cannot submit passively. Oh, Providence! sustain me a little longer! Aid! — direct me!"`;
let keyword = "fire";
let backgroundColorHighlight;

class JaneComponent extends Component {

  state = {
    loading: false,
    isAuth: false
  }

  manageState(loading, isAuth) {
    this.setState({
      loading,
      isAuth
    })
  }

  componentDidMount() {
    const User = this.props.User;

    getTokens((value) => {
      if (value[0][1] === null) {
        this.manageState(false, false)
      } else {
        this.props.dispatch(autoSignIn(value[0][1]))
          .then(() => {
            !User.auth.token ?
              this.manageState(false, false)
              :
              setTokens(User.auth, () => {
                this.manageState(false, true)
              })
          })
      }
    })
  }


  // constructor() {
  //   super();
  //   this.state = {
  //     TextHolder: `Whatsoever she meant, Ermengarde was sure it was something delightfully exciting. So, quite thrilled with expectation, she followed her on tiptoe along the passage. They made not the least noise until they reached the door. Then Sara suddenly turned the handle, and threw it wide open. Its opening revealed the room quite neat and quiet, a fire gently burning in the grate, and a wonderful doll sitting in a chair by it, apparently reading a book. “Oh, she got back to her seat before we could see her!” Sara explained. “Of course they always do. They are as quick as lightning.” Ermengarde looked from her to the doll and back again. “Can she—walk?” she asked breathlessly. “Yes,” answered Sara. “At least I believe she can. At least I pretend I believe she can. And that makes it seem as if it were true. Have you never pretended things?” “No,” said Ermengarde. “Never. I—tell me about it.” She was so bewitched by this odd, new companion that she actually stared at Sara instead of at Emily—notwithstanding that Emily was the most attractive doll person she had ever seen. “Let us sit down,” said Sara, “and I will tell you. It’s so easy that when you begin you can’t stop. You just go on and on doing it always. And it’s A Little Princess: Chapter 3 by Frances Hodgson Burnett 6 Created for Lit2Go on the web at etc.usf.edu beautiful. Emily, you must listen. This is Ermengarde St. John, Emily. Ermengarde, this is Emily. Would you like to hold her?” “Oh, may I?” said Ermengarde. “May I, really? She is beautiful!” And Emily was put into her arms. Never in her dull, short life had Miss St. John dreamed of such an hour as the one she spent with the queer new pupil before they heard the lunch-bell ring and were obliged to go downstairs. Sara sat upon the hearth-rug and told her strange things. She sat rather huddled up, and her green eyes shone and her cheeks flushed. She told stories of the voyage, and stories of India; but what fascinated Ermengarde the most was her fancy about the dolls who walked and talked, and who could do anything they chose when the human beings were out of the room, but who must keep their powers a secret and so flew back to their places “like lightning” when people returned to the room`
  //   }
  // }

  playSound() {
    console.warn(this);
    // console.warn(this.children)
    if (this.children === ' rain ') {
      console.warn("ITS RAIN");
      fire1.play();
    }
    else if (this.children === 'grate') {
      console.warn("ITS A GRATE")
    }
  }

  stopSound() {
    fire1.stop()
  }

  render() {
    const params = this.props.navigation.state.params;

    return (
      <ScrollView style={{ backgroundColo: '#F0F0F0' }}>
        <View>
          {/* <Button
            title="Find Keywords"
            onPress={this.replaceTextFunction}
          /> */}
          <Text style={styles.textContainer}>

            <Highlighter
              highlightStyle={{backgroundColor: 'lightblue'}}
              searchWords={[' rain ']}
              textToHighlight={story}
              onPressHighlightedText={this.playSound}
              onPressNormalText={this.stopSound}
            />
           
          </Text>

        </View>

      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  textContainer: {
    marginLeft: 5,
    marginRight: 5
  }
});

function mapStateToProps(state) {
  return {
    User: state.User
  }
}

export default connect(mapStateToProps)(JaneComponent);