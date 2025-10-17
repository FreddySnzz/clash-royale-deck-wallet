
import { db } from "@/firebase/config";
import {
  collection,
  doc,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  where,
  getDoc,
} from "firebase/firestore";
import DeckModel from "@/data/models/Deck.model";

const DECKS_COLLECTION = "decks";

export class DeckServiceError extends Error {
  status: number;
  constructor(
    message: string, 
    status = 400
  ) {
    super(message);
    this.status = status;
  };
};

async function deckExists(id: string): Promise<boolean> {
  const docSnap = await getDoc(
    doc(db, DECKS_COLLECTION, id)
  );

  return docSnap.exists();
};

export async function createDeck(
  data: Omit<DeckModel, "id">
): Promise<DeckModel> {
  const ref = await addDoc(
    collection(
      db, DECKS_COLLECTION
    ), data
  );

  const deck: DeckModel = { 
    id: ref.id, 
    ...data 
  };

  return deck;
};

export async function getDecks(): Promise<DeckModel[]> {
  const snapshot = await getDocs(
    collection(db, DECKS_COLLECTION)
  );

  return snapshot.docs.map(
    (doc) => ({ 
      id: doc.id, 
      ...doc.data() 
    } as DeckModel)
  );
};

export async function getDecksByUser(
  user_id: string
): Promise<DeckModel[]> {
  const q = query(collection(
    db, 
    DECKS_COLLECTION
  ), where("user_id", "==", user_id));

  const snapshot = await getDocs(q);

  return snapshot.docs.map(
    (doc) => ({ 
      id: doc.id, 
      ...doc.data() 
    } as DeckModel)
  );
};

export async function updateDeck(
  data: Partial<DeckModel>
) {
  const verifyDeck = await deckExists(data.id!);
  
  if (verifyDeck) {
    return await updateDoc(
      doc(db, DECKS_COLLECTION, data.id!), 
      data
    );
  };
};

export async function deleteDeck(
  id: string
) {
  await deleteDoc(
    doc(db, DECKS_COLLECTION, id)
  );
};
