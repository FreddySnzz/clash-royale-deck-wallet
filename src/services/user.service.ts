import { db } from "@/firebase/config";
import {
  collection,
  doc,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
  addDoc,
  query,
  where,
} from "firebase/firestore";
import UserModel from "@/data/models/User.model";
import { getDecksByUser } from "./deck.service";

const USERS_COLLECTION = "users";
const DECKS_COLLECTION = "decks";

export class UserServiceError extends Error {
  status: number;
  constructor(
    message: string, 
    status = 400
  ) {
    super(message);
    this.status = status;
  };
};

async function userExists(
  email: string, 
  tag?: string
): Promise<boolean> {
  const usersRef = collection(db, USERS_COLLECTION);

  const emailQuery = query(
    usersRef, where("email", "==", email)
  );
  const emailSnap = await getDocs(emailQuery);

  if (!emailSnap.empty) return true;

  const tagQuery = query(
    usersRef, where("tag", "==", tag)
  );
  const tagSnap = await getDocs(tagQuery);

  return !tagSnap.empty;
};

export async function createUser(
  user: Omit<UserModel, "id">
): Promise<UserModel | undefined> {
  const exists = await userExists(
    user.email, 
    user.tag
  );

  if (exists) throw new UserServiceError(
    "User with same email or tag already exists", 409
  );

  const userRef = await addDoc(
    collection(
      db, USERS_COLLECTION
    ), user
  );

  return { id: userRef.id, ...user };
};

export async function getUsers(): Promise<UserModel[]> {
  const snapshot = await getDocs(
    collection(db, USERS_COLLECTION)
  );

  return snapshot.docs.map(
    (d) => ({ 
      id: d.id, 
      ...d.data() 
    } as UserModel)
  );
};

export async function getUserById(
  id: string
): Promise<UserModel | null> {
  const docSnap = await getDoc(
    doc(db, USERS_COLLECTION, id)
  );

  const data = docSnap.exists() ? (
    docSnap.data() as UserModel
  ) : null;

  if (!data) throw new UserServiceError(
    "User not exists", 404
  );

  return data;
};

export async function getUserByTag(
  tag: string
): Promise<UserModel | null> {
  const q = query(collection(
    db, USERS_COLLECTION), where("tag", "==", tag)
  );

  const snapshot = await getDocs(q);

  if (snapshot.empty) throw new UserServiceError(
    "User not exists", 404
  );

  const doc = snapshot.docs[0];

  return { 
    id: doc.id, 
    ...doc.data() 
  } as UserModel;
};

export async function updateUser(
  id: string, 
  data: Partial<UserModel>
) {
  const getUser = await getUserById(id);

  if (!getUser) throw new UserServiceError(
    "User not exists", 400
  );

  return await updateDoc(
    doc(db, USERS_COLLECTION, id),
    data
  );
};

export async function deleteUser(id: string) {
  await getUserById(id);
  const decksRef = collection(db, DECKS_COLLECTION);
  const q = query(decksRef, where("user_id", "==", id));
  const decksSnapshot = await getDocs(q);

  const deleteDecksPromises = decksSnapshot.docs.map((deckDoc) =>
    deleteDoc(deckDoc.ref)
  );

  await Promise.all(deleteDecksPromises);
  await deleteDoc(
    doc(db, USERS_COLLECTION, id)
  );

  return {
    success: true, 
    message: "User and related decks deleted successfully" 
  };
};