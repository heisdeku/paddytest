import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../../styles';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/AntDesign';

export const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Icon name="arrowleft" size={24} />
      </TouchableOpacity>
      <Text style={styles.headerText}>Room information</Text>
      <TouchableOpacity>
        <Feather name="more-horizontal" size={24} />
      </TouchableOpacity>
    </View>
  );
};
