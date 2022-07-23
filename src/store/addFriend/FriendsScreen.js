import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, View, Button} from 'react-native';
import {addFriend} from './FriendsActions';
import {useDispatch, useSelector} from 'react-redux';

const FriendsScreen = ({navigation}) => {
  const friends = useSelector(state => state.friendsReducer);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>Add friends here!</Text>

      {friends.possible.map((friend, index) => (
        <Button
          key={friend}
          title={`Add ${friend}`}
          onPress={() => dispatch(addFriend(index))}
        />
      ))}

      <Button
        title="Back to home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// const mapStateToProps = state => {
//   const {friends} = state;
//   return {friends};
// };

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(
//     {
//       addFriend,
//     },
//     dispatch,
//   );

export default FriendsScreen;
// export default connect(mapStateToProps, mapDispatchToProps)(FriendsScreen);
