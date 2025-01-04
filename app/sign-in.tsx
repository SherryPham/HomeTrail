import {View, Text, Image} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native";
import {ScrollView} from "react-native";

import images from '@/constants/images';

const SignIn = () => {
    return (
        <SafeAreaView className="bg-white h-full">
            <ScrollView contentContainerClassName="h-full">
                <Image source={images.onboarding} className="w-full h-full" resizeMode="contain"/>
            </ScrollView>
        </SafeAreaView>
    )
}
export default SignIn
