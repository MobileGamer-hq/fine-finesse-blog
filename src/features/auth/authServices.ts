import type { User } from "../../types/user.ts";
import { db, auth } from '../../services/firebase.ts';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";

// Register a new user
const register = async (userData: User & { password: string }) => {
    try {
        if (!userData.email || !userData.password) throw new Error("Email and password are required");

        // Create user in Firebase Auth
        const userCredential = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
        const user = userCredential.user;

        // Optional: set displayName
        if (userData.displayName) {
            await updateProfile(user, { displayName: userData.displayName });
        }

        const newUser: User = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName || userData.displayName || null,
            role: 'user', // Default role
            createdAt: serverTimestamp(),
        };

        // Save user data in Firestore
        await setDoc(doc(db, "users", user.uid), newUser);

        return newUser;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

// Login user
const login = async (userData: User & { password: string }) => {
    try {
        if (!userData.email || !userData.password) throw new Error("Email and password are required");

        const userCredential = await signInWithEmailAndPassword(auth, userData.email, userData.password);
        const user = userCredential.user;

        // Fetch user data from Firestore to get the role
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data() as User;
        } else {
            // Fallback if no firestore doc exists (shouldn't happen for new users, but possible for old ones)
            const fallbackUser: User = {
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                role: 'user'
            }
            return fallbackUser;
        }

    } catch (error: any) {
        throw new Error(error.message);
    }
};

// Logout user
const logout = async () => {
    try {
        await signOut(auth);
        return true;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const authServices = {
    register,
    login,
    logout,
}
