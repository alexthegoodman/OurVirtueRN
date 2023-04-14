import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {englishPoemIndex} from './content/allPoems';

import Link from './Link';

function Poem({componentId = '', title = '', path = ''}): JSX.Element {
  const titlePath = path.split('/')[2];
  const poemContent = englishPoemIndex.find(po => po.slug === titlePath);

  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{padding: 25, marginBottom: 25}}>
        <Link
          componentId={componentId}
          pop={true}
          style={styles.backLink}
          text="Back to Poems"
        />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.content}>{poemContent?.content}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backLink: {
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 600,
  },
  content: {
    fontSize: 18,
    lineHeight: 28,
  },
});

export default Poem;
