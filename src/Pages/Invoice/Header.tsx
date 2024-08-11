const Header = ({ resetForm }: { resetForm: () => void }) => {
  return (
    <div className="flex justify-between items-center p-6 bg-white">
      <h1 className="text-xl font-semibold">New Invoice</h1>
      <div>
        <button
          onClick={resetForm}
          type="reset"
          className="mr-4 bg-gray-200 text-gray-700 px-4 py-2 rounded-md"
        >
          Reset
        </button>
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded-md"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Header;
