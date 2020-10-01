import React, { useState, useEffect } from "react";
import { database } from "./firebase";

// Fetch any collection from Firestore.
const FETCH_COLLECTION = (collection) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const unsubscribe = database.collection(collection).onSnapshot(
      (snapshot) => {
        const collectionData = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setData(collectionData);
      },
      () => {
        setError(true);
      }
    );
    setIsLoading(false);
    return () => unsubscribe();
  }, [collection]);

  return [data, isLoading, error];
};

// FETCH DOCUMENT FROM SPECIFIC COLLECTION
const FETCH_DOC = (collection, docId) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState([]);
  useEffect(() => {
    const unsubscribe = database
      .collection(collection)
      .doc(docId)
      .onSnapshot(
        (doc) => {
          const docData = doc.data();
          setSelectedDoc(docData);
        },
        () => {
          setError(true);
        }
      );
    setIsLoading(false);
    return () => unsubscribe();
  }, [collection, docId]);
  return [selectedDoc, isLoading, error];
};

// FETCH SUBCOLLECTION FROM SPECIFIC COLLECTION & DOCUMENT ID
const FETCH_SUBCOLLECTION = (collection, docId, subCollection) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedSubCol, setSelectedSubCol] = useState([]);

  useEffect(() => {
    const unsubscribe = database
      .collection(collection)
      .doc(docId)
      .collection(subCollection)
      .onSnapshot(
        (snapshot) => {
          const subCollectionData = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setSelectedSubCol(subCollectionData);
        },
        () => {
          setError(true);
        }
      );
    setIsLoading(false);
    return () => unsubscribe();
  }, [collection, docId, subCollection]);

  return [selectedSubCol, isLoading, error];
};

// CREATE EMPTY USER DOCUMENT ON INITIAL USER SETUP
const CREATE_NEW_USER_DOC = (name, email, uid) => {
  database
    .collection("users")
    .doc(uid)
    .set({
      appPlatform: "",
      banditLevel: "Trainee",
      deviceName: "",
      deviceUsageStat: "None",
      profileImg: "",
      userAge: "",
      userCurrWeight: "",
      userGoalWeight: "",
      userName: name,
      userId: uid,
      userLocation: "",
      userSex: "",
      userEmail: email,
    })
    .catch(console.error);

  CREATE_NEW_WORKOUT_HISTORY(uid);
};

// CREATE EMPTY USER WORKOUT HISTORY ON INITIAL USER SETUP
const CREATE_NEW_WORKOUT_HISTORY = (uid) => {
  database
    .collection("workoutHistory")
    .doc(uid)
    .set({
      amountOfWorkouts: 0,
      avgWorkoutLength: 0,
      lastWorkoutDate: "",
      totalTimeOfAllWorkouts: 0,
    })
    .catch(console.error);
};

// SAVE A NEW WORKOUT ONCE A USER IS DONE RECORDING WORKOUT
const SAVE_NEW_WORKOUT = (
  uid,
  workoutLength,
  workoutDate,
  workoutType,
  totalWorkoutLength,
  { workoutMap },
  amountOfExercises,
  dayOfWeek
) => {
  // TODO: FIND OUT HOW TO DEFERENCE EVERY VALUE IN {workoutMap}
  database
    .collection("workoutHistory")
    .doc(uid)
    .collection(workoutDate)
    .doc(workoutType)
    .set({
      workoutLength: workoutLength,
      totalWorkoutLength: totalWorkoutLength,
      amountOfExercises: amountOfExercises,
      dayOfWeek: dayOfWeek,
      // workoutMap
    })
    .catch(console.error);
};

// LOGINED IN USER DATA CACHE
// TODO

// FETCH LOGINED USER DATA WHEN THEY LOGIN
const FETCH_LOGINED_USER_DATA = (uid) => {
  const [selectedDoc] = FETCH_DOC("users", uid);
};

export {
  FETCH_COLLECTION,
  FETCH_DOC,
  FETCH_SUBCOLLECTION,
  CREATE_NEW_USER_DOC,
  SAVE_NEW_WORKOUT,
  FETCH_LOGINED_USER_DATA,
};
