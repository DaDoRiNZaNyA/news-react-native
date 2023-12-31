import { StatusBar, Text, Image, View } from 'react-native';
import  styled  from 'styled-components/native';

const PostView = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0,0,0, 0.1);
  border-bottom-style: solid;
`;

const PostImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  margin-right: 12px;
`;

const PostTitle = styled.Text`
  font-size: 17px;
  font-weight: 700;
`;

const PostData = styled.Text`
  font-size: 12px;
  color: rgba(0,0,0,0.4);
  margin-top: 2px;
`;

const PostDetails = styled.View`
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

const truncateTitle = (str) => {
  if ( str.length >= 50){
    return str.substring(0, 50) + '...';
  }

  return str;
}

export const Post = ( props ) => {
  const { title, imageUrl, createdAt } = props;

  return (
    <PostView>
      <PostImage source={{ uri: imageUrl }} />
      <PostDetails>
          <PostTitle>{truncateTitle(title)}</PostTitle>
          <PostData>{new Date(createdAt).toLocaleDateString()}</PostData>
      </PostDetails>
    </PostView>
    
  )
}