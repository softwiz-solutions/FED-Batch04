"use client";
export default function Button({ handleOnClick, children }) {
  console.log("🚀 ~ Button ~ handleOnClick:", handleOnClick);
  console.log("🚀 ~ Button ~ children:", children);
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
}
