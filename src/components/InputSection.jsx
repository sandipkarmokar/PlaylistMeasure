function InputSection() {
  return (
    <div className="w-4/6 flex justify-start m-10">
      <form action="submit" className="w-full text-left">
        <label htmlFor="Enter Playlist Url">Enter Playlist Url</label>

        <div className="flex w-full ">
          <input className="w-10/12 py-4 px-4" type="text" />
          <button className="w-2/12 py-4 px-4 bg-slate-500">Search</button>
        </div>
      </form>
    </div>
  );
}

export default InputSection;
