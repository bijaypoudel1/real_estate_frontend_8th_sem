const ImageUploader: React.FC = ({ selectedImage, setSelectedImage }: any) => {
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file: any = event.target.files?.[0];
    setSelectedImage(file);
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-100 rounded-lg shadow-md">
      <label htmlFor="imageUpload" className="mb-4">
        <span className="text-lg font-semibold">Upload an image:</span>
        <input
          id="imageUpload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageUpload}
        />
        <div className="mt-2">
          {selectedImage ? (
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Selected"
              className="w-40 h-40 object-cover rounded"
            />
          ) : (
            <div className="w-40 h-40 bg-gray-300 rounded" />
          )}
        </div>
      </label>
      <div className="mt-4">
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          disabled={!selectedImage}
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default ImageUploader;
