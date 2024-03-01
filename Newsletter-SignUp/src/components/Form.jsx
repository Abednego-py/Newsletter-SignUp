function Form() {
  return (
    <form action="">
      <label htmlFor="email" className="d-block m-1">
        Email Address
      </label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="email@company.com"
        className="p-1 m-1"
      />
      <button type="submit" className="m-1">Subscribe to monthly newsletter</button>
    </form>
  );
}

export default Form;
