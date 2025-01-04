import {View, Text, Image} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native";
import {ScrollView} from "react-native";

import images from '@/constants/images';

const SignIn = () => {
    return (
        <SafeAreaView className="bg-white h-full">
            <ScrollView contentContainerClassName="h-full">
                <Image source={images.onboarding} className="w-full h-4/6" resizeMode="contain"/>
                <View className="px-10">
                    <Text className="text-base text-center uppercase font-rubik text-black-200">
                        Welcome to HomeTrail</Text>
                    <Text className="text-2xl font-rubik-bold text-black-300 text-center mt-2">
                        Let's Get You Closer To {"\n"}
                        <Text className="text-primary-300">Your Ideal Home</Text>
                    </Text>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}
export default SignIn
