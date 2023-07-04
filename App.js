import React, { useEffect, useState } from 'react';
import { StatusBar, Text, Image, View, ActivityIndicator, ScrollView, RefreshControl, TouchableOpacity } from 'react-native';
import { Post } from './components/Post';

import { Home } from './screens/Home';
import { Navigation } from './screens/Navigation';

export default function App() {

  return (
    <Navigation/>
  );
}
