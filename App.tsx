import React, {useEffect} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import {Navigation} from 'react-native-navigation';
import {SimpleAccordion} from 'react-native-simple-accordion';
import {poemList} from './content/allPoems';
import Link from './Link';
import RNBootSplash from 'react-native-bootsplash';

function App({componentId = ''}): JSX.Element {
  useEffect(() => {
    RNBootSplash.hide();
  }, []);

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={"white"} barStyle={'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{padding: 25, marginBottom: 25}}>
        <View style={{marginBottom: 25}}>
          <Image
            source={require('./assets/our-virtue.png')}
            style={styles.icon}
          />
          <Text style={styles.headline}>Our Virtue</Text>
          <Text style={styles.subHeadline}>An Introduction to God</Text>
        </View>
        <View style={{paddingBottom: 50}}>
          {poemList.map(chapter => {
            return (
              <SimpleAccordion
                key={chapter.title}
                title={chapter.title}
                viewInside={
                  <View>
                    {chapter.items.map(poem => {
                      return (
                        <Link
                          key={poem.path}
                          componentId={componentId}
                          to={'Poem'}
                          style={styles.poemLink}
                          text={poem.title}
                          data={poem}
                        />
                      );
                    })}
                  </View>
                }
                bannerStyle={styles.bannerStyle}
                viewContainerStyle={styles.viewContainerStyle}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 100,
    height: 100,
    marginBottom: 15,
  },
  headline: {
    fontSize: 48,
    fontWeight: '600',
    marginBottom: 5,
    color: '#1c1c1c'
  },
  subHeadline: {
    fontSize: 28,
    fontWeight: '300',
    color: '#1c1c1c'
  },
  bannerStyle: {backgroundColor: '#F7F7F7'},
  viewContainerStyle: {shadowColor: 'white'},
  poemLink: {
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
});

// App.options = {
//   topBar: {
//     visible: false,
//   },
// };

export default App;
