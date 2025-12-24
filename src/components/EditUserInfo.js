const EditUserInfo = () => (
  <div>
    <h2>Edit Info</h2>
    <form action="submit">
      <label htmlFor="name">Name</label>
      <input type="text" />
      <label htmlFor="email">Email Id</label>
      <input type="email" />
      <label htmlFor="contact">Contact Number</label>
      <input type="text" />
      <button>Save</button>
    </form>
  </div>
);

export default EditUserInfo;
