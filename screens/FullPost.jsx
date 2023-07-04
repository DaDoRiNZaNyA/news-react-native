import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const PostImage = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
`;

const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;
export const FullPostScreen = ({ route, navigation }) => {
    const { id, title, text, imageUrl } = route.params;

    React.useEffect(() => {
        navigation.setOptions({
            title: title,
        });
    }, [])

  return (
    <View style={{ padding: 20 }}>
      <PostImage source={{ uri: imageUrl }} />
      <PostText>{text}</PostText>
    </View>
  );
};