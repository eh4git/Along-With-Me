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

let story = `He loved better than anything else to go with Bagheera into the dark warm heart of the forest, to sleep all through the drowsy day, and at night see how Bagheera did his killing. Bagheera killed right and left as he felt hungry, and so did Mowgli—with one exception. As soon as he was old enough to understand things, Bagheera told him that he must never touch cattle because he had been bought into the Pack at the price of a bull’s life. “All the jungle is thine,” said Bagheera, “and thou canst kill everything that thou art strong enough to kill; but for the sake of the bull that bought thee thou must never kill or eat any cattle young or old. That is the Law of the Jungle.” Mowgli obeyed faithfully.

By Red Flower Bagheera meant fire, only no creature in the jungle will call fire by its proper name. Every beast lives in deadly fear of it, and invents a hundred ways of describing it."

Mowgli, who had been trained under the Law of the Jungle, did not like or understand this kind of life. The monkeys dragged him into the Cold Lairs late in the afternoon, and instead of going to sleep, as Mowgli would have done after a long journey, they joined hands and danced about and sang their foolish songs. One of the monkeys made a speech and told his companions that Mowgli’s capture marked a new thing in the history of the Bandar-log, for Mowgli was going to show them how to weave sticks and canes together as a protection against rain and cold. Mowgli picked up some creepers and began to work them in and out, and the monkeys tried to imitate; but in a very few minutes they lost interest and began to pull their friends’ tails or jump up and down on all fours, coughing.`;

let keyword = "fire";
let backgroundColorHighlight;

class JungleComponent extends Component {

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
    if (this.children === ' fire ') {
      console.warn("ITS A FIRE");
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
              highlightStyle={{backgroundColor: 'orange'}}
              searchWords={[' forest', ' rain ', ' fire ']}
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

export default connect(mapStateToProps)(JungleComponent);