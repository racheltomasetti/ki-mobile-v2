import { View } from "react-native";
import DataVizualizationButton from "../components/buttons/DataVizualizationButton";
import ReviewCycleButton from "../components/buttons/ReviewCycleButton";
import FavoriteNotes from "../components/FavoriteNotes";
import UserProfile from "../components/UserProfile";
import { Flexoki } from "../theme/colors";

export default function Profile() {
  return (
    <View style={{ flex: 1, backgroundColor: Flexoki.ui }}>
      <UserProfile />
      <ReviewCycleButton />
      <DataVizualizationButton />
      <FavoriteNotes />
    </View>
  );
}
