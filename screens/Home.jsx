import React, { useEffect, useState } from 'react';
import { StatusBar, Text, Image, View, ActivityIndicator, ScrollView, RefreshControl, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Post } from '../components/Post';
import { Loading } from '../components/Loading';

export const Home = ( {navigation} ) => {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchPosts = () => {
    setIsLoading(true);
    axios
      .get('https://api.jsonbin.io/v3/b/64a3090e8e4aa6225eb882a9')
      .then(({ data }) => {
        setItems(data.record);
      })
      .catch(err => {
        console.log(err);
        alert('Ошибка получения статей');
      })
      .finally(() => {
        setIsLoading(false);
        setIsRefreshing(false);
      });
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    fetchPosts();
  };

  useEffect(() => {
    navigation.setOptions({
        title: "Новости",
    });
    fetchPosts();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />}
      >
        {isLoading ? (
            <Loading/>
        ) : (
          items.map(obj => (
            <TouchableOpacity onPress={() => {
                navigation.navigate('FullPost', {id: obj.id, title: obj.title, imageUrl: obj.imageUrl, text: obj.text});
            }} >
              <Post
                key={obj.id}
                title={obj.title}
                createdAt={obj.createdAt}
                imageUrl={obj.imageUrl}
              />
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
