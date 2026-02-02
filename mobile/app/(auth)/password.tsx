import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Password() {
  const { email } = useLocalSearchParams();
  const [userExists, setUserExists] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [password, setPassword] = useState("");

  useEffect(() => {
    const checkUser = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/check-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });
        const data = await response.json();
        setUserExists(data.exists);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    checkUser();
  }, [email]);

  if (loading) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

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
              {userExists ? <>Email: {email}</> : <>Zarejestruj się</>}
            </Text>
          </View>
          {/* email + button */}
          <View className="gap-4">
            <View className="gap-1">
              <Text className="text-primaryText font-extralight">
                Wprowadź hasło:
              </Text>
              <TextInput
                placeholderTextColor={"#828282"}
                placeholder="Hasło"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                className="border border-border rounded-lg px-4 py-3"
              />
            </View>
            {!userExists && (
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
            )}
            <TouchableOpacity className="bg-primary rounded-lg py-4 items-center mb-6">
              <Text className="text-secondaryText">
                {userExists ? <>Zaloguj się</> : <>Utwórz konto</>}
              </Text>
            </TouchableOpacity>
          </View>
          {/* divider */}
        </View>
      </View>
    </SafeAreaView>
  );
}
