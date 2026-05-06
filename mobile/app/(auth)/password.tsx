import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { z } from "zod";

// ---- WALIDACJA HASŁA ----
const passwordSchema = z
  .string()
  .min(8, "Hasło musi mieć minimum 8 znaków")
  .regex(/[A-Z]/, "Hasło musi zawierać przynajmniej jedną wielką literę")
  .regex(/[0-9]/, "Hasło musi zawierać przynajmniej jedną cyfrę");

export default function Password() {
  const { email } = useLocalSearchParams();
  const [userExists, setUserExists] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

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
        setError("Błąd serwera");
      } finally {
        setLoading(false);
      }
    };
    checkUser();
  }, [email]);

  const handleSubmit = async () => {
    setError("");

    if (!passwordSchema.safeParse(password).success) {
      const parsed = passwordSchema.safeParse(password);
      setError(parsed.success ? "" : parsed.error.issues[0].message);
      return;
    }

    if (!userExists && password !== confirmPassword) {
      setError("Hasła muszą być takie same");
      return;
    }

    try {
      const url = userExists
        ? "http://localhost:3000/api/login"
        : "http://localhost:3000/api/register";

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Coś poszło nie tak");
        return;
      }

      console.log("SUCCESS:", data);
      alert(userExists ? "Zalogowano!" : "Konto utworzone!");

      // Tu możesz przekierować do Home / dashboard
      // router.push("/home");
    } catch (err) {
      console.log(err);
      setError("Błąd sieci");
    }
  };

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

        {/* labelki */}
        <View className="mb-5">
          <Text className="text-primaryText text-lg font-medium">
            {userExists ? <>Email: {email}</> : <>Zarejestruj się</>}
          </Text>
        </View>

        {/* inputy */}
        <View className="gap-4">
          <View className="gap-1">
            <Text className="text-primaryText font-extralight">
              Wprowadź hasło:
            </Text>
            <TextInput
              placeholder="Hasło"
              placeholderTextColor="#828282"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              className="border border-border rounded-lg px-4 py-3"
            />
          </View>

          {!userExists && (
            <View className="gap-1">
              <Text className="text-primaryText font-extralight">
                Powtórz hasło:
              </Text>
              <TextInput
                placeholder="Powtórz hasło"
                placeholderTextColor="#828282"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                className="border border-border rounded-lg px-4 py-3"
              />
            </View>
          )}

          {error ? <Text className="text-red-500">{error}</Text> : null}

          <TouchableOpacity
            onPress={handleSubmit}
            className="bg-primary rounded-lg py-4 items-center mb-6"
          >
            <Text className="text-secondaryText">
              {userExists ? "Zaloguj się" : "Utwórz konto"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
