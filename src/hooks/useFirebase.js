import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initilaizationAuthentication from "../Pages/Login/Firebase/firebase.init";


initilaizationAuthentication();
const useFirebae = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential.user)
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to the database
                saveUser(email, name, 'POST');
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const signInWithGoogle = (location, history) => {
        console.log('back to usefirebase')
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                // console.log(user)
                setUser(user)
                saveUser(user.email, user.displayName, 'PUT');
                setAuthError('');
                const destination = location?.state?.from || '/';
                history.replace(destination);
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }

    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                // getIdToken(user)
                // 	.then(idToken => {
                // 		setToken(idToken);
                // 	})
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])

    useEffect(() => {
        // fetch(`https://aqueous-inlet-49489.herokuapp.com/users/${user.email}`)
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        user,
        admin,
        token,
        isLoading,
        authError,
        registerUser,
        loginUser,
        signInWithGoogle,
        logOut,
    }

}


export default useFirebae;








































// import { useEffect, useState } from "react";
// import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
// import initilaizationAuthentication from "../Pages/Login/Firebase/firebase.init";

// initilaizationAuthentication();
// const useFirebase = () => {
//     const [user, setUser] = useState({});
//     const [autherror, setAuthError] = useState('');
//     const [isLoading, setIsLoading] = useState(true);
//     const auth = getAuth();

//     const registerUser = (email, password) => {
//         setIsLoading(true);
//         createUserWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 // Signed in 
//                 const user = userCredential.user;
//                 setAuthError('');
//             })
//             .catch((error) => {

//                 setAuthError(error.message);

//             })
//             .finally(() => setIsLoading(false));


//     };

//     // loginUser with email and password

//     const loginUser = (email, password) => {
//         setIsLoading(true);
//         signInWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {

//                 const user = userCredential.user;
//                 setAuthError('');

//             })
//             .catch((error) => {

//                 setAuthError(error.message);
//             })
//             .finally(() => setIsLoading(false));

//     };

//     // obserb user 
//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (user) => {
//             if (user) {

//                 setUser(user)

//             } else {
//                 setUser({})

//             }
//             setIsLoading(false)
//         });
//         return () => unsubscribe;

//     }, []);

//     const logOut = () => {
//         setIsLoading(true);
//         signOut(auth)
//             .then(() => {
//                 // Sign-out successful.
//             }).catch((error) => {
//                 // An error happened.
//             })
//             .finally(() => setIsLoading(false));

//     };

//     return {
//         user,
//         registerUser,
//         autherror,
//         isLoading,
//         logOut,
//         loginUser
//     }

// }
// export default useFirebase;