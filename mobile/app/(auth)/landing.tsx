import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Facebook from "../../assets/images/facebook.png";
import Google from "../../assets/images/google.png";
import { useState } from "react";
import { emailSchema } from "@/validators/emailSchema";
import { router } from "expo-router";

export default function Landing() {
  const [email, setEmail] = useState("");

  const handleContinue = () => {
    const result = emailSchema.safeParse(email);

    if (!result.success) {
      alert(result.error.issues[0].message);
      return;
    }

    router.push({
      pathname: "/password",
      params: { email },
    });
  };

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
            <Text className="text-primaryText text-lg font-medium text-center">
              Zarejestruj się lub zaloguj
            </Text>
            <Text className="text-primaryText font-extralight text-center">
              Wprowadź email, aby przejść dalej.
            </Text>
          </View>
          {/* email + button */}
          <View className="gap-4">
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholderTextColor={"#828282"}
              placeholder="email@domain.com"
              className="border border-border rounded-lg px-4 py-3"
            />
            <TouchableOpacity
              onPress={handleContinue}
              className="bg-primary rounded-lg py-4 items-center mb-6"
            >
              <Text className="text-secondaryText">Kontynuuj</Text>
            </TouchableOpacity>
          </View>
          {/* divider */}
          <View className="flex-row items-center mb-6">
            <View className="flex-1 h-px bg-border" />
            <Text className="mx-4 text-tertiaryText">lub</Text>
            <View className="flex-1 h-px bg-border" />
          </View>
          <View className="gap-6">
            <View className="gap-2">
              <TouchableOpacity className="bg-secondary  rounded-lg py-3 flex-row justify-center items-center gap-3">
                <Image source={Google} style={{ width: 24, height: 24 }} />
                <Text className="text-primaryText font-medium">
                  Kontynuuj z Google
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-secondary  rounded-lg py-3 flex-row justify-center items-center gap-3">
                <Image source={Facebook} style={{ width: 24, height: 24 }} />
                <Text className="text-primaryText font-medium">
                  Kontynuuj z Facebook
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text className="font-light text-center text-tertiaryText">
                Klikając „Kontynuuj”, zgadzasz się na nasze Warunki korzystania
                z usługi oraz Politykę prywatności.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
