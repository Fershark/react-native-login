import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Text, Button} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';

import {RootState} from '../redux';
import {logout} from '../redux/AuthSlice';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const {auth} = useSelector((state: RootState) => state.auth);

  const submit = () => {
    dispatch(logout());
  };

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Text h4 testID="authName">
        Name: {auth?.first_name} {auth?.last_name}
      </Text>
      <Text h4 testID="authId" style={styles.marginBottom}>
        Id: {auth?.id}
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Logout"
          testID="logout"
          buttonStyle={styles.buttonLogout}
          onPress={() => submit()}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  marginBottom: {
    marginBottom: 20,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonLogout: {
    backgroundColor: 'red',
  },
});

export default HomeScreen;
