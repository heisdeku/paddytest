import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Globe from '../assets/globe.jpeg';
import {resize} from '../utils';
import {Rule} from '../components/Rule';
import {Header} from '../components/Header';
import {styles} from '../styles';
import {roomTags} from '../utils';
import Toast from '../components/Toast';

const RoomInformation = () => {
  const [showToast, setShowToast] = useState(false);
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{marginBottom: resize(74)}}>
        <Header />
        <ImageBackground
          source={Globe}
          style={styles.imageBackground}
          resizeMode="cover"
        />
        <View style={styles.headingBlock}>
          <View>
            <Text style={styles.roomTitle}>Room #54A</Text>
            <View style={styles.tagFlex}>
              {roomTags.map((tag, i) => (
                <Text style={styles.tagItem} key={i}>
                  #{tag}
                </Text>
              ))}
            </View>
          </View>
          <TouchableOpacity>
            <Icon name="upload" size={24} color="#000" />
          </TouchableOpacity>
        </View>
        <View style={styles.activity}>
          <Text style={styles.activityBlockTitle}>Room activity</Text>
          <View>
            <View style={styles.activityInfo}>
              <Icon name="clockcircleo" size={20} />
              <Text style={styles.activityInfoText}>
                Created 20th July 2022
              </Text>
            </View>
            <View style={styles.activityInfo}>
              <Icon name="calendar" size={20} />
              <Text style={styles.activityInfoText}>
                {'>'}20 events per week
              </Text>
            </View>
            <View style={styles.activityInfo}>
              <Ionicons name="document-text-outline" size={20} />
              <Text style={styles.activityInfoText}>
                {'>'}100 resources shared
              </Text>
            </View>
          </View>
        </View>
        <View style={{...styles.activity, paddingBottom: 10}}>
          <Text style={styles.activityBlockTitle}>Description</Text>
          <Text style={styles.text}>
            ullamcorper. Eget pretium fringilla eros risus. Nibh imperdiet
            vulputate habitant dolor hendrerit varius vitae aliquam. Odio dolor
            ac lobortis integer amet. Turpis a diam aliquam a pellentesque lorem
            vitae dignissim neque. Enim a imperdiet lectus vitae elementum eget
            condimentum imperdiet viverra. Faucibus pulvinar integer nisl, sed
            aenean imper...<Text style={{fontWeight: 'bold'}}> See More</Text>
          </Text>
        </View>
        <View style={{...styles.activity, paddingBottom: 10}}>
          <Text style={styles.activityBlockTitle}>
            Room rules from the admin
          </Text>
          <View>
            <Rule number={1} />
            <Rule number={2} />
            <Rule number={3} />
          </View>
        </View>
      </ScrollView>
      <View style={styles.fixedOverlay}>
        <TouchableOpacity
          style={styles.joinRoomButton}
          onPress={() => setShowToast(true)}>
          <Text style={styles.joinRoomButtonText}>Join Room</Text>
        </TouchableOpacity>
      </View>
      <Toast show={showToast} onHide={setShowToast} />
    </View>
  );
};

export default RoomInformation;
