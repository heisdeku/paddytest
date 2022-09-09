import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {styles} from '../../styles';

export const Rule = ({number}) => {
  return (
    <View style={styles.rule}>
      <Text>{number}</Text>
      <View style={styles.ruleContent}>
        <Text style={styles.rulesHeader}>Be kind and courageous</Text>
        <Text style={styles.text}>
          ullamcorper. Eget pretium fringilla eros risus. Nibh imnardint nustato
          habitant dalar handrerit varius vitae
        </Text>
      </View>
      <TouchableOpacity style={styles.ruleMore}>
        <Feather name="more-horizontal" size={24} />
      </TouchableOpacity>
    </View>
  );
};
