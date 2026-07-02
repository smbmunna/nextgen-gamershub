export default function NewGame() {
  return (
    <div className="w-1/2 mx-auto mt-20">
      <h2 className="text-center text-2xl font-medium ">Create new Game</h2>

      <form className="flex flex-col gap-4">
        <input
          className="input mt-8"
          type="text"
          name="name"
          placeholder="Game Name"
        />
        <select
          defaultValue="Select a Genre"
          name="genre"
          className="w-1/3 select"
        >
          <option disabled={true}>Select a Genre</option>
          <option>genre 1</option>
        </select>

        <select
          defaultValue="Select a Genre"
          name="genre"
          className="w-1/3 select"
        >
          <option disabled={true}>Select a Platform</option>
          <option>Platform 1</option>
        </select>

        <button className="btn btn-success w-20">Submit</button>
      </form>
    </div>
  );
}
