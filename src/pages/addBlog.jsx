import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios"; // Import axios for backend API calls

// Component
const CreateBlog = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [ifTryCreateBlog, setIfTryCreateBlog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ifBlogSuccess, setIfBlogSuccess] = useState(false);
  const [userData, setUserData] = useState(null);
  const { userId } = params;

  // Fetch user data when the component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // TODO: Replace with your backend API call to fetch user data
        // Example: const response = await axios.get(`/api/users/${userId}`);
        // setUserData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserData();
  }, [userId]);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  // Handle Form Submission
  const onSubmit = async (data) => {
    setLoading(true);
    const image = data.profileImage[0];

    try {
      // TODO: Replace with your backend API call to upload the image
      // Example: const imageUploadResponse = await axios.post("/api/upload", { image });
      // const imageUrl = imageUploadResponse.data.url;

      // TODO: Replace with your backend API call to create the blog
      // Example: const blogResponse = await axios.post("/api/blogs", {
      //   title: data.title,
      //   description: data.description,
      //   image: imageUrl,
      //   author: {
      //     uid: userId,
      //     image: userData?.profileImage,
      //     name: userData?.name,
      //     email: userData?.email,
      //   },
      // });

      setIfTryCreateBlog(true);
      setIfBlogSuccess(true);
    } catch (error) {
      console.log(error);
      setIfTryCreateBlog(true);
      setIfBlogSuccess(false);
    } finally {
      setLoading(false);
      reset();
      setTimeout(() => {
        navigate("/");
      }, 500);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="max-w-md w-full p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center bg-white text-gray-800">
          Create Blog
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <input
              type="text"
              placeholder="Enter Blog Title"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <span className="text-red-500 text-sm font-semibold">
                This field is required
              </span>
            )}
          </div>
          <div>
            <textarea
              name="description"
              rows={6}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter blog description"
              {...register("description", { required: true })}
            />
            {errors.description && (
              <span className="text-red-500 text-sm font-semibold">
                This field is required
              </span>
            )}
          </div>
          <div>
            <input
              type="file"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              {...register("profileImage", { required: true })}
            />
            {errors.profileImage && (
              <span className="text-red-500 text-sm font-semibold">
                This field is required
              </span>
            )}
          </div>
          <button
            type="submit"
            className="bg-purple-500 text-white p-3 rounded-lg hover:bg-purple-600 transition duration-200 disabled:bg-gray-400"
            disabled={loading}
          >
            {loading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
            ) : (
              "Create Blog"
            )}
          </button>
          <div>
            {ifTryCreateBlog ? (
              ifBlogSuccess ? (
                <span className="text-sm text-green-500 font-semibold">
                  Blog Created Successfully
                </span>
              ) : (
                <span className="text-sm text-red-500 font-semibold">
                  Creation Failed
                </span>
              )
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
