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

export { FETCH_COLLECTION, FETCH_DOC, FETCH_SUBCOLLECTION };
