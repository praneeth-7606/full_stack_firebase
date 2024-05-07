import { signOut } from 'firebase/auth';

const logout = () => {
    signOut(auth)
        .then(() => {
            console.log("User logged out successfully");
            // Add any additional logic you need after logout
        })
        .catch((error) => {
            console.error("Logout error:", error);
        });
};
export default logout