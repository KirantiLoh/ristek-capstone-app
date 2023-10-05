import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootRouteList {}
  }
}

export type RootRouteList = AuthenticatedParamList & UnauthenticatedParamList;

export type AuthenticatedParamList = {
  Home: undefined;
  Profile: undefined;
  Stats: {
    date: string;
  };
};

export type UnauthenticatedParamList = {
  Login: undefined;
  Register: undefined;
};

interface ITokens {
  access_token: string;
}
