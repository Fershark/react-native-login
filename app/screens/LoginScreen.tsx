import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Input, Button} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';

import {RootState} from '../redux';
import {login} from '../redux/AuthSlice';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const {status, error} = useSelector((state: RootState) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const submit = () => {
    let valid = true;
    if (email === '') {
      setEmailError('Email address is required');
      valid = false;
    } else {
      setEmailError('');
    }
    if (password === '') {
      setPasswordError('Password is required');
      valid = false;
    } else {
      setPasswordError('');
    }
    if (valid) {
      dispatch(login({email, password}));
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.marginBottom}>
        <Input
          label="Email address"
          testID="email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          autoFocus={true}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="Email address"
          errorMessage={emailError || (error?.message ?? '')}
        />
      </View>
      <View style={styles.marginBottom}>
        <Input
          label="Password"
          testID="password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          errorMessage={passwordError}
        />
      </View>
      <Button
        title="Submit"
        testID="submit"
        loading={status === 'loading'}
        disabled={status === 'loading'}
        onPress={() => submit()}
      />
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
});

export default LoginScreen;
