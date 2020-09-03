import React from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { weatherConditions } from '../../util/WeatherConditions'
import styles from './styles'
const Weather = ({ weather, temperature, location, humidity, detail }) => {

  return (
    <View
      style={[
        styles.weatherContainer,
        { backgroundColor: weatherConditions[weather].color }
      ]}
    >
      <View style={styles.headerContainer}>
      
        <MaterialCommunityIcons
          size={170}
          name={weatherConditions[weather].icon}
          color={'#fff'}
        />
      
        <Text style={styles.tempText}> {temperature}˚</Text>
      </View>
     
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{location}</Text>
        {/* <Text style={styles.time}>{time}</Text> */}
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{weatherConditions[weather].title}</Text>
        <Text style={styles.subtitle}>
          {weatherConditions[weather].subtitle}
        </Text>
        <Text style={styles.subtitle}>
          Humidade: {humidity}%
        </Text>
      </View>
    </View>
  );
};

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  weather: PropTypes.string
};


export default Weather;