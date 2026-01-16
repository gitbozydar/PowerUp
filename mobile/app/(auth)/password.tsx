import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Password() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-white px-6">
        {/* logo */}
        <View className="items-center p-14">
          <Image
            className="w-72 h-32"
            source={{
              uri: "https://buisnessuserflowgro8d97.blob.core.windows.net/email-assets/FullLogo.png",
            }}
          />
        </View>
        <View>
          {/* labelki */}
          <View className="mb-5">
            <Text className="text-primaryText text-lg font-medium">
              Zarejestruj się/Zaloguj się
            </Text>
          </View>
          {/* email + button */}
          <View className="gap-4">
            <View className="gap-1">
              <Text className="text-primaryText font-extralight">
                Wprowadź hasło, aby przejść dalej.
              </Text>
              <TextInput
                placeholderTextColor={"#828282"}
                placeholder="Hasło"
                secureTextEntry={true}
                className="border border-border rounded-lg px-4 py-3"
              />
            </View>
            <View className="gap-1">
              <Text className="text-primaryText font-extralight">
                Powtórz hasło:
              </Text>
              <TextInput
                placeholderTextColor={"#828282"}
                placeholder="Powtórz hasło"
                secureTextEntry={true}
                className="border border-border rounded-lg px-4 py-3"
              />
            </View>
            <TouchableOpacity className="bg-primary rounded-lg py-4 items-center mb-6">
              <Text className="text-secondaryText">Utwórz konto/Zaloguj</Text>
            </TouchableOpacity>
          </View>
          {/* divider */}
        </View>
      </View>
    </SafeAreaView>
  );
}
