import React, { useEffect, useState } from "react";

import { firebase } from "../db/firebase";
import { SignedInStack, SignedOutStack } from "./AppStack";

function AuthNavigation(props) {
  const [currentUser, setCurrentUser] = useState(null);

  const userHandler = (user) =>
    user ? setCurrentUser(user) : setCurrentUser(null);

  useEffect(() =>
    firebase.auth().onAuthStateChanged((user) => userHandler(user))
  );
  return <>{currentUser ? <SignedInStack /> : <SignedOutStack />}</>;
}

export default AuthNavigation;
