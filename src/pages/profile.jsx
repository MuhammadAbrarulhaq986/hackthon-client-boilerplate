import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios"; // Import axios for backend API calls

const Profile = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;

  // Fetch user data
  useEffect(() => {
    const fetchUser = async () => {
      try {
        // TODO: Replace with your backend API call to fetch user data
        // Example: const response = await axios.get(`/api/users/${id}`);
        // setUser(response.data);
        setLoading(false); // Set loading to false after data is fetched
      } catch (err) {
        setError(err.message); // Set error message if fetching fails
        setLoading(false); // Set loading to false even if there's an error
        console.error("Error fetching user data:", err);
      }
    };

    fetchUser();
  }, [id]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-center">
          <h1 className="text-3xl font-bold text-white">Profile</h1>
          <p className="text-sm text-purple-200 mt-2">
            View and manage your profile
          </p>
        </div>

        {/* Body Section */}
        <div className="p-6">
          {loading ? (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500"></div>
            </div>
          ) : error ? (
            <p className="text-red-500 text-center font-semibold">{error}</p>
          ) : (
            <div className="space-y-6">
              {/* Profile Image */}
              <div className="flex justify-center">
                <img
                  src={user.imageUrl || "https://via.placeholder.com/150"} // Fallback image
                  alt={`${user.name}'s profile`}
                  className="w-32 h-32 rounded-full object-cover border-4 border-purple-500"
                />
              </div>

              {/* User Details */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <p className="mt-1 p-2 bg-gray-100 rounded-lg text-gray-900">
                    {user.name || "N/A"}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <p className="mt-1 p-2 bg-gray-100 rounded-lg text-gray-900">
                    {user.email || "N/A"}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    User ID
                  </label>
                  <p className="mt-1 p-2 bg-gray-100 rounded-lg text-gray-900">
                    {id || "N/A"}
                  </p>
                </div>
              </div>

              {/* Back Button */}
              <div className="flex justify-center">
                <button
                  className="w-full bg-purple-600 text-white p-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-200"
                  onClick={() => navigate("/")}
                >
                  Back to Home
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
