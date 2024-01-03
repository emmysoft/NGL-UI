//import libraries
import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import tw from 'twrnc';
import * as Clipboard from "expo-clipboard";
import { LinearGradient } from 'expo-linear-gradient';

//import components
import CustomButton from '../../components/CustomButton';

const Play = () => {

    const copyToClipboard = async () => {
        await Clipboard.setStringAsync('NGL/emmysoft')
    }

    return (
        <>
            <StatusBar backgroundColor='#fff'/>
            <SafeAreaView style={tw`flex-1 bg-white`}>
                <ScrollView horizontal>
                    <View style={tw`m-8 flex flex-col justify-center items-center gap-4`}>
                        <LinearGradient colors={['#3a97f4', '#4f62fa']} style={tw`rounded-xl`}>
                            <Text style={tw`text-white text-center font-bold text-2xl w-72 h-48 py-12 px-2`}>Send me an anonymous message ✉ </Text>
                        </LinearGradient>

                        <View style={tw`bg-gray-200 px-24 py-8 flex flex-col justify-center items-center gap-4 rounded-lg`}>
                            <Text style={tw`flex justify-center items-center text-black text-xl font-bold`}>Step 1: Copy link</Text>
                            <Text style={tw`text-center text-white font-bold text-sm`}>NGL/emmysoft</Text>
                            <Text style={tw`text-[#3a97f4] p-5 text-base font-bold`} onPress={() => copyToClipboard}>Copy link</Text>
                        </View>

                        <View style={tw`bg-gray-200 px-8 py-8 flex flex-col justify-center items-center gap-4 rounded-lg`}>
                            <Text style={tw`flex justify-center items-center text-black text-xl font-bold text-center w-60`}>Step 2: Share your link on Instagram Story</Text>
                            <LinearGradient colors={['#3a97f4', '#4f62fa']} style={tw`rounded-3xl`}>
                                <CustomButton style={tw`flex flex-row justify-center items-center px-8 py-4 w-60`}>
                                    <Text style={tw`text-white text-center text-lg font-bold w-20`}>Share your Story</Text>
                                </CustomButton>
                            </LinearGradient>
                        </View>
                    </View>

                    <View style={tw`m-8 flex flex-col justify-center items-center gap-4`}>
                        <LinearGradient colors={['#8a64fa', '#7aa9ec']} style={tw`rounded-xl`}>
                            <Text style={tw`text-white font-bold text-center text-3xl w-72 h-48 py-12 px-2`}>Confession! 👄 </Text>
                        </LinearGradient>

                        <View style={tw`bg-gray-200 px-24 py-8 flex flex-col justify-center items-center gap-4 rounded-lg`}>
                            <Text style={tw`flex justify-center items-center text-black text-xl font-bold`}>Step 1: Copy link</Text>
                            <Text style={tw`text-center text-white font-bold text-sm`}>NGL/emmysoft</Text>
                            <Text style={tw`text-[#3a97f4] p-5 text-base font-bold`} onPress={() => copyToClipboard}>Copy link</Text>
                        </View>

                        <View style={tw`bg-gray-200 px-8 py-8 flex flex-col justify-center items-center gap-4 rounded-lg`}>

                            <Text style={tw`flex justify-center items-center text-black text-xl font-bold text-center w-60`}>Step 2: Share your link on Instagram Story</Text>

                            <LinearGradient colors={['#8a64fa', '#7aa9ec']} style={tw`rounded-3xl`}>
                                <CustomButton style={tw`flex flex-row justify-center items-center px-8 py-4 w-60`}>
                                    <Text style={tw`text-white text-center text-lg font-bold w-20`}>Share your Story</Text>
                                </CustomButton>
                            </LinearGradient>
                        </View>
                    </View>

                    <View style={tw`m-8 flex flex-col justify-center items-center gap-4`}>
                        <LinearGradient colors={['#ff425d', '#ff61ba']} style={tw`rounded-xl`}>
                            <Text style={tw`text-white font-bold text-center text-3xl w-72 h-48 py-12 px-2`}>Rizz Me 💧 </Text>
                        </LinearGradient>

                        <View style={tw`bg-gray-200 px-24 py-8 flex flex-col justify-center items-center gap-4 rounded-lg`}>
                            <Text style={tw`flex justify-center items-center text-black text-xl font-bold text-center`}>Step 1: Copy link</Text>
                            <Text style={tw`text-center text-white font-bold text-sm`}>NGL/emmysoft</Text>
                            <Text style={tw`text-[#3a97f4] p-5 text-base font-bold`} onPress={() => copyToClipboard}>Copy link</Text>
                        </View>

                        <View style={tw`bg-gray-200 px-8 py-8 flex flex-col justify-center items-center gap-4 rounded-lg`}>
                            <Text style={tw`flex justify-center items-center text-black text-xl font-bold text-center w-60`}>Step 2: Share your link on Instagram Story</Text>
                            <LinearGradient colors={['#ff425d', '#ff61ba']} style={tw`rounded-3xl`}>
                                <CustomButton style={tw`flex flex-row justify-center items-center px-8 py-4 w-60`}>
                                    <Text style={tw`text-white text-center text-lg font-bold w-20`}>Share your Story</Text>
                                </CustomButton>
                            </LinearGradient>
                        </View>
                    </View>

                    <View style={tw`m-8 flex flex-col justify-center items-center gap-4`}>
                        <LinearGradient colors={['#f6006d', '#dd0020']} style={tw`rounded-xl`}>
                            <Text style={tw`text-white font-bold text-center text-3xl w-72 h-48 py-12 px-2`}>Your Crush 💟 </Text>
                        </LinearGradient>

                        <View style={tw`bg-gray-200 px-24 py-8 flex flex-col justify-center items-center gap-4 rounded-lg`}>
                            <Text style={tw`flex justify-center items-center text-black text-xl font-bold`}>Step 1: Copy link</Text>
                            <Text style={tw`text-center text-white font-bold text-sm`}>NGL/emmysoft</Text>
                            <Text style={tw`text-[#3a97f4] p-5 text-base font-bold`} onPress={() => copyToClipboard}>Copy link</Text>
                        </View>

                        <View style={tw`bg-gray-200 px-8 py-8 flex flex-col justify-center items-center gap-4 rounded-lg`}>
                            <Text style={tw`flex justify-center items-center text-black text-xl font-bold text-center w-60`}>Step 2: Share your link on Instagram Story</Text>
                            <LinearGradient colors={['#f6006d', '#dd0020']} style={tw`rounded-3xl`}>
                                <CustomButton style={tw`flex flex-row justify-center items-center px-8 py-4 w-60`}>
                                    <Text style={tw`text-white text-center text-lg font-bold w-20`}>Share your Story</Text>
                                </CustomButton>
                            </LinearGradient>
                        </View>
                    </View>

                    <View style={tw`m-8 flex flex-col justify-center items-center gap-4`}>
                        <LinearGradient colors={['#000b29', '#002b9b']} style={tw`rounded-xl`}>
                            <Text style={tw`text-white font-bold text-center text-3xl w-72 h-48 py-12 px-2`}>Big Secret! 🤯 </Text>
                        </LinearGradient>

                        <View style={tw`bg-gray-200 px-24 py-8 flex flex-col justify-center items-center gap-4 rounded-lg`}>
                            <Text style={tw`flex justify-center items-center text-black text-xl font-bold`}>Step 1: Copy link</Text>
                            <Text style={tw`text-center text-white font-bold text-sm`}>NGL/emmysoft</Text>
                            <Text style={tw`text-[#3a97f4] p-5 text-base font-bold`} onPress={() => copyToClipboard}>Copy link</Text>
                        </View>

                        <View style={tw`bg-gray-200 px-8 py-8 flex flex-col justify-center items-center gap-4 rounded-lg`}>
                            <Text style={tw`flex justify-center items-center text-black text-xl font-bold text-center w-60`}>Step 2: Share your link on Instagram Story</Text>
                            <LinearGradient colors={['#000b29', '#002b9b']} style={tw`rounded-3xl`}>
                                <CustomButton style={tw`flex flex-row justify-center items-center px-8 py-4 w-60`}>
                                    <Text style={tw`text-white text-center text-lg font-bold w-20`}>Share your Story</Text>
                                </CustomButton>
                            </LinearGradient>
                        </View>
                    </View>

                    <View style={tw`m-8 flex flex-col justify-center items-center gap-4`}>
                        <LinearGradient colors={['#c96fff', '#49a3ff']} style={tw`rounded-xl`}>
                            <Text style={tw`text-white font-bold text-center text-3xl w-72 h-48 py-12 px-2`}>3 WORDS</Text>
                        </LinearGradient>

                        <View style={tw`bg-gray-200 px-24 py-8 flex flex-col justify-center items-center gap-4 rounded-lg`}>
                            <Text style={tw`flex justify-center items-center text-black text-xl font-bold`}>Step 1: Copy link</Text>
                            <Text style={tw`text-center text-white font-bold text-sm`}>NGL/emmysoft</Text>
                            <Text style={tw`text-[#3a97f4] p-5 text-base font-bold`} onPress={() => copyToClipboard}>Copy link</Text>
                        </View>

                        <View style={tw`bg-gray-200 px-8 py-8 flex flex-col justify-center items-center gap-4 rounded-lg`}>
                            <Text style={tw`flex justify-center items-center text-black text-xl font-bold text-center w-60`}>Step 2: Share your link on Instagram Story</Text>
                            <LinearGradient colors={['#c96fff', '#49a3ff']} style={tw`rounded-3xl`}>
                                <CustomButton style={tw`flex flex-row justify-center items-center px-8 py-4 w-60`}>
                                    <Text style={tw`text-white text-center text-lg font-bold w-20`}>Share your Story</Text>
                                </CustomButton>
                            </LinearGradient>
                        </View>
                    </View>

                    <View style={tw`m-8 flex flex-col justify-center items-center gap-4`}>
                        <LinearGradient colors={['#621258', '#264e69']} style={tw`rounded-xl`}>
                            <Text style={tw`text-white font-bold text-center text-3xl w-72 h-48 py-12 px-2`}>TBH 😒 </Text>
                        </LinearGradient>

                        <View style={tw`bg-gray-200 px-24 py-8 flex flex-col justify-center items-center gap-4 rounded-lg`}>
                            <Text style={tw`flex justify-center items-center text-black text-xl font-bold`}>Step 1: Copy link</Text>
                            <Text style={tw`text-center text-white font-bold text-sm`}>NGL/emmysoft</Text>
                            <Text style={tw`text-[#3a97f4] p-5 text-base font-bold`} onPress={() => copyToClipboard}>Copy link</Text>
                        </View>

                        <View style={tw`bg-gray-200 px-8 py-8 flex flex-col justify-center items-center gap-4 rounded-lg`}>
                            <Text style={tw`flex justify-center items-center text-black text-xl font-bold text-center w-60`}>Step 2: Share your link on Instagram Story</Text>
                            <LinearGradient colors={['#621258', '#264e69']} style={tw`rounded-3xl`}>
                                <CustomButton style={tw`flex flex-row justify-center items-center px-8 py-4 w-60`}>
                                    <Text style={tw`text-white text-center text-lg font-bold w-20`}>Share your Story</Text>
                                </CustomButton>
                            </LinearGradient>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default Play;